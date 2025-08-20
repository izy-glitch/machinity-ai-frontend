import Image from "next/image";
import Link from "next/link";
import { type Product } from "@/types/product.schema";
import { formatPrice } from "@/lib/format";
import RatingStars from "./RatingStars";
import FavoriteButton from "./FavoriteButton";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group block rounded-xl border bg-white hover:shadow-md transition"
    >
      <div className="aspect-[4/3] relative overflow-hidden rounded-t-xl bg-zinc-50">
        {product.image_url ? (
          <Image
            src={product.image_url}
            alt={product.name}
            fill
            className="object-contain p-4 group-hover:scale-[1.02] transition"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-zinc-400">
            Görsel yok
          </div>
        )}
      </div>

      <div className="p-4 space-y-2">
        <div className="text-xs uppercase tracking-wide text-zinc-500">
          {product.brand} · {product.category}
        </div>

        <div className="font-semibold leading-snug line-clamp-2">{product.name}</div>

        <RatingStars rating={product.rating} />

        <div className="flex items-center justify-between">
          <div className="text-base font-bold">{formatPrice(product.price)}</div>
          <FavoriteButton id={product.id} />
        </div>
      </div>
    </Link>
  );
}
