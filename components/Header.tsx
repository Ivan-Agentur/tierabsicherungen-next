"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, HelpCircle } from "lucide-react";

const navLinks = [
  { label: "Startseite", href: "/" },
  { label: "Tarife", href: "/tarife" },
  { label: "Weiteres", href: "/weiteres" },
];

const navBtnClass = "px-4 py-2 rounded-lg text-sm font-semibold bg-[var(--gold)] text-white";
const navBtnMobileClass = "px-4 py-3 rounded-lg text-sm font-semibold text-center bg-[var(--gold)] text-white";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[var(--navy)] sticky top-0 z-50 shadow-[0_2px_12px_rgba(0,0,0,.18)]">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
          <span className="text-2xl">🐾</span>
          <span className="font-bold text-base sm:text-lg text-white" style={{ fontFamily: "var(--font-playfair)" }}>
            tierabsicherungen<span className="text-[var(--gold)]">.de</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={navBtnClass}>
              {link.label}
            </Link>
          ))}
          <Link
            href="/#faq"
            className="px-3 py-2 rounded-lg text-sm font-semibold bg-[var(--gold)] text-white flex items-center gap-1.5"
            title="Häufige Fragen"
          >
            FAQ
            <HelpCircle size={15} />
          </Link>
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
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className={navBtnMobileClass}>
              {link.label}
            </Link>
          ))}
          <Link
            href="/#faq"
            onClick={() => setOpen(false)}
            className={`${navBtnMobileClass} flex items-center justify-center gap-2`}
          >
            FAQ
            <HelpCircle size={15} />
          </Link>
        </div>
      )}
    </header>
  );
}
