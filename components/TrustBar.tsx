import { Home, Smartphone, User } from "lucide-react";

const items = [
  {
    icon: Home,
    title: "Alle Tierärzte in Deutschland",
    text: "Freie Tierarztwahl in ganz Deutschland – kein Netzwerk, keine Einschränkungen. Suchen Sie einfach den Arzt Ihres Vertrauens auf.",
  },
  {
    icon: Smartphone,
    title: "Digitale Schadensmeldung",
    text: "Rechnung fotografieren, hochladen – fertig. Die Erstattung erfolgt schnell und unkompliziert direkt auf Ihr Konto.",
  },
  {
    icon: User,
    title: "Persönlicher Kundenberater",
    text: "Ein fester Ansprechpartner für alle Fragen – von der Tarifwahl bis zur Schadensmeldung. Sie sind nie allein.",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-[var(--navy)] py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {items.map((item) => (
            <div key={item.title} className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-white/8 border border-[var(--gold)]/40 flex items-center justify-center mx-auto mb-4">
                <item.icon size={30} className="text-[var(--gold-light)]" />
              </div>
              <h3
                className="text-white text-base font-semibold mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {item.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
