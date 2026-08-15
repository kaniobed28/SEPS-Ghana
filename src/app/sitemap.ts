import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sri-ghana.org'; // Replace with actual production domain

  const routes = [
    '',
    '/about',
    '/programs',
    '/research',
    '/membership',
    '/events',
    '/resources',
    '/gallery',
    '/partners',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
