import { Check, Star } from "lucide-react";

const mehrwertItems = [
  "Schutzimpfungen",
  "Wurmkuren",
  "Zahnprophylaxe",
  "Online-Tierarzt 24/7",
];

const notfaelle = [
  { name: "Kreuzbandriss-OP",       preis: "1.500 – 2.500 €" },
  { name: "Magendrehung (Notfall)", preis: "2.000 – 3.500 €" },
  { name: "Tumor-Operation",        preis: "1.000 – 2.500 €" },
  { name: "Diabetes-Behandlung",    preis: "800 – 1.800 €" },
];

export default function Mehrwert() {
  return (
    <section className="py-16 bg-[var(--cream-dark)]">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-7">

        {/* Sofort-Mehrwert */}
        <div className="bg-white rounded-2xl p-8 border border-[var(--border-col)]">
          <span className="inline-block bg-[var(--navy)] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Ab Tag 1 dabei
          </span>
          <h3
            className="text-xl text-[var(--navy)] mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Sofort-Mehrwert
          </h3>
          <ul className="space-y-3 mb-6">
            {mehrwertItems.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm font-medium text-[var(--foreground)]">
                <Check size={17} className="text-[var(--success)] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <div className="flex items-start gap-3 bg-[var(--cream)] border border-[var(--cream-dark)] rounded-xl p-4 text-sm">
            <Star size={18} className="text-[var(--gold)] shrink-0 mt-0.5" />
            <p className="text-[var(--foreground)]">
              <strong>Kein Schaden im 1. Jahr?</strong><br />
              Treuebonus wird ausgeschüttet.
            </p>
          </div>
        </div>

        {/* Notfallkosten */}
        <div className="bg-white rounded-2xl p-8 border border-[var(--border-col)]">
          <h3
            className="text-xl text-[var(--navy)] mb-2"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Was Notfälle kosten können
          </h3>
          <p className="text-xs text-gray-400 italic mb-6">
            Richtwerte gemäß Gebührenordnung für Tierärzte (GOT)
          </p>
          <table className="w-full">
            <tbody>
              {notfaelle.map((n, i) => (
                <tr
                  key={n.name}
                  className={i < notfaelle.length - 1 ? "border-b border-[var(--cream-dark)]" : ""}
                >
                  <td className="py-3 text-sm text-[var(--foreground)]">{n.name}</td>
                  <td className="py-3 text-sm font-bold text-[var(--navy)] text-right">{n.preis}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p
            className="mt-6 pt-4 border-t border-[var(--cream-dark)] italic text-[var(--gold)] text-sm font-semibold"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Günstig ist gut. Verlässlich ist besser.
          </p>
        </div>

      </div>
    </section>
  );
}
