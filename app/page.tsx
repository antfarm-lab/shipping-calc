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

    </main>
  );
}