"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, Lock, AlertCircle } from "lucide-react";
import { submitContactToHubSpot } from "@/app/actions/submitContact";

type FormData = {
  vorname: string;
  nachname: string;
  email: string;
  telefon: string;
  tierart: string;
  gechipt: string;
  alter: string;
  rasse: string;
  termin: string;
  fragen: string;
};

const initial: FormData = {
  vorname: "", nachname: "", email: "", telefon: "",
  tierart: "", gechipt: "", alter: "", rasse: "", termin: "", fragen: "",
};

export default function ContactForm() {
  const [data, setData] = useState<FormData>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, boolean>>>({});

  const required: (keyof FormData)[] = [
    "vorname", "nachname", "email", "telefon", "tierart", "gechipt", "alter", "termin",
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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    
    setLoading(true);
    setError(null);

    const result = await submitContactToHubSpot(data);
    
    if (result.success) {
      setSubmitted(true);
      setData(initial);
    } else {
      setError(result.error || "Fehler beim Absenden des Formulars. Bitte versuchen Sie es später erneut.");
    }
    
    setLoading(false);
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

        {error && (
          <div className="flex gap-3 items-start bg-red-50 border border-red-200 rounded-xl p-4">
            <AlertCircle size={18} className="text-red-500 flex-shrink-0 mt-0.5" />
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}

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
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold uppercase tracking-wide text-[var(--navy)]">
              Ist Ihr Tier gechipt? <span className="text-[var(--gold)]">*</span>
            </label>
            <div className="flex items-center gap-4">
              <label className="inline-flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="gechipt"
                  value="ja"
                  checked={data.gechipt === "ja"}
                  onChange={(e) => {
                    setData((p) => ({ ...p, gechipt: e.target.value }));
                    setErrors((p) => ({ ...p, gechipt: false }));
                  }}
                  className="h-4 w-4 accent-[var(--gold)]"
                />
                Ja
              </label>
              <label className="inline-flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="gechipt"
                  value="nein"
                  checked={data.gechipt === "nein"}
                  onChange={(e) => {
                    setData((p) => ({ ...p, gechipt: e.target.value }));
                    setErrors((p) => ({ ...p, gechipt: false }));
                  }}
                  className="h-4 w-4 accent-[var(--gold)]"
                />
                Nein
              </label>
            </div>
            {errors.gechipt ? (
              <p className="text-red-500 text-xs mt-1">Bitte wählen Sie Ja oder Nein.</p>
            ) : null}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {field("alter", "Alter des Tiers", "text", "z. B. 3 Jahre")}
          {field("rasse", "Rasse", "text", "z. B. Labrador", true)}
        </div>

        <div className="grid grid-cols-1 gap-4">
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
          disabled={loading}
          className="flex items-center justify-center gap-2 w-full py-3.5 bg-[var(--gold)] text-white rounded-xl font-semibold text-sm hover:bg-[#b5671e] transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:hover:-translate-y-0 disabled:cursor-not-allowed"
        >
          {loading ? "Wird übermittelt..." : "Jetzt Rückruf anfordern"}
          {!loading && <ArrowRight size={17} />}
        </button>

        <p className="flex items-center gap-1.5 text-xs text-gray-400">
          <Lock size={12} />
          Ihre Daten werden vertraulich behandelt und nicht weitergegeben.
        </p>

      </form>
    </div>
  );
}
