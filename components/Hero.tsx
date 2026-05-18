"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import ContactForm from "@/components/ContactForm";
import { Clock, Lock, Mail, PhoneCall, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <AuroraBackground
      className="min-h-0 h-auto py-20 bg-[var(--cream)] items-start"
      showRadialGradient={true}
    >
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h1
            className="text-4xl md:text-5xl text-[var(--navy)] mb-3"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Begleiter fürs{" "}
            <em className="text-[var(--gold)]">Leben</em>
            <br />
            verdienen Schutz fürs{" "}
            <em className="text-[var(--gold)]">Leben</em>
          </h1>
          <p className="text-gray-500 text-base max-w-lg mx-auto">
            Jetzt kostenlos beraten lassen – persönlich, unverbindlich,
            innerhalb von 24 Stunden.
          </p>
        </motion.div>

        {/* Grid: Form + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 items-start">

          {/* Kontaktformular */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          >
            <ContactForm />
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-4"
          >
            {/* Berater-Card */}
            <div className="bg-white rounded-2xl border border-[var(--border-col)] p-5 flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full bg-[var(--navy)] text-white flex items-center justify-center font-bold text-sm shrink-0"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                RW
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
                  Ihr persönlicher Berater
                </p>
                <p
                  className="text-[var(--navy)] font-bold text-base leading-tight"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Ruben Wölker
                </p>
                <p className="text-xs text-gray-400 mt-0.5">IHK-reg. Versicherungsmakler</p>
              </div>
            </div>

            {/* Kontaktdaten */}
            <div className="bg-white rounded-2xl border border-[var(--border-col)] p-5 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[var(--cream)] flex items-center justify-center shrink-0">
                  <PhoneCall size={18} className="text-[var(--gold)]" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-gray-400 font-semibold">
                    Telefon
                  </span>
                  <a
                    href="tel:015222636356"
                    className="font-semibold text-[var(--navy)] text-sm hover:text-[var(--gold)] transition-colors"
                  >
                    0152 22636356
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[var(--cream)] flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-[var(--gold)]" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-gray-400 font-semibold">
                    E-Mail
                  </span>
                  <a
                    href="mailto:info@tierabsicherungen.de"
                    className="font-semibold text-[var(--navy)] text-sm hover:text-[var(--gold)] transition-colors"
                  >
                    info@tierabsicherungen.de
                  </a>
                </div>
              </div>
            </div>

            {/* 24h Badge */}
            <div className="bg-[var(--navy)] rounded-2xl p-5 flex items-start gap-4">
              <Clock size={26} className="text-[var(--gold)] shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-bold text-sm">
                  Antwort innerhalb von 24 Stunden
                </p>
                <p className="text-white/60 text-xs mt-1">
                  Mo – Fr, 9 – 18 Uhr. Wir nehmen uns Zeit für Ihre Fragen.
                </p>
              </div>
            </div>

            {/* Trust-Checks */}
            <div className="bg-white rounded-2xl border border-[var(--border-col)] p-5 flex flex-col gap-3">
              {[
                "Kostenlose & unverbindliche Beratung",
                "Kein Verkaufsdruck",
                "IHK-registrierter Makler",
              ].map((txt) => (
                <div key={txt} className="flex items-center gap-2.5 text-sm font-medium text-[var(--foreground)]">
                  <ShieldCheck size={16} className="text-[var(--success)] shrink-0" />
                  {txt}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </AuroraBackground>
  );
}
