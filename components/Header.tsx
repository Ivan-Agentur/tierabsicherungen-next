"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Startseite", href: "/" },
  { label: "Tarife", href: "/tarife" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-[var(--navy)] sticky top-0 z-50 shadow-[0_2px_12px_rgba(0,0,0,.18)]">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🐾</span>
          <span
            className="font-bold text-lg text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            tierabsicherungen
            <span className="text-[var(--gold)]">.de</span>
          </span>
        </Link>

        <nav className="flex items-center gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active
                    ? "bg-[var(--gold)] text-white"
                    : "text-[var(--gold)] hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
