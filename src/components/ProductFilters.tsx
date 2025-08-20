"use client";

import { useState } from "react";
import { Product } from "@/types/product.schema";

type Props = {
  products: Product[];
  onChange: (list: Product[]) => void;
};

export default function ProductFilters({ products, onChange }: Props) {
  const [category, setCategory] = useState("");
  const [storage, setStorage] = useState("");
  const [screen, setScreen] = useState("");
  const [battery, setBattery] = useState("");
  const [sortPrice, setSortPrice] = useState("");
  const [sortRating, setSortRating] = useState("");

  function apply() {
    let list = [...products];

    // filtreleme
    if (category) list = list.filter(p => p.category === category);
    if (storage) list = list.filter(p => String(p.storage_gb) === storage);
    if (screen) list = list.filter(p => String(p.screen_inch) === screen);
    if (battery) list = list.filter(p => String(p.battery_wh) === battery);

    // sıralama (önce fiyat, sonra rating)
    if (sortPrice === "asc") list.sort((a, b) => a.price - b.price);
    if (sortPrice === "desc") list.sort((a, b) => b.price - a.price);

    if (sortRating === "asc") list.sort((a, b) => a.rating - b.rating);
    if (sortRating === "desc") list.sort((a, b) => b.rating - a.rating);

    onChange(list);
  }

  return (
    <div>
      <div className="mb-6">
          <h1 className="text-2xl font-bold mb-4">Filtreler</h1>
      </div>
      <div className="flex flex-wrap gap-4 items-end border p-4 rounded-lg bg-zinc-50 mb-6">
      {/* kategori */}
      <div>
        <label className="block text-sm">Kategori</label>
        <select value={category} onChange={e => setCategory(e.target.value)} className="border rounded p-1">
          <option value="">Hepsi</option>
          {[...new Set(products.map(p => p.category))].map(c => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* depolama */}
      <div>
        <label className="block text-sm">Depolama (GB)</label>
        <select value={storage} onChange={e => setStorage(e.target.value)} className="border rounded p-1">
          <option value="">Hepsi</option>
          {[...new Set(products.map(p => p.storage_gb).filter(Boolean))].map(s => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* ekran */}
      <div>
        <label className="block text-sm">Ekran (inç)</label>
        <select value={screen} onChange={e => setScreen(e.target.value)} className="border rounded p-1">
          <option value="">Hepsi</option>
          {[...new Set(products.map(p => p.screen_inch).filter(Boolean))].map(s => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* batarya */}
      <div>
        <label className="block text-sm">Batarya (Wh)</label>
        <select value={battery} onChange={e => setBattery(e.target.value)} className="border rounded p-1">
          <option value="">Hepsi</option>
          {[...new Set(products.map(p => p.battery_wh).filter(Boolean))].map(s => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* fiyat sıralama */}
      <div>
        <label className="block text-sm">Fiyat</label>
        <select value={sortPrice} onChange={e => setSortPrice(e.target.value)} className="border rounded p-1">
          <option value="">—</option>
          <option value="asc">Artan</option>
          <option value="desc">Azalan</option>
        </select>
      </div>

      {/* rating sıralama */}
      <div>
        <label className="block text-sm">Puan</label>
        <select value={sortRating} onChange={e => setSortRating(e.target.value)} className="border rounded p-1">
          <option value="">—</option>
          <option value="asc">Düşük → Yüksek</option>
          <option value="desc">Yüksek → Düşük</option>
        </select>
      </div>

        <button
          onClick={apply}
          className="ml-auto px-3 py-1 rounded bg-blue-600 text-white text-sm"
        >
          Uygula
        </button>
      </div>
    </div>
  );
}
