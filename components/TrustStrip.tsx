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
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(22,101,52,0.25)" }}>
              <Icon size={20} style={{ color: "#16a34a" }} />
            </div>
            <h3
              className="text-white font-bold text-lg"
              style={{ fontFamily: "var(--font-playfair)", color: "#ffffff" }}
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
