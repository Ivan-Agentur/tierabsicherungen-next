import { Check } from "lucide-react";

const tarife = [
  {
    name: "Einstiegsschutz",
    tagline: "Für alle, die zunächst eine Basisabsicherung wünschen.",
    erstattung: "80 %",
    features: [
      "10.000 € Jahreshöchstleistung",
      "OP-Schutz inklusive",
      "Schutz bei Operationen",
      "Wichtige Behandlungen abgedeckt",
      "Planbare Tierarztkosten",
    ],
    recommended: false,
  },
  {
    name: "Komfortschutz",
    tagline: "Viel Schutz – bei planbaren Kosten.",
    erstattung: "90 %",
    features: [
      "Unbegrenzte Jahresleistung",
      "Heilbehandlungen & OP",
      "Hohe Kostenübernahme",
      "OP & Nachbehandlung inklusive",
      "Schutz bei häufigen Eingriffen",
    ],
    recommended: false,
  },
  {
    name: "Premiumschutz",
    tagline: "Damit du im Ernstfall einfach das Beste für dein Tier entscheiden kannst.",
    erstattung: "100 %",
    features: [
      "Unbegrenzte Jahresleistung",
      "Heilpraktiker & Reha inklusive",
      "Rückwirkender Schutz möglich",
      "Nachsorge & Therapie inklusive",
      "Schutz bei schweren Erkrankungen",
    ],
    recommended: true,
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {tarife.map((t) => (
            <div
              key={t.name}
              className={`relative bg-white rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
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
                className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all ${
                  t.recommended
                    ? "bg-[var(--gold)] text-white hover:bg-[#b5671e] hover:shadow-md"
                    : "border-2 border-[var(--navy)] text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white"
                }`}
              >
                Jetzt anfragen
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
