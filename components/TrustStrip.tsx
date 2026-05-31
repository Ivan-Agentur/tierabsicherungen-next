import { ShieldCheck, Eye, RefreshCw } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Kein Altersausschluss",
    text: "Ihr Hund oder Ihre Katze bleibt versichert – auch im hohen Alter. Keine versteckten Altersgrenzen, die Sie im Stich lassen.",
  },
  {
    icon: Eye,
    title: "Volle Transparenz",
    text: "Klare Bedingungen ohne Kleingedrucktes. Was wir versprechen, halten wir – ohne Wenn und Aber.",
  },
  {
    icon: RefreshCw,
    title: "Lebenslange Verlängerung",
    text: "Einmal abgesichert, immer abgesichert. Wir kündigen nicht, nur weil Ihr Hund oder Ihre Katze häufiger krank wird.",
  },
];

export default function TrustStrip() {
  return (
    <div className="bg-[var(--navy)] py-14 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
            <div className="w-10 h-10 rounded-xl bg-[var(--gold)]/15 flex items-center justify-center shrink-0">
              <Icon size={20} className="text-[var(--gold)]" />
            </div>
            <h3
              className="text-white font-bold text-base"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {title}
            </h3>
            <p className="text-white text-sm leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
