import news from "@/data/news.json";
import type { Article } from "@/types/content";
import { NewsClient } from "./news-client";

export const metadata = { title: "公告中心 - KAA" };

export default function Page() {
  return <NewsClient dataset={news as Article[]} />;
}

