import raw from "@/data/products.json";
import { ProductsSchema, type Product } from "@/types/product.schema";

export function getProducts(): Product[] {
  const parsed = ProductsSchema.safeParse(raw);
  if (!parsed.success) {
    // Dev'de hatayı konsola bas, prod'da sessiz boş liste dön.
    if (process.env.NODE_ENV !== "production") {
      console.error("products.json Zod doğrulama hatası:", parsed.error.format());
    }
    return [];
  }
  return parsed.data;
}

export function getProductById(id: string): Product | undefined {
  const list = getProducts();
  return list.find((p) => p.id === id);
}
