"use client";

import productsJson from "@/data/products.json";
import { ProductSchema } from "@/types/product.schema";
import ProductCard from "@/components/ProductCard";
import { useFavorites } from "@/store/favorites";

export default function FavoritesPage() {
  const { ids } = useFavorites();

  // JSON’u Zod ile tek seferde doğrula (hata fırlatmasın diye safeParse)
  const parsed = ProductSchema.array().safeParse(productsJson);
  const all = parsed.success ? parsed.data : [];

  const favProducts = all.filter((p) => ids.includes(p.id));

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Favoriler</h1>

      {favProducts.length === 0 ? (
        <p className="text-zinc-600">Henüz favori ürün yok.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
