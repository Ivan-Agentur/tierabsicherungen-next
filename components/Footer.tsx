import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--navy)] py-7">
      <div className="max-w-5xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🐾</span>
          <span
            className="font-bold text-white text-sm"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            tierabsicherungen<span className="text-[var(--gold)]">.de</span>
          </span>
        </div>
        <p className="text-white/40 text-xs">
          © 2026 tierabsicherungen.de · Ivan Aziablé · IHK-Reg.-Nr. D-JA31-D7W20-08
        </p>
        <div className="flex gap-5">
          <Link href="/impressum" className="text-xs transition-colors hover:text-[var(--gold-light)]" style={{ color: '#ffffff' }}>
            Impressum
          </Link>
          <Link href="/datenschutz" className="text-xs transition-colors hover:text-[var(--gold-light)]" style={{ color: '#ffffff' }}>
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}
