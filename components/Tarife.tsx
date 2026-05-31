import { ArrowRight, Check } from "lucide-react";

const tarife = [
  {
    name: "Premiumschutz",
    tagline: "Im Ernstfall das Beste für Ihre Liebsten.",
    erstattung: "100 %",
    features: [
      "Auch bei längerer Genesung abgesichert",
      "Bereits entstandene Kosten können berücksichtigt werden",
      "Unterstützung auch bei komplexen Erkrankungen",
      "Nachsorge, Reha & starke Leistungen",
    ],
    recommended: true,
  },
  {
    name: "Komfortschutz",
    tagline: "Viel Schutz – bei planbaren Kosten.",
    erstattung: "90 %",
    features: [
      "Starker Schutz bei OP & Behandlung",
      "Unterstützung auch nach Operationen",
      "Hohe Kostenübernahme im Ernstfall",
      "Solider Rundumschutz",
    ],
    recommended: false,
  },
  {
    name: "Einstiegsschutz",
    tagline: "Für den ersten Schritt zur Absicherung Ihres Haustieres.",
    erstattung: "80 %",
    features: [
      "Schutz bei wichtigen Operationen",
      "Hilfe bei unerwarteten Tierarztkosten",
    ],
    recommended: false,
  },
];

const opTarife = [
  {
    name: "Premium-OP",
    tagline: "Unbegrenzte Deckung – inkl. VorsorgePlus & Treue-Bonus.",
    limit: "Unbegrenzt",
    features: [
      "Operationen wegen Krankheit oder Unfall",
      "Nachsorge bis 30 Tage nach OP",
      "Physiotherapie nach OP bis 800 €",
      "OP-Kosten bei besonderen Erkrankungen bis 5.000 €",
      "Kastration / Sterilisation: 600 € Zuschuss",
      "VorsorgePlus bis 100 € / Jahr",
      "Orthesen / Hilfsmittel bis 1.000 €",
      "Treue-Bonus bis 100 € / Jahr",
    ],
    recommended: true,
  },
  {
    name: "Komfort-OP",
    tagline: "Starke OP-Absicherung mit großzügiger Nachsorge.",
    limit: "10.000 € / Jahr",
    features: [
      "Operationen wegen Krankheit oder Unfall",
      "Nachsorge bis 20 Tage nach OP",
      "Physiotherapie nach OP bis 400 €",
      "Kastration / Sterilisation: 400 € Zuschuss",
      "Orthesen / Hilfsmittel bis 500 €",
      "Online-Sprechstunde beim Tierarzt",
    ],
    recommended: false,
  },
  {
    name: "Einstieg-OP",
    tagline: "Solide Absicherung bei Operationen – zum günstigen Einstieg.",
    limit: "8.000 € / Jahr",
    features: [
      "Operationen wegen Krankheit oder Unfall",
      "Voruntersuchung & Diagnosefeststellung",
      "Nachsorge bis 15 Tage nach OP",
      "Kastration / Sterilisation: 200 € Zuschuss",
      "Einschläferung bei unheilbaren Krankheiten",
      "Online-Sprechstunde beim Tierarzt",
    ],
    recommended: false,
  },
];

export default function Tarife() {
  return (
    <section className="py-20 bg-[var(--cream)]" id="tarife">
      <div className="max-w-5xl mx-auto px-6">
        {/* Vollschutz-Tarife */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2
            className="text-3xl md:text-4xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Drei Tarife.{" "}
            <em className="text-[var(--gold)]">Sehr gute</em> Leistungen.
          </h2>
          <p className="text-gray-500 mt-3">
            Wählen Sie den Schutz, der zu Ihrem Tier passt – und zu Ihrem Budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {tarife.map((t) => (
            <div
              key={t.name}
              className={`relative flex h-full flex-col bg-white rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                t.recommended
                  ? "border-[var(--gold)] border-2 shadow-[0_4px_24px_rgba(200,118,42,.18)]"
                  : "border-[var(--border-col)]"
              }`}
            >
              {t.recommended && (
                <span className="absolute -top-3 right-5 bg-[var(--gold)] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  Empfohlen
                </span>
              )}

              <div className="mb-5">
                <h3
                  className="text-xl text-[var(--navy)]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {t.name}
                </h3>
                <p className="text-xs text-gray-400 italic mt-1.5">{t.tagline}</p>
              </div>

              <div className="flex items-baseline gap-1.5 py-4 border-t border-b border-[var(--cream-dark)] mb-5">
                <span
                  className="text-4xl font-bold text-[var(--gold)] leading-none"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {t.erstattung}
                </span>
                <span className="text-xs text-gray-400 font-medium">Erstattung</span>
              </div>

              <ul className="space-y-2.5 mb-7">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-[var(--foreground)]">
                    <Check size={15} className="text-[var(--success)] mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#kontakt"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm mt-auto border-2 border-[var(--navy)] text-[var(--navy)]"
              >
                Jetzt anfragen
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* Divider OP */}
        <div className="mt-20 mb-12 border-t-2 border-[var(--gold)]/30 pt-16">
          <div className="text-center max-w-xl mx-auto">
            <p className="text-[var(--gold)] text-xs font-semibold uppercase tracking-widest mb-3">
              Speziell für Operationen
            </p>
            <h2
              className="text-3xl md:text-4xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Drei OP-Tarife.{" "}
              <em className="text-[var(--gold)]">Klare</em> Kostenübernahme.
            </h2>
            <p className="text-gray-500 mt-3">
              Ob Kreuzbandriss oder Tumorentfernung – veterinär-chirurgische Eingriffe
              können teuer werden. Diese Tarife sichern Sie gezielt ab.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {opTarife.map((t) => (
            <div
              key={t.name}
              className={`relative flex h-full flex-col bg-white rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                t.recommended
                  ? "border-[var(--gold)] border-2 shadow-[0_4px_24px_rgba(200,118,42,.18)]"
                  : "border-[var(--border-col)]"
              }`}
            >
              {t.recommended && (
                <span className="absolute -top-3 right-5 bg-[var(--gold)] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  Empfohlen
                </span>
              )}

              <div className="mb-5">
                <h3
                  className="text-xl text-[var(--navy)]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {t.name}
                </h3>
                <p className="text-xs text-gray-400 italic mt-1.5">{t.tagline}</p>
              </div>

              <div className="flex items-baseline gap-1.5 py-4 border-t border-b border-[var(--cream-dark)] mb-5">
                <span
                  className="text-xl font-bold text-[var(--gold)] leading-none"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {t.limit}
                </span>
                <span className="text-xs text-gray-400 font-medium">Höchstgrenze</span>
              </div>

              <ul className="space-y-2.5 mb-7">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-[var(--foreground)]">
                    <Check size={15} className="text-[var(--success)] mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#kontakt"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm mt-auto border-2 border-[var(--navy)] text-[var(--navy)]"
              >
                Jetzt anfragen
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
