import news from "@/data/news.json";

const SITE = "https://thinklab-architects.github.io/KAA_website";

export async function GET() {
  const items = news
    .map((n) => `
      <item>
        <title><![CDATA[${n.title}]]></title>
        <link>${SITE}/news/${n.id}/</link>
        <guid isPermaLink="false">${n.id}</guid>
        <pubDate>${new Date(n.published_at).toUTCString()}</pubDate>
        ${n.summary ? `<description><![CDATA[${n.summary}]]></description>` : ""}
      </item>
    `)
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

