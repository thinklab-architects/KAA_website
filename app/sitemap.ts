
import type { MetadataRoute } from 'next';

const SITE = 'https://thinklab-architects.github.io/KAA_website';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE}/`, lastModified: now },
    { url: `${SITE}/news/`, lastModified: now },
    { url: `${SITE}/news/rss.xml`, lastModified: now },
    { url: `${SITE}/events/`, lastModified: now },
    { url: `${SITE}/events/ical.ics`, lastModified: now },
    { url: `${SITE}/courses/`, lastModified: now },
    { url: `${SITE}/awards/`, lastModified: now },
    { url: `${SITE}/resources/`, lastModified: now },
    { url: `${SITE}/membership/`, lastModified: now },
    { url: `${SITE}/services/`, lastModified: now },
    { url: `${SITE}/archive/`, lastModified: now },
    { url: `${SITE}/about/`, lastModified: now },
  ];
}
