"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type FavState = {
  ids: string[];
  toggle: (id: string) => void;
  has: (id: string) => boolean;
};

export const useFavorites = create<FavState>()(
  persist(
    (set, get) => ({
      ids: [],
      toggle: (id) =>
        set((s) =>
          s.ids.includes(id)
            ? { ids: s.ids.filter((x) => x !== id) }
            : { ids: [...s.ids, id] }
        ),
      has: (id) => get().ids.includes(id),
    }),
    { name: "machinity:favorites" } // localStorage key
  )
);
