import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/format";
import RatingStars from "@/components/RatingStars";
import { getProducts, getProductById } from "@/lib/getProducts";

type Props = { params: { id: string } };

// SSG: build sırasında her ürün için /products/:id sayfasını önceden üret
export function generateStaticParams() {
  const list = getProducts();
  return list.map((p) => ({ id: p.id }));
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Ürün bulunamadı</h1>
        <Link href="/" className="text-blue-600 underline">Ana sayfaya dön</Link>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="relative aspect-square rounded-xl bg-white border">
        {product.image_url && (
          <Image
            src={product.image_url}
            alt={product.name}
            fill
            className="object-contain p-6"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        )}
      </div>

      <div className="space-y-4">
        <Link href="/" className="text-sm text-blue-600 underline">← Ana sayfaya geri dön</Link>
        <h1 className="text-2xl md:text-3xl font-bold">{product.name}</h1>
        <div className="text-zinc-600">{product.brand} · {product.category}</div>
        <RatingStars rating={product.rating} />
        <div className="text-2xl font-bold">{formatPrice(product.price)}</div>

        <div className="mt-4">
          <h2 className="font-semibold mb-2">Teknik Özellikler</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            <li><span className="text-zinc-500">Ağırlık: </span>{product.weight_kg !== null ? `${product.weight_kg} kg` : "—"}</li>
            <li><span className="text-zinc-500">CPU: </span>{product.cpu ?? "—"}</li>
            <li><span className="text-zinc-500">RAM: </span>{product.ram_gb !== null ? `${product.ram_gb} GB` : "—"}</li>
            <li><span className="text-zinc-500">Depolama: </span>{product.storage_gb !== null ? `${product.storage_gb} GB` : "—"}</li>
            <li><span className="text-zinc-500">Ekran: </span>{product.screen_inch !== null ? `${product.screen_inch}"` : "—"}</li>
            <li><span className="text-zinc-500">Batarya: </span>{product.battery_wh !== null ? `${product.battery_wh} Wh` : "—"}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
