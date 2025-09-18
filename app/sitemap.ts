
import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://example.com/', lastModified: new Date() },
    { url: 'https://example.com/news/', lastModified: new Date() },
    { url: 'https://example.com/events/', lastModified: new Date() },
    { url: 'https://example.com/courses/', lastModified: new Date() },
    { url: 'https://example.com/awards/', lastModified: new Date() },
  ];
}
