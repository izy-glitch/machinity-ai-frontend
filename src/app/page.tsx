"use client";

import productsRaw from "@/data/products.json";
import { ProductSchema } from "@/types/product.schema";
import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import ProductFilters from "@/components/ProductFilters";

export default function HomePage() {
  const products = productsRaw.map(p => ProductSchema.parse(p));
  const [list, setList] = useState(products);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Ürünler</h1>

      {/* Filtreleme ve sıralama bileşeni */}


      
      <ProductFilters products={products} onChange={setList} />

      {list.length === 0 ? (
        <p className="text-zinc-600">Eşleşen ürün bulunamadı.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </div>
  );
}
