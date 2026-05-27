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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="bg-white rounded-2xl border border-[var(--border-col)] p-6">
              <div className="w-11 h-11 rounded-xl bg-[var(--cream)] flex items-center justify-center mb-4">
                <item.icon size={22} className="text-[var(--gold)]" />
              </div>
              <h3
                className="text-[var(--navy)] text-base font-semibold mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
