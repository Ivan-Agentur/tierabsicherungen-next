import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustStrip from "@/components/TrustStrip";
import { ArrowRight, Check, Minus } from "lucide-react";

export const metadata = {
  title: "Tarife – tierabsicherungen.de",
  description:
    "Alle Leistungen im Vergleich: Einstiegsschutz, Komfortschutz und Premiumschutz – finden Sie den richtigen Tarif für Hund oder Katze.",
};

type CellValue = boolean | string | null;

interface FeatureRow {
  label: string;
  basis: CellValue;
  komfort: CellValue;
  premium: CellValue;
  category?: string;
}

const features: FeatureRow[] = [
  // Meta
  { label: "Wartezeit (bei Krankheit)", basis: "1 Monat", komfort: "1 Monat", premium: "1 Monat", category: "Allgemein" },
  { label: "Selbstbeteiligung wählbar", basis: "0 €, 150 € oder 250 €", komfort: "0 €, 150 € oder 250 €", premium: "0 €, 150 € oder 250 €" },
  { label: "Auslandsschutz", basis: "Weltweit bis 12 Monate", komfort: "Weltweit bis 12 Monate", premium: "Weltweit bis 12 Monate" },
  { label: "GOT-Satz", basis: "4-fach inkl. Notdienstgebühr", komfort: "4-fach inkl. Notdienstgebühr", premium: "4-fach inkl. Notdienstgebühr" },
  { label: "Leistungshöchstgrenze", basis: "10.000 € / Jahr", komfort: "Unbegrenzt", premium: "Unbegrenzt" },

  // Operationskosten
  { label: "Operationen wegen Krankheit oder Unfall", basis: true, komfort: true, premium: true, category: "Operationskosten" },
  { label: "Minimalinvasive Eingriffe", basis: true, komfort: true, premium: true },
  { label: "Voruntersuchung & Diagnosefeststellung vor OP", basis: true, komfort: true, premium: true },
  { label: "Nachsorge (Wundversorgung, Klinikaufenthalt etc.)", basis: true, komfort: true, premium: true },
  { label: "Medikamente und Verbandmittel", basis: true, komfort: true, premium: true },
  { label: "Physiotherapie nach einer Operation", basis: null, komfort: "bis 400 € / Jahr", premium: "bis 800 € / Jahr" },
  { label: "Behandlungskosten bei besonderen Erkrankungen", basis: null, komfort: null, premium: "bis 5.000 € / Vertragslaufzeit" },
  { label: "Ellenbogendysplasie (ED) oder Hüftdysplasie (HD)", basis: null, komfort: "bis 2.000 € / Vertragslaufzeit", premium: "bis 3.000 € / Vertragslaufzeit" },
  { label: "Zuschuss Kastration / Sterilisation", basis: "200 € (einmalig)", komfort: "400 € (einmalig)", premium: "600 € (einmalig)" },

  // Tierarztkosten
  { label: "Ambulante & stationäre Behandlungen", basis: true, komfort: true, premium: true, category: "Tierarztkosten" },
  { label: "VorsorgePlus (Impfungen, Wurmkuren, Zahnprophylaxe)", basis: "bis 50 € / Jahr", komfort: "bis 100 € / Jahr", premium: "bis 150 € / Jahr" },
  { label: "Zahn-Schutz (optional zubuchbar)", basis: "Optional", komfort: "Optional", premium: "Optional" },
  { label: "Einschläferung bei unheilbaren Krankheiten oder Unfall", basis: true, komfort: true, premium: true },
  { label: "Spezielle Diagnostik (MRT, CT, Szintigrafie)", basis: null, komfort: "bis 500 € / Jahr", premium: "bis 700 € / Jahr" },
  { label: "Behandlung von Scheinträchtigkeit", basis: true, komfort: true, premium: true },
  { label: "Trächtigkeitsuntersuchungen & Geburtshilfe", basis: null, komfort: null, premium: "Einmalig pro Vertragslaufzeit" },
  { label: "Tier-Prothesen / Orthesen", basis: null, komfort: "bis 500 € / Vertragslaufzeit", premium: "bis 1.000 € / Vertragslaufzeit" },

  // Zusatzleistungen
  { label: "Rückwärtsdeckung (bis 3 Monate vor Vertragsbeginn)", basis: null, komfort: "bis 400 € / Vertragslaufzeit", premium: "bis 500 € / Vertragslaufzeit", category: "Zusätzliche Leistungen" },
  { label: "HaustierPlus (weitere Haustiere mitversichert)", basis: null, komfort: null, premium: "bis 200 € / Jahr" },
  { label: "Transportkosten nach Unfall", basis: null, komfort: null, premium: "bis 100 € / Jahr" },
  { label: "Online-Sprechstunde beim Tierarzt", basis: true, komfort: true, premium: true },
  { label: "Alternative Heilmethoden (Akupunktur, Homöopathie etc.)", basis: null, komfort: true, premium: true },
];

function Cell({ value }: { value: CellValue }) {
  if (value === true) {
    return (
      <span className="flex justify-center">
        <Check size={17} className="text-[var(--success)]" />
      </span>
    );
  }
  if (value === null || value === false) {
    return (
      <span className="flex justify-center">
        <Minus size={17} className="text-gray-300" />
      </span>
    );
  }
  return (
    <span className="text-xs text-center text-[var(--foreground)] leading-snug block whitespace-nowrap">
      {value}
    </span>
  );
}

export default function TarifePage() {
  const categories = Array.from(
    new Set(features.map((f) => f.category).filter(Boolean))
  );

  return (
    <>
      <Header />

      <main className="bg-[var(--cream)] min-h-screen">
        {/* Hero */}
        <section className="bg-[var(--navy)] pt-10 pb-10 md:pt-16 md:pb-14 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[var(--gold)] text-sm font-semibold uppercase tracking-widest mb-3">
              Leistungsübersicht
            </p>
            <h1
              className="text-4xl md:text-5xl text-center mb-4"
              style={{ fontFamily: "var(--font-playfair)", color: "white" }}
            >
              Drei Tarife.{" "}
              <em style={{ color: "white" }}>Klare</em> Leistungen.
            </h1>
            <p className="text-white/70 text-base max-w-xl mx-auto">
              Wählen Sie den Schutz, der zu den Bedürfnissen Ihres Haustieres passt –
              von solider Einstiegsabsicherung bis zum umfassenden Premiumschutz.
            </p>
          </div>
        </section>

        {/* Full comparison table */}
        <section className="py-14 px-6">
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-2xl md:text-3xl text-[var(--navy)] text-center mb-2"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Alle Leistungen im Vergleich
            </h2>
            <p className="text-gray-400 text-sm text-center mb-10">
              Vollständige Übersicht aller versicherten Leistungen nach Tarif.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-[var(--border-col)] bg-white shadow-sm">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[var(--navy)] text-white">
                    <th className="text-left px-5 py-4 font-semibold w-2/5" style={{ fontFamily: "var(--font-playfair)" }}>
                      Leistung
                    </th>
                    <th className="px-2 sm:px-4 py-4 text-center font-semibold w-1/5 relative border-r-2 border-[var(--gold)]/40">
                      <span className="absolute top-0 inset-x-0 h-0.5 bg-[var(--gold)]" />
                      <span className="block text-xs sm:text-base text-[var(--gold)]">Premium</span>
                      <span className="hidden sm:block text-xs text-[var(--gold-light)]/70 font-normal mt-0.5">Höchste Ansprüche</span>
                    </th>
                    <th className="px-2 sm:px-4 py-4 text-center font-semibold w-1/5 border-r border-white/20">
                      <span className="block text-xs sm:text-base">Komfort</span>
                      <span className="hidden sm:block text-xs text-white/50 font-normal mt-0.5">Plus an Sicherheit</span>
                    </th>
                    <th className="px-2 sm:px-4 py-4 text-center font-semibold w-1/5">
                      <span className="block text-xs sm:text-base">Einstieg</span>
                      <span className="hidden sm:block text-xs text-white/50 font-normal mt-0.5">Grundschutz</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {(() => {
                    const rows: React.ReactNode[] = [];
                    let lastCategory = "";

                    features.forEach((f, i) => {
                      if (f.category && f.category !== lastCategory) {
                        lastCategory = f.category;
                        rows.push(
                          <tr key={`cat-${f.category}`} className="bg-[var(--cream)]">
                            <td
                              colSpan={4}
                              className="px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[var(--navy)]"
                            >
                              {f.category}
                            </td>
                          </tr>
                        );
                      }

                      rows.push(
                        <tr
                          key={i}
                          className={`border-t border-[var(--cream-dark)] transition-colors hover:bg-[var(--cream)]/50 ${
                            i % 2 === 0 ? "bg-white" : "bg-[var(--cream)]/30"
                          }`}
                        >
                          <td className="px-3 sm:px-5 py-3 sm:py-3.5 text-[var(--foreground)] text-xs sm:text-sm leading-snug">
                            {f.label}
                          </td>
                          <td className="px-2 sm:px-4 py-3 sm:py-3.5 text-center border-r-2 border-[var(--gold)]/20">
                            <Cell value={f.premium} />
                          </td>
                          <td className="px-2 sm:px-4 py-3 sm:py-3.5 text-center border-r border-[var(--cream-dark)]">
                            <Cell value={f.komfort} />
                          </td>
                          <td className="px-2 sm:px-4 py-3 sm:py-3.5 text-center">
                            <Cell value={f.basis} />
                          </td>
                        </tr>
                      );
                    });

                    return rows;
                  })()}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-gray-400 mt-4 leading-relaxed max-w-3xl mx-auto text-center">
              Bei bestimmten Leistungen gibt es Höchstentschädigungsgrenzen. Maßgeblich sind die dem Vertrag
              zugrundeliegenden allgemeinen Versicherungsbedingungen. Der GOT-Satz richtet sich nach der
              Gebührenordnung für Tierärzte.
            </p>
          </div>
        </section>

        {/* Tariff Cards Summary */}
        <section className="py-10 px-6 bg-white border-b border-[var(--border-col)]">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            {[
              {
                name: "Premiumschutz",
                subtitle: "Ihr Schutz für höchste Ansprüche",
                tagline: "Alles inklusive – das Beste für Ihren Liebling.",
                limit: "Unbegrenzt",
                recommended: true,
                color: "border-[var(--gold)] border-2",
              },
              {
                name: "Komfortschutz",
                subtitle: "Ihr Plus an Sicherheit",
                tagline: "Starker Schutz – mit unbegrenzter Deckung.",
                limit: "Unbegrenzt",
                recommended: false,
                color: "border-[var(--navy)]",
              },
              {
                name: "Einstiegsschutz",
                subtitle: "Ihr verlässlicher Grundschutz",
                tagline: "Solide Absicherung für den ersten Schritt.",
                limit: "10.000 € / Jahr",
                recommended: false,
                color: "border-[var(--border-col)]",
              },
            ].map((t) => (
              <div
                key={t.name}
                className={`relative flex flex-col h-full rounded-2xl p-6 border bg-white ${t.color} ${
                  t.recommended
                    ? "shadow-[0_4px_24px_rgba(200,118,42,.15)]"
                    : ""
                }`}
              >
                {t.recommended && (
                  <span className="absolute -top-3 right-4 bg-[var(--gold)] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    Empfohlen
                  </span>
                )}
                <h2
                  className="text-xl text-[var(--navy)] mb-0.5"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {t.name}
                </h2>
                <p className="text-xs text-gray-400 italic mb-3">{t.subtitle}</p>
                <p className="text-sm text-gray-600">{t.tagline}</p>

                <div className="mt-auto pt-4">
                  <div className="flex items-center gap-2 text-xs text-gray-500 border-t border-[var(--cream-dark)] pt-3 mb-3">
                    <span className="font-semibold text-[var(--navy)]">Höchstgrenze:</span>
                    <span className="text-[var(--gold)] font-bold whitespace-nowrap">{t.limit}</span>
                  </div>
                  <Link
                    href="/#kontakt"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm border-2 border-[var(--navy)] text-[var(--navy)]"
                  >
                    Jetzt anfragen
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <TrustStrip />

        {/* CTA */}
        <section className="py-14 px-6 bg-[var(--navy)]">
          <div className="max-w-2xl mx-auto text-center">
            <h2
              className="text-3xl text-white mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Noch unsicher, welcher Tarif passt?
            </h2>
            <p className="text-white/65 mb-8">
              Ivan Aziablé berät Sie persönlich und kostenlos – damit Ihr Haustier
              genau den Schutz bekommt, den es verdient.
            </p>
            <Link
              href="/#kontakt"
              className="inline-flex items-center gap-2.5 bg-[var(--gold)] hover:bg-[var(--gold-light)] text-white font-semibold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-xl text-base"
            >
              Kostenlose Beratung anfragen
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
