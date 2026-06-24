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
    <main className="min-h-screen p-10 flex flex-col items-center justify-center gap-5">

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
  <h2 className="mb-3 text-lg font-bold">ほかの便利ツール</h2>
  <div className="grid gap-2 text-sm text-blue-600 underline">
    <a href="https://calc-tools-mauve.vercel.app/">
      メルカリ・Amazon・ラクマ利益計算ツール
    </a>
    <a href="https://shipping-calc-olive.vercel.app/">
      メルカリ送料計算ツール
    </a>
    <a href="https://price-reverse-calc.vercel.app/">
      利益から販売価格を逆算するツール
    </a>
    <a href="https://fee-calc-seven.vercel.app/">
      メルカリ販売手数料計算ツール
    </a>
    <a href="https://profit-rate-calc.vercel.app/">
      メルカリ利益率計算ツール
    </a>
    <a href="https://discount-rate-calc.vercel.app/">
      割引率計算ツール
    </a>
    <a href="https://shipping-profit-calc.vercel.app/">
      送料込み利益計算ツール
    </a>
    <a href="https://amazon-fee-calc.vercel.app/">
      Amazon販売手数料計算ツール
    </a>
    <a href="https://roi-calc-woad.vercel.app/">
      ROI（投資利益率）計算ツール
    </a>
    <a href="https://break-even-calc-one.vercel.app/">
      損益分岐点計算ツール
    </a>
  </div>
</section>
<footer className="mt-8 text-center text-sm text-gray-500">
  <a className="underline" href="/privacy">
    プライバシーポリシー
  </a>
</footer>
    </main>
  );
}