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

export default function Tarife() {
  return (
    <section className="py-20 bg-[var(--cream)]" id="tarife">
      <div className="max-w-5xl mx-auto px-6">
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
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg mt-auto border-2 border-[var(--navy)] text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white"
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
