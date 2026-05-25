"use client";
import { PhoneCall } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-[var(--navy)] sticky top-0 z-50 shadow-[0_2px_12px_rgba(0,0,0,.18)]">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-start">
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-2xl">🐾</span>
          <span
            className="font-bold text-lg text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            tierabsicherungen
            <span className="text-[var(--gold)]">.de</span>
          </span>
        </a>
      </div>
    </header>
  );
}
