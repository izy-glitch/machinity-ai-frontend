"use client";
import { useFavorites } from "@/store/favorites";

export default function FavCount() {
  const { ids } = useFavorites();
  if (ids.length === 0) return null;
  return (
    <span className="ml-1 rounded-full bg-zinc-100 px-2 py-0.5 text-xs">
      {ids.length}
    </span>
  );
}
