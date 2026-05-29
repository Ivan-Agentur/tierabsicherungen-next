import ContactForm from "@/components/ContactForm";
import { Clock, Mail, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="py-20 px-6"
      style={{ background: "linear-gradient(135deg, rgba(200,118,42,0.08) 0%, rgba(26,58,82,0.04) 100%)" }}
      id="kontakt"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1
            className="text-4xl md:text-5xl text-[var(--navy)] mb-3"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Versicherungen, die perfekt zu den Bedürfnissen Ihrer{" "}
            <em className="text-[var(--gold)]">Liebsten</em> passen!
          </h1>
          <p className="text-gray-400 text-base max-w-lg mx-auto">
            Jetzt kostenlos beraten lassen – persönlich, unverbindlich,
            innerhalb von 24 Stunden.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 items-start">
          <ContactForm />

          <div className="flex flex-col gap-4">
            {/* Berater-Card */}
            <div className="bg-white rounded-2xl border border-[var(--border-col)] p-5 flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full bg-[var(--navy)] text-white flex items-center justify-center font-bold text-sm shrink-0"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                IA
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
                  Ihr persönlicher Berater
                </p>
                <p className="text-[var(--navy)] font-bold text-base leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
                  Ivan Aziablé
                </p>
                <p className="text-xs text-gray-400 mt-0.5">IHK-reg. Versicherungsmakler</p>
              </div>
            </div>

            {/* Kontaktdaten */}
            <div className="bg-white rounded-2xl border border-[var(--border-col)] p-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[var(--cream)] flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-[var(--gold)]" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-gray-400 font-semibold">E-Mail</span>
                  <a href="mailto:info@tierabsicherungen.de" className="font-semibold text-[var(--navy)] text-sm hover:text-[var(--gold)] transition-colors">
                    info@tierabsicherungen.de
                  </a>
                </div>
              </div>
            </div>

            {/* 24h Badge */}
            <div className="bg-[var(--navy)] rounded-2xl p-5 flex items-start gap-4">
              <Clock size={26} className="text-[var(--gold)] shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-bold text-sm">Antwort innerhalb von 24 Stunden</p>
                <p className="text-white/60 text-xs mt-1">Mo – Fr, 9 – 18 Uhr. Wir nehmen uns Zeit für Ihre Fragen.</p>
              </div>
            </div>

            {/* Trust-Checks */}
            <div className="bg-white rounded-2xl border border-[var(--border-col)] p-5 flex flex-col gap-3">
              {[
                "Kostenlose & unverbindliche Beratung",
                "Schnelle Abwicklung",
                "Für eine ausgewählte Leistung ist Ihr Tier auch rückwirkend geschützt",
                "IHK-registrierter Makler",
              ].map((txt) => (
                <div key={txt} className="flex items-center gap-2.5 text-sm font-medium text-[var(--foreground)]">
                  <ShieldCheck size={16} className="text-[var(--success)] shrink-0" />
                  {txt}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
