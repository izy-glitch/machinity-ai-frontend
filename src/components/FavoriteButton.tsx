// src/components/FavoriteButton.tsx
"use client";
import { useEffect, useState } from "react";
import { useFavorites } from "@/store/favorites";

export default function FavoriteButton({ id }: { id: string }) {
  const { ids, toggle } = useFavorites();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Server’da render etmeyelim (veya küçük bir placeholder)
  if (!mounted) return null;

  const active = ids.includes(id);
  return (
    <button
      aria-label={active ? "Favoriden çıkar" : "Favoriye ekle"}
      onClick={(e) => {
        e.preventDefault(); // kart linkine tıklamayı engelle
        toggle(id);
      }}
      className={
        "rounded-md border px-3 py-1 text-sm hover:bg-zinc-50 transition " +
        (active ? "border-rose-500 text-rose-600" : "border-zinc-300")
      }
    >
      {active ? "Favoride" : "Favoriye ekle"}
    </button>
  );
}
