export const metadata = { title: "封存庫 - KAA" };

export default function ArchivePage() {
  return (
    <div className="grid gap-6">
      <h1 className="text-2xl font-semibold">封存庫（歷史資料）</h1>
      <p className="text-neutral-700">
        將停更專區移入本區保存檢索，避免干擾主導覽（例如：建築開講、舊社區建築師名單、舊作品展）。
      </p>
      <ul className="list-disc pl-5 text-sm">
        <li>建築開講（2014 止）</li>
        <li>社區建築師舊名單（101–106 年）</li>
        <li>舊作品展覽（整理中）</li>
      </ul>
    </div>
  );
}
