import { Mail } from "lucide-react";

export default function BeraterSection() {
  return (
    <section className="py-16 bg-[var(--cream)]" id="berater">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-2xl border border-[var(--border-col)] p-10 flex flex-col md:flex-row items-center gap-10">

          <div
            className="w-24 h-24 rounded-full bg-[var(--navy)] flex items-center justify-center text-white font-bold text-2xl shrink-0 border-4 border-[var(--cream-dark)]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            IA
          </div>

          <div className="flex-1 text-center md:text-left">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">
              Ihr persönlicher Berater
            </p>
            <h2
              className="text-3xl text-[var(--navy)] mb-1"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Ivan Aziablé
            </h2>
            <p className="text-xs text-gray-400 mb-4">
              IHK-registrierter Versicherungsmakler · Reg.-Nr. D-JA31-D7W20-08
            </p>
            <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-lg">
              Ich begleite Sie und Ihr Tier persönlich – von der Tarifwahl bis zur
              Schadensabwicklung. Sprechen Sie mich an, ich nehme mir Zeit für Sie.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="mailto:info@tierabsicherungen.de"
                className="flex items-center gap-2 py-3.5 px-6 bg-[var(--gold)] text-white rounded-xl font-semibold text-sm hover:bg-[#b5671e] transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Mail size={16} />
                info@tierabsicherungen.de
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
