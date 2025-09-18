import events from "@/data/events.json";
import type { EventItem } from "@/types/content";

const dataset = events as EventItem[];

function toICSDate(dt: string) {
  const d = new Date(dt);
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    d.getUTCFullYear().toString() +
    pad(d.getUTCMonth() + 1) +
    pad(d.getUTCDate()) +
    "T" +
    pad(d.getUTCHours()) +
    pad(d.getUTCMinutes()) +
    pad(d.getUTCSeconds()) +
    "Z"
  );
}

export async function GET() {
  const vevents = dataset
    .map(
      (event) => `BEGIN:VEVENT\nUID:${event.id}@kaa\nSUMMARY:${event.title}\nDTSTART:${toICSDate(event.start)}\n${event.end ? `DTEND:${toICSDate(event.end)}\n` : ""}LOCATION:${event.venue ?? ""}\nEND:VEVENT`
    )
    .join("\n");

  const ics = `BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//KAA//Events//TW\nCALSCALE:GREGORIAN\nMETHOD:PUBLISH\n${vevents}\nEND:VCALENDAR`;

  return new Response(ics, { headers: { "Content-Type": "text/calendar; charset=utf-8" } });
}
