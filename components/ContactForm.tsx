"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, Lock } from "lucide-react";

type FormData = {
  vorname: string;
  nachname: string;
  email: string;
  telefon: string;
  tierart: string;
  alter: string;
  rasse: string;
  termin: string;
  fragen: string;
};

const initial: FormData = {
  vorname: "", nachname: "", email: "", telefon: "",
  tierart: "", alter: "", rasse: "", termin: "", fragen: "",
};

export default function ContactForm() {
  const [data, setData] = useState<FormData>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, boolean>>>({});

  const required: (keyof FormData)[] = [
    "vorname", "nachname", "email", "telefon", "tierart", "alter", "termin",
  ];

  function validate() {
    const next: typeof errors = {};
    required.forEach((k) => {
      if (!data[k].trim()) next[k] = true;
    });
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      next.email = true;
    return next;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    console.log("Formular-Daten:", data);
    setSubmitted(true);
  }

  const field = (
    key: keyof FormData,
    label: string,
    type: string,
    placeholder?: string,
    optional = false
  ) => (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-semibold uppercase tracking-wide text-[var(--navy)]">
        {label}{" "}
        {optional ? (
          <span className="text-gray-400 normal-case font-normal tracking-normal">(optional)</span>
        ) : (
          <span className="text-[var(--gold)]">*</span>
        )}
      </label>
      <input
        type={type}
        value={data[key]}
        onChange={(e) => {
          setData((p) => ({ ...p, [key]: e.target.value }));
          setErrors((p) => ({ ...p, [key]: false }));
        }}
        placeholder={placeholder}
        className={`px-3.5 py-2.5 border rounded-xl text-sm outline-none transition-all ${
          errors[key]
            ? "border-red-400 focus:ring-2 focus:ring-red-200"
            : "border-[var(--border-col)] focus:border-[var(--navy)] focus:ring-2 focus:ring-[var(--navy)]/10"
        }`}
      />
    </div>
  );

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-[var(--border-col)] p-10 flex flex-col items-center text-center gap-4">
        <CheckCircle size={48} className="text-[var(--success)]" />
        <div>
          <p className="font-bold text-[var(--navy)] text-lg" style={{ fontFamily: "var(--font-playfair)" }}>
            Vielen Dank!
          </p>
          <p className="text-gray-500 text-sm mt-1">
            Wir melden uns innerhalb von 24 Stunden bei Ihnen.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-[var(--border-col)] p-8">
      <h2
        className="text-xl text-[var(--navy)] mb-5 pb-4 border-b border-[var(--cream-dark)]"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Rückruf anfordern
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>

        <div className="grid grid-cols-2 gap-4">
          {field("vorname", "Vorname", "text", "Max")}
          {field("nachname", "Nachname", "text", "Mustermann")}
        </div>

        <div className="grid grid-cols-2 gap-4">
          {field("email", "E-Mail-Adresse", "email", "max@beispiel.de")}
          {field("telefon", "Telefonnummer", "tel", "+49 152 …")}
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Tierart Select */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold uppercase tracking-wide text-[var(--navy)]">
              Tierart <span className="text-[var(--gold)]">*</span>
            </label>
            <select
              value={data.tierart}
              onChange={(e) => {
                setData((p) => ({ ...p, tierart: e.target.value }));
                setErrors((p) => ({ ...p, tierart: false }));
              }}
              className={`px-3.5 py-2.5 border rounded-xl text-sm outline-none transition-all appearance-none cursor-pointer ${
                errors.tierart
                  ? "border-red-400"
                  : "border-[var(--border-col)] focus:border-[var(--navy)] focus:ring-2 focus:ring-[var(--navy)]/10"
              }`}
            >
              <option value="" disabled>Bitte wählen</option>
              <option value="hund">🐶 Hund</option>
              <option value="katze">🐱 Katze</option>
              <option value="sonstiges">🐾 Sonstiges</option>
            </select>
          </div>

          {field("alter", "Alter des Tiers", "text", "z. B. 3 Jahre")}
        </div>

        <div className="grid grid-cols-2 gap-4">
          {field("rasse", "Rasse", "text", "z. B. Labrador", true)}
          {field("termin", "Wunschtermin Rückruf", "datetime-local", undefined)}
        </div>

        {/* Fragen */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold uppercase tracking-wide text-[var(--navy)]">
            Ihre Fragen{" "}
            <span className="text-gray-400 normal-case font-normal tracking-normal">(optional)</span>
          </label>
          <textarea
            rows={3}
            value={data.fragen}
            onChange={(e) => setData((p) => ({ ...p, fragen: e.target.value }))}
            placeholder="Was möchten Sie gerne wissen?"
            className="px-3.5 py-2.5 border border-[var(--border-col)] rounded-xl text-sm outline-none resize-y focus:border-[var(--navy)] focus:ring-2 focus:ring-[var(--navy)]/10 transition-all"
          />
        </div>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 w-full py-3.5 bg-[var(--gold)] text-white rounded-xl font-semibold text-sm hover:bg-[#b5671e] transition-all hover:-translate-y-0.5 hover:shadow-lg"
        >
          Jetzt Rückruf anfordern
          <ArrowRight size={17} />
        </button>

        <p className="flex items-center gap-1.5 text-xs text-gray-400">
          <Lock size={12} />
          Ihre Daten werden vertraulich behandelt und nicht weitergegeben.
        </p>

      </form>
    </div>
  );
}
