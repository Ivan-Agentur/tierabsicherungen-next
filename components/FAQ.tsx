"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Ab wann gilt der Versicherungsschutz?",
    a: "Der Schutz beginnt in der Regel direkt nach Vertragsabschluss. Bei Krankheiten gilt meist eine kurze Wartezeit von 14 Tagen, bei Operationen oft sofortiger Schutz. Ihr Berater klärt das genau für Ihren gewählten Tarif.",
  },
  {
    q: "Welche Tierarten sind versicherbar?",
    a: "Wir versichern Hunde und Katzen – unabhängig von Rasse, Größe oder Alter. Bei der Beratung klären wir, welcher Tarif für Ihr Tier optimal ist.",
  },
  {
    q: "Was ist, wenn mein Tier bereits erkrankt ist?",
    a: "Vorerkrankungen werden beim Antrag angegeben. Je nach Tarif und Erkrankung können Ausschlüsse gelten oder ein individuelles Angebot erstellt werden. Sprechen Sie uns einfach an – wir finden eine Lösung.",
  },
  {
    q: "Wie läuft die Schadensabwicklung ab?",
    a: "Sie reichen die Tierarztrechnung einfach digital ein – per E-Mail oder über das Kundenportal. Die Erstattung erfolgt in der Regel innerhalb weniger Werktage direkt auf Ihr Konto.",
  },
  {
    q: "Kann ich den Tarif später wechseln?",
    a: "Ja, ein Upgrade auf einen höheren Tarif ist jederzeit möglich. Ihr Berater begleitet Sie bei der Anpassung, damit kein Schutz verloren geht.",
  },
  {
    q: "Gibt es eine Selbstbeteiligung?",
    a: "Das hängt vom gewählten Tarif ab. Beim Premiumschutz übernehmen wir 100 % der erstattungsfähigen Kosten ohne Selbstbeteiligung. Bei günstigeren Tarifen kann eine geringe Eigenbeteiligung anfallen.",
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
