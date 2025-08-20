import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header"; // süslü parantezle import
import { Footer } from "@/components/Footer"; // süslü parantezle import

export const metadata: Metadata = {
  title: "TECHNOBANKO · Teknoloji Ürünleri",
  description: "Apple odaklı teknoloji ürünleri vitrini",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="bg-zinc-50 text-zinc-900">
        <Header />
        <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
