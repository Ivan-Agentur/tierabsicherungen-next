"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Startseite", href: "/" },
  { label: "Tarife", href: "/tarife" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[var(--navy)] sticky top-0 z-50 shadow-[0_2px_12px_rgba(0,0,0,.18)]">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
          <span className="text-2xl">🐾</span>
          <span className="font-bold text-base sm:text-lg text-white" style={{ fontFamily: "var(--font-playfair)" }}>
            <span className="hidden xs:inline">tierabsicherungen</span>
            <span className="xs:hidden">tierabsich.</span>
            <span className="text-[var(--gold)]">.de</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-2">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 border-2 ${
                  active
                    ? "bg-[var(--gold)] border-[var(--gold)] text-white"
                    : "border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden text-white p-1 rounded-md hover:bg-white/10 transition-colors"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menü öffnen"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="sm:hidden bg-[var(--navy)] border-t border-white/10 px-6 py-4 flex flex-col gap-2">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-semibold text-center transition-all duration-200 border-2 ${
                  active
                    ? "bg-[var(--gold)] border-[var(--gold)] text-white"
                    : "border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
