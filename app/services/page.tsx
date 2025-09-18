export const metadata = { title: "服務 - KAA" };

export default function ServicesPage() {
  return (
    <div className="grid gap-6">
      <h1 className="text-2xl font-semibold">服務</h1>
      <ul className="grid gap-3">
        <li className="border rounded-xl p-4">
          <div className="font-medium">收費標準（參考）</div>
          <p className="text-sm text-neutral-600">拆章節呈現、右側目錄、可下載 PDF（規劃中）。</p>
        </li>
        <li className="border rounded-xl p-4">
          <div className="font-medium">線上委託</div>
          <p className="text-sm text-neutral-600">將升級表單體驗、驗證、防濫用與回執（規劃中）。</p>
        </li>
        <li className="border rounded-xl p-4">
          <div className="font-medium">常用表單與下載</div>
          <p className="text-sm text-neutral-600">
            室內裝修申請書等最新版本集中下載。
            <a className="underline ml-2" href="/files/室內裝修申請書v3.pdf">室內裝修申請書 v3.pdf</a>
          </p>
        </li>
      </ul>
    </div>
  );
}

