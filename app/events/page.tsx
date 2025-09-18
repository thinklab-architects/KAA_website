import events from "@/data/events.json";
import type { EventItem } from "@/types/content";
import { EventsClient } from "./events-client";

export const metadata = { title: "活動與學習 - KAA" };

export default function Page() {
  return <EventsClient dataset={events as EventItem[]} />;
}
