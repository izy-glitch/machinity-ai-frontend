import { z } from "zod";

export const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  category: z.enum(["Laptop", "Telefon", "Tablet", "Akıllı Saat", "Kulaklık", "Aksesuar"]),
  brand: z.string(),
  price: z.number(),
  rating: z.number(),
  weight_kg: z.number().nullable(),
  cpu: z.string().nullable(),
  ram_gb: z.number().nullable(),
  storage_gb: z.number().nullable(),
  screen_inch: z.number().nullable(),
  battery_wh: z.number().nullable(),
  image_url: z.string().nullable(),
});

export const ProductsSchema = z.array(ProductSchema);
export type Product = z.infer<typeof ProductSchema>;
