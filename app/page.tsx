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

  const result =
    shippingData.find((item) => item.size === size) || shippingData[0];

  const cheapest =
    result.mercari < result.yuupack ? "メルカリ便" : "ゆうパック";

  return (
    <main className="min-h-screen p-10 flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold">フリマ送料計算ツール</h1>

      <select
        className="border p-2 text-lg"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      >
        {shippingData.map((item) => (
          <option key={item.size} value={item.size}>
            {item.size}サイズ
          </option>
        ))}
      </select>

      <div className="text-xl">
        <p>メルカリ便: {result.mercari}円</p>
        <p>ゆうパック: {result.yuupack}円</p>
      </div>

      <div className="text-2xl font-bold">
        最安: {cheapest}
      </div>
    </main>
  );
}