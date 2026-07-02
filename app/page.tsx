"use client";
import { useState } from "react";

const shippingData = [
  { size: "60", mercari: 750, yuupack: 820 },
  { size: "80", mercari: 850, yuupack: 1130 },
  { size: "100", mercari: 1050, yuupack: 1450 },
  { size: "120", mercari: 1200, yuupack: 1770 },
];

export default function Home() {
  const [size, setSize] = useState("60");
  const [sellPrice, setSellPrice] = useState("");
  const [buyPrice, setBuyPrice] = useState("");

  const result =
    shippingData.find((item) => item.size === size) || shippingData[0];

  const cheapest =
    result.mercari < result.yuupack ? "メルカリ便" : "ゆうパック";

  const shippingCost =
    cheapest === "メルカリ便" ? result.mercari : result.yuupack;

  const profit =
    Number(sellPrice || 0) - Number(buyPrice || 0) - shippingCost;

  return (
   <main className="min-h-screen p-10 max-w-2xl mx-auto flex flex-col items-center justify-center gap-5">

      <h1 className="text-3xl font-bold">フリマ利益計算ツール</h1>

      <select
        className="border p-2"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      >
        {shippingData.map((item) => (
          <option key={item.size} value={item.size}>
            {item.size}サイズ
          </option>
        ))}
      </select>

      <input
        className="border p-2"
        placeholder="売値"
        value={sellPrice}
        onChange={(e) => setSellPrice(e.target.value)}
      />

      <input
        className="border p-2"
        placeholder="仕入れ値"
        value={buyPrice}
        onChange={(e) => setBuyPrice(e.target.value)}
      />

      <p>最安送料: {shippingCost}円</p>

      <div className="border rounded-xl p-4 bg-green-50">
        <p>予想利益</p>
        <p className="text-2xl font-bold">{profit}円</p>
      </div>
      <section className="mt-12 text-left max-w-3xl mx-auto space-y-6">

  <div>
    <h2 className="text-2xl font-bold mb-3">
      60サイズの送料はいくらかかる？
    </h2>
    <p>
      フリマアプリやネットショップで商品を発送する場合、
      60サイズは最もよく使われる配送サイズのひとつです。
      宅配会社によって料金が異なるため、
      事前に送料を比較して確認することが大切です。
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-bold mb-3">
      メルカリ発送で一番安い配送方法は？
    </h2>
    <p>
      メルカリではらくらくメルカリ便、ゆうゆうメルカリ便など複数の配送方法があります。
      サイズや重量によって最安値が変わるため、
      利益を残すためには送料計算が重要になります。
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-bold mb-3">
      送料を間違えると利益がなくなることもある
    </h2>
    <p>
      商品価格だけを見て利益計算すると、
      実際には送料負担で赤字になるケースがあります。
      フリマ販売や物販では発送前に送料を確認する習慣が重要です。
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-bold mb-3">
      よくある質問
    </h2>
    <p>
      Q. 宅急便60サイズの料金比較はできますか？<br />
      A. はい。配送会社ごとの料金比較に使えます。<br /><br />

      Q. メルカリ発送にも使えますか？<br />
      A. はい。フリマアプリの送料確認にも便利です。
    </p>
  </div>

</section>
      <section className="mt-10 bg-white rounded-xl p-6">
  <h2 className="text-xl font-bold mb-4">
    フリマ販売で送料計算が重要な理由
  </h2>

  <p className="mb-3">
    メルカリやラクマで商品を販売すると、送料は利益に大きく影響します。
    商品サイズによって送料が変わるため事前確認が重要です。
  </p>

  <p className="mb-3">
    サイズ選択を間違えると想定より送料が高くなり、
    利益が大きく減る可能性があります。
  </p>

  <p>
    この送料計算ツールでは配送サイズごとの送料を比較し、
    最も安い発送方法を確認できます。
  </p>
</section>
<section className="mt-10 rounded-xl border bg-white p-5">
 <h2 className="text-xl font-bold mb-3">
  他の便利ツール
</h2>

<ul className="list-disc pl-6 space-y-2 text-blue-600 underline">
  <li>
    <a href="https://calc-tools-mauve.vercel.app/">
      総合計算ツール
    </a>
  </li>
  <li>
    <a href="https://price-reverse-calc.vercel.app/">
      販売価格逆算ツール
    </a>
  </li>
  <li>
    <a href="https://fee-calc-seven.vercel.app/">
      手数料計算ツール
    </a>
  </li>
  <li>
    <a href="https://profit-rate-calc.vercel.app/">
      利益率計算ツール
    </a>
  </li>
  <li>
    <a href="https://discount-rate-calc.vercel.app/">
      割引率計算ツール
    </a>
  </li>
  <li>
    <a href="https://shipping-profit-calc.vercel.app/">
      送料込み利益計算ツール
    </a>
  </li>
  <li>
    <a href="https://amazon-fee-calc.vercel.app/">
      Amazon手数料計算ツール
    </a>
  </li>
  <li>
    <a href="https://roi-calc-woad.vercel.app/">
      ROI計算ツール
    </a>
  </li>
  <li>
    <a href="https://break-even-calc-one.vercel.app/">
      損益分岐点計算ツール
    </a>
  </li>
</ul>
</section>
<p className="mt-6 text-xs text-gray-500 text-center">
  このサイトはメルカリ・Amazon・ラクマ・せどり・副業に役立つ無料計算ツールを公開しています。
</p>
<footer className="mt-8 text-center text-sm text-gray-500">
  <a className="underline" href="/privacy">
    プライバシーポリシー
  </a>
</footer>
    </main>
  );
}