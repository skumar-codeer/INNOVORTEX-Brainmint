import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://innovortex.com';

  const routes = [
    '',
    '/products/safeedge',
    '/technology',
    '/solutions',
    '/impact',
    '/about',
    '/vision',
    '/roadmap',
    '/trust',
    '/resources',
    '/contact',
    '/request-demo',
    '/privacy',
    '/terms',
    '/responsible-ai',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
