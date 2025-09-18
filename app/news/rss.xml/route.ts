import news from "@/data/news.json";
import type { Article } from "@/types/content";

const SITE = "https://thinklab-architects.github.io/KAA_website";
const dataset = news as Article[];

export async function GET() {
  const items = dataset
    .map(
      (item) => `
      <item>
        <title><![CDATA[${item.title}]]></title>
        <link>${SITE}/news/${item.id}/</link>
        <guid isPermaLink="false">${item.id}</guid>
        <pubDate>${new Date(item.published_at).toUTCString()}</pubDate>
        ${item.summary ? `<description><![CDATA[${item.summary}]]></description>` : ""}
      </item>
    `
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title>KAA 公告中心</title>
      <link>${SITE}/news/</link>
      <description>最新公告 / 法規 / 公文 / 轉達 / 招標</description>
      ${items}
    </channel>
  </rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
