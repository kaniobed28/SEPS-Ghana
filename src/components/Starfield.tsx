'use client';

import { useEffect, useRef } from 'react';

type Variant = 'light' | 'dark';

interface StarfieldProps {
  /** 'dark' paints bright stars for dark sections; 'light' paints deep violet stars for the light theme. */
  variant?: Variant;
  /** Fixed viewport layer (site-wide) vs. absolute layer filling its positioned parent. */
  fixed?: boolean;
  /** Stars per 10,000px² of canvas. Higher is denser. */
  density?: number;
  /** Emit occasional shooting stars. */
  shootingStars?: boolean;
  className?: string;
}

interface Star {
  x: number;
  y: number;
  r: number;
  /** Parallax depth, 0.2 (far, slow) .. 1 (near, fast). */
  depth: number;
  /** Twinkle phase and speed. */
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
    base: '15, 23, 42',
    violet: '109, 40, 217',
    cyan: '8, 145, 178',
    maxAlpha: 0.55,
  },
  dark: {
    base: '255, 255, 255',
    violet: '196, 181, 253',
    cyan: '103, 232, 249',
    maxAlpha: 1,
  },
} as const;

export default function Starfield({
  variant = 'light',
  fixed = false,
  density = 0.9,
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

      const count = Math.round((width * height) / 10000 * density);
      stars = Array.from({ length: count }, () => {
        const depth = 0.2 + Math.random() * 0.8;
        const tint = Math.random();
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          // Nearer stars are larger, so parallax reads as depth.
          r: (0.4 + Math.random() * 1.1) * (0.6 + depth * 0.7),
          depth,
          phase: Math.random() * Math.PI * 2,
          speed: 0.4 + Math.random() * 1.2,
          hue: tint > 0.88 ? 'cyan' : tint > 0.72 ? 'violet' : 'base',
        };
      });
    };

    const spawnShooter = () => {
      // Enter from the top edge, travel down-left to down-right.
      const fromLeft = Math.random() > 0.5;
      const speed = 6 + Math.random() * 4;
      const angle = (fromLeft ? 1 : -1) * (0.35 + Math.random() * 0.25);
      shooters.push({
        x: fromLeft ? -40 : width + 40,
        y: Math.random() * height * 0.5,
        vx: fromLeft ? speed : -speed,
        vy: speed * angle * (fromLeft ? 1 : -1),
        life: 0,
        maxLife: 60 + Math.random() * 30,
      });
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);

      for (const s of stars) {
        // Slow diagonal drift, scaled by depth for parallax; wraps seamlessly.
        const drift = reduceMotion ? 0 : t * 0.004 * s.depth;
        const x = (s.x + drift) % (width + 4);
        const y = (s.y + drift * 0.35) % (height + 4);

        const twinkle = reduceMotion
          ? 0.75
          : 0.45 + 0.55 * (0.5 + 0.5 * Math.sin(t * 0.0012 * s.speed + s.phase));
        const alpha = twinkle * colors.maxAlpha * (0.35 + s.depth * 0.65);

        ctx.beginPath();
        ctx.arc(x, y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${colors[s.hue]}, ${alpha.toFixed(3)})`;
        ctx.fill();

        // Brightest near stars get a soft bloom.
        if (s.depth > 0.75 && s.r > 1) {
          ctx.beginPath();
          ctx.arc(x, y, s.r * 3.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${colors[s.hue]}, ${(alpha * 0.12).toFixed(3)})`;
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
      // Paint one static frame; no animation loop.
      draw(0);
    } else {
      frame = requestAnimationFrame(loop);
    }

    const onResize = () => {
      build();
      if (reduceMotion) draw(0);
    };
    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(frame);
      } else if (!reduceMotion && !running) {
        running = true;
        frame = requestAnimationFrame(loop);
      }
    };

    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [variant, density, shootingStars]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`${fixed ? 'fixed' : 'absolute'} inset-0 w-full h-full pointer-events-none ${className}`}
    />
  );
}
