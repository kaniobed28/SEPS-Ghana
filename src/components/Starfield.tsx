'use client';

import { useEffect, useRef } from 'react';

type Variant = 'light' | 'dark';

interface StarfieldProps {
  /** 'dark' paints bright stars for dark sections; 'light' paints saturated aurora stars for the light theme. */
  variant?: Variant;
  /** Fixed viewport layer (site-wide) vs. absolute layer filling its positioned parent. */
  fixed?: boolean;
  /** Stars per 10,000px² of canvas. Higher is denser. */
  density?: number;
  /**
   * Link nearby stars with hairlines. On pale backgrounds this is what makes the
   * field read as a constellation rather than dust — and makes the drift legible.
   */
  constellation?: boolean;
  /** Emit occasional shooting stars. */
  shootingStars?: boolean;
  className?: string;
}

interface Star {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  /** Parallax depth, 0.2 (far, slow, faint) .. 1 (near, fast, bright). */
  depth: number;
  phase: number;
  speed: number;
  hue: 'base' | 'violet' | 'cyan';
}

interface Shooter {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

const PALETTE = {
  light: {
    base: '76, 29, 149',
    violet: '109, 40, 217',
    cyan: '14, 116, 144',
    maxAlpha: 0.9,
    linkAlpha: 0.16,
  },
  dark: {
    base: '255, 255, 255',
    violet: '196, 181, 253',
    cyan: '103, 232, 249',
    maxAlpha: 1,
    linkAlpha: 0.14,
  },
} as const;

/** Stars closer than this (px) get linked. */
const LINK_DISTANCE = 132;

export default function Starfield({
  variant = 'light',
  fixed = false,
  density = 0.9,
  constellation = false,
  shootingStars = false,
  className = '',
}: StarfieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const colors = PALETTE[variant];

    let stars: Star[] = [];
    let shooters: Shooter[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let running = true;

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Linking is O(n²) per frame, so cap the population when it's enabled.
      const raw = Math.round(((width * height) / 10000) * density);
      const count = constellation ? Math.min(raw, 110) : raw;

      stars = Array.from({ length: count }, () => {
        const depth = 0.2 + Math.random() * 0.8;
        const tint = Math.random();
        const angle = Math.random() * Math.PI * 2;
        // Each star travels its own heading; nearer stars move faster (parallax).
        const speed = (0.08 + Math.random() * 0.16) * depth;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          r: (constellation ? 1 : 0.4 + Math.random() * 1.1) * (0.6 + depth * 0.9),
          depth,
          phase: Math.random() * Math.PI * 2,
          speed: 0.4 + Math.random() * 1.2,
          hue: tint > 0.86 ? 'cyan' : tint > 0.6 ? 'violet' : 'base',
        };
      });
    };

    const spawnShooter = () => {
      const fromLeft = Math.random() > 0.5;
      const speed = 6 + Math.random() * 4;
      const angle = 0.35 + Math.random() * 0.25;
      shooters.push({
        x: fromLeft ? -40 : width + 40,
        y: Math.random() * height * 0.5,
        vx: fromLeft ? speed : -speed,
        vy: speed * angle,
        life: 0,
        maxLife: 60 + Math.random() * 30,
      });
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);

      if (!reduceMotion) {
        const margin = 8;
        for (const s of stars) {
          s.x += s.vx;
          s.y += s.vy;
          // Wrap around the edges so the field never thins out.
          if (s.x < -margin) s.x = width + margin;
          else if (s.x > width + margin) s.x = -margin;
          if (s.y < -margin) s.y = height + margin;
          else if (s.y > height + margin) s.y = -margin;
        }
      }

      if (constellation) {
        ctx.lineWidth = 1;
        // Bucket into a grid of LINK_DISTANCE cells, so each star only tests the
        // eight neighbouring cells instead of every other star.
        const cols = Math.max(1, Math.ceil(width / LINK_DISTANCE));
        const rows = Math.max(1, Math.ceil(height / LINK_DISTANCE));
        const grid: Star[][] = Array.from({ length: cols * rows }, () => []);
        for (const s of stars) {
          const cx = Math.min(cols - 1, Math.max(0, Math.floor(s.x / LINK_DISTANCE)));
          const cy = Math.min(rows - 1, Math.max(0, Math.floor(s.y / LINK_DISTANCE)));
          grid[cy * cols + cx].push(s);
        }

        for (let cy = 0; cy < rows; cy++) {
          for (let cx = 0; cx < cols; cx++) {
            const cell = grid[cy * cols + cx];
            if (!cell.length) continue;
            // Only scan forward neighbours so each pair is visited once.
            for (const [ox, oy] of [[0, 0], [1, 0], [-1, 1], [0, 1], [1, 1]] as const) {
              const nx = cx + ox;
              const ny = cy + oy;
              if (nx < 0 || nx >= cols || ny >= rows) continue;
              const other = grid[ny * cols + nx];
              if (!other.length) continue;
              const sameCell = ox === 0 && oy === 0;

              for (let i = 0; i < cell.length; i++) {
                for (let j = sameCell ? i + 1 : 0; j < other.length; j++) {
                  const a = cell[i];
                  const b = other[j];
                  const dx = a.x - b.x;
                  const dy = a.y - b.y;
                  const distSq = dx * dx + dy * dy;
                  if (distSq > LINK_DISTANCE * LINK_DISTANCE) continue;
                  // Fade the line out as the pair separates.
                  const closeness = 1 - Math.sqrt(distSq) / LINK_DISTANCE;
                  const alpha = closeness * colors.linkAlpha * ((a.depth + b.depth) / 2);
                  ctx.strokeStyle = `rgba(${colors.violet}, ${alpha.toFixed(3)})`;
                  ctx.beginPath();
                  ctx.moveTo(a.x, a.y);
                  ctx.lineTo(b.x, b.y);
                  ctx.stroke();
                }
              }
            }
          }
        }
      }

      for (const s of stars) {
        const twinkle = reduceMotion
          ? 0.8
          : 0.5 + 0.5 * (0.5 + 0.5 * Math.sin(t * 0.0012 * s.speed + s.phase));
        const alpha = twinkle * colors.maxAlpha * (0.35 + s.depth * 0.65);

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${colors[s.hue]}, ${alpha.toFixed(3)})`;
        ctx.fill();

        // A soft halo on the nearest stars gives the field depth.
        if (s.depth > 0.72) {
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * 3.4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${colors[s.hue]}, ${(alpha * 0.14).toFixed(3)})`;
          ctx.fill();
        }
      }

      for (const sh of shooters) {
        sh.x += sh.vx;
        sh.y += sh.vy;
        sh.life += 1;
        const fade = 1 - sh.life / sh.maxLife;
        if (fade <= 0) continue;

        const tailX = sh.x - sh.vx * 9;
        const tailY = sh.y - sh.vy * 9;
        const gradient = ctx.createLinearGradient(sh.x, sh.y, tailX, tailY);
        gradient.addColorStop(0, `rgba(${colors.base}, ${(fade * colors.maxAlpha).toFixed(3)})`);
        gradient.addColorStop(1, `rgba(${colors.violet}, 0)`);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.6;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(sh.x, sh.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();
      }
      shooters = shooters.filter((sh) => sh.life < sh.maxLife);

      if (shootingStars && !reduceMotion && Math.random() < 0.0022) spawnShooter();
    };

    const loop = (t: number) => {
      if (!running) return;
      draw(t);
      frame = requestAnimationFrame(loop);
    };

    build();
    if (reduceMotion) {
      draw(0);
    } else {
      frame = requestAnimationFrame(loop);
    }

    // Off-screen and hidden-tab canvases stop entirely, so several fields can
    // coexist on one page without competing for frames.
    let onScreen = true;
    const resume = () => {
      if (reduceMotion || running || document.hidden || !onScreen) return;
      running = true;
      frame = requestAnimationFrame(loop);
    };
    const pause = () => {
      running = false;
      cancelAnimationFrame(frame);
    };

    const onResize = () => {
      build();
      if (reduceMotion) draw(0);
    };
    const onVisibility = () => {
      if (document.hidden) pause();
      else resume();
    };

    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', onVisibility);

    let observer: IntersectionObserver | undefined;
    if (!fixed) {
      observer = new IntersectionObserver(
        ([entry]) => {
          onScreen = entry.isIntersecting;
          if (onScreen) resume();
          else pause();
        },
        { rootMargin: '120px' }
      );
      observer.observe(canvas);
    }

    return () => {
      pause();
      observer?.disconnect();
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [variant, density, constellation, shootingStars, fixed]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`${fixed ? 'fixed' : 'absolute'} inset-0 w-full h-full pointer-events-none ${className}`}
    />
  );
}
