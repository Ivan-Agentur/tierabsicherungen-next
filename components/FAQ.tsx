"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Welche Behandlungen sind durch die Versicherung abgedeckt?",
    a: "Je nach gewähltem Tarif sind ambulante und stationäre Behandlungen, Operationen (einschließlich minimalinvasiver Eingriffe), Chemo- und Strahlentherapie, Voruntersuchungen sowie Nachsorge versichert. Hinzu kommen Diagnostikmaßnahmen wie Röntgen und Blutbild, Schutzimpfungen und Wurmkuren (VorsorgePlus), Medikamente und Verbandmittel sowie die Online-Sprechstunde beim Tierarzt. Ab der Komfortvariante sind zusätzlich spezielle Diagnostik (MRT, CT), Physiotherapie nach einer OP und alternative Heilmethoden wie Akupunktur oder Homöopathie mitversichert. Die Premiumvariante umfasst darüber hinaus Trächtigkeitsuntersuchungen, Geburtshilfe, Tiertransport nach Unfall sowie Schutz für weitere Haustiere (HaustierPlus).",
  },
  {
    q: "Gibt es ein Mindestalter oder ein Höchstalter für meinen Hund?",
    a: "Konkrete Altersgrenzen werden individuell bei Vertragsabschluss geprüft. Grundsätzlich können Hunde und Katzen versichert werden – sprechen Sie Ivan Aziablé direkt an, um zu klären, welcher Tarif für Ihr Tier in Frage kommt.",
  },
  {
    q: "Wie schnell werde ich im Schadensfall erstattet?",
    a: "Die Abwicklung läuft digital: Sie reichen Ihre Tierarztrechnung über das persönliche Online-Kundenportal MeineARAG.de ein. Dort können Sie auch Ihre Vertragsdaten einsehen und Änderungen vornehmen. Die Erstattung erfolgt nach Prüfung direkt auf Ihr Konto.",
  },
  {
    q: "Kann ich meinen Tarif später upgraden?",
    a: "Die Versicherung bietet drei Leistungsvarianten: Basis, Komfort und Premium. Welche Wechselmöglichkeiten bestehen, klären Sie am besten direkt mit Ihrem Berater Ivan Aziablé – er begleitet Sie bei jeder Anpassung, damit kein Schutz verloren geht.",
  },
  {
    q: "Was ist mit Vorerkrankungen meines Hundes?",
    a: "Ab der Komfortvariante greift eine Rückwärtsdeckung: Ausgewählte Leistungen aus VorsorgePlus – wie Schutzimpfungen, Zahnsteinentfernung und Kastration – sind bis zu drei Monate vor Vertragsbeginn mitversichert. In der Premiumvariante gilt dies sogar für einen Krankheitsfall, der bis zu drei Monate vor Vertragsbeginn eingetreten ist (bis zur maximalen Versicherungssumme, auch bei mehreren Rechnungen). Bei allen Tarifen gilt eine Wartezeit von einem Monat bei Krankheit.",
  },
  {
    q: "Wie kann ich meinen Vertrag kündigen?",
    a: "Ihre Vertragsverwaltung – einschließlich Änderungen Ihrer Daten – läuft über das persönliche Online-Kundenportal MeineARAG.de. Für eine Kündigung wenden Sie sich direkt an Ihren Berater Ivan Aziablé unter info@tierabsicherungen.de.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 bg-[var(--cream)]" id="faq">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2
            className="text-3xl md:text-4xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Häufige <em className="text-[var(--gold)]">Fragen</em>
          </h2>
          <p className="text-gray-500 mt-3 text-sm">
            Alles, was Sie vor dem Abschluss wissen sollten.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-[var(--border-col)] overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left gap-4 hover:bg-[var(--cream)] transition-colors"
              >
                <span className="font-semibold text-[var(--navy)] text-sm">
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-[var(--gold)] transition-transform shrink-0 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5 pt-4 text-sm text-gray-500 leading-relaxed border-t border-[var(--border-col)]">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
