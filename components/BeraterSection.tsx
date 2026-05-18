import { Mail, PhoneCall } from "lucide-react";

export default function BeraterSection() {
  return (
    <section className="py-16 bg-[var(--cream)]" id="kontakt">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-2xl border border-[var(--border-col)] p-10 flex flex-col md:flex-row items-center gap-10">

          <div className="w-24 h-24 rounded-full bg-[var(--navy)] flex items-center justify-center text-white font-bold text-2xl shrink-0 border-4 border-[var(--cream-dark)]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            RW
          </div>

          <div className="flex-1 text-center md:text-left">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">
              Ihr persönlicher Berater
            </p>
            <h2
              className="text-3xl text-[var(--navy)] mb-1"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Ruben Wölker
            </h2>
            <p className="text-xs text-gray-400 mb-4">
              IHK-registrierter Versicherungsmakler · Reg.-Nr. xyzabc
            </p>
            <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-lg">
              Ich begleite Sie und Ihr Tier persönlich – von der Tarifwahl bis zur
              Schadensabwicklung. Sprechen Sie mich an, ich nehme mir Zeit für Sie.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="tel:015222636356"
                className="flex items-center gap-2 bg-[var(--gold)] text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-[#b5671e] transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <PhoneCall size={16} />
                0152 22636356
              </a>
              <a
                href="mailto:info@tierabsicherungen.de"
                className="flex items-center gap-2 border-2 border-[var(--navy)] text-[var(--navy)] px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-[var(--navy)] hover:text-white transition-all hover:-translate-y-0.5"
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
