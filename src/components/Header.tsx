import Link from "next/link";
import FavCount from "./FavCount";


export function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          TECHNOBANKO
        </Link>
        <nav className="text-sm flex items-center gap-4">
        <Link href="/">Ana sayfa</Link>
        <Link href="/favorites" className="inline-flex items-center">
            Favoriler <FavCount />
        </Link>
        </nav>
      </div>
    </header>
  );
}
