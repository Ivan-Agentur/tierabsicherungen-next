"use client";

import { useEffect, useState } from "react";
import { X, ChevronDown, ChevronUp, Shield, BarChart2, Megaphone } from "lucide-react";

const STORAGE_KEY = "cookie_consent";

interface ConsentState {
  analytics: boolean;
  marketing: boolean;
  decided: boolean;
}

function loadConsent(): ConsentState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveConsent(state: ConsentState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

interface ToggleProps {
  checked: boolean;
  onChange: (v: boolean) => void;
  disabled?: boolean;
}

function Toggle({ checked, onChange, disabled }: ToggleProps) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
        checked ? "bg-[var(--gold)]" : "bg-gray-200"
      } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
    >
      <span
        className={`inline-block h-4 w-4 rounded-full bg-white shadow transform transition-transform ${
          checked ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const saved = loadConsent();
    if (!saved?.decided) {
      setVisible(true);
    }
  }, []);

  function acceptAll() {
    saveConsent({ analytics: true, marketing: true, decided: true });
    setVisible(false);
  }

  function saveSelection() {
    saveConsent({ analytics, marketing, decided: true });
    setVisible(false);
  }

  function declineAll() {
    saveConsent({ analytics: false, marketing: false, decided: true });
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <>
      {/* Backdrop when settings are open */}
      {settingsOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
          onClick={() => setSettingsOpen(false)}
        />
      )}

      {/* Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 flex justify-center">
        <div
          className="w-full max-w-2xl rounded-2xl border border-[var(--border-col)] bg-white shadow-[0_8px_40px_rgba(0,0,0,.14)]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {/* Settings panel (expandable) */}
          {settingsOpen && (
            <div className="px-5 pt-5 pb-4 border-b border-[var(--cream-dark)]">
              <p
                className="text-xs font-bold uppercase tracking-widest text-[var(--navy)] mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Cookie-Einstellungen
              </p>

              <div className="space-y-4">
                {/* Essential */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-2.5">
                    <Shield size={15} className="text-[var(--gold)] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-[var(--navy)]">Notwendige Cookies</p>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                        Für den Betrieb der Website unbedingt erforderlich (Session, Sicherheit,
                        Cookie-Einwilligung).
                      </p>
                    </div>
                  </div>
                  <Toggle checked disabled onChange={() => {}} />
                </div>

                {/* Analytics */}
                <div className="flex items-start justify-between gap-4 pt-3 border-t border-[var(--cream-dark)]">
                  <div className="flex items-start gap-2.5">
                    <BarChart2 size={15} className="text-[var(--navy)] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-[var(--navy)]">Analyse-Cookies</p>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                        Helfen uns zu verstehen, wie Besucher die Website nutzen (z. B. Google
                        Analytics). Keine persönlichen Daten.
                      </p>
                    </div>
                  </div>
                  <Toggle checked={analytics} onChange={setAnalytics} />
                </div>

                {/* Marketing */}
                <div className="flex items-start justify-between gap-4 pt-3 border-t border-[var(--cream-dark)]">
                  <div className="flex items-start gap-2.5">
                    <Megaphone size={15} className="text-[var(--navy)] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-[var(--navy)]">Marketing-Cookies</p>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                        Ermöglichen personalisierte Werbung und Remarketing auf Drittplattformen.
                      </p>
                    </div>
                  </div>
                  <Toggle checked={marketing} onChange={setMarketing} />
                </div>
              </div>
            </div>
          )}

          {/* Main banner row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 px-5 py-4">
            {/* Text */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-[var(--navy)] mb-0.5">
                🍪 Wir respektieren Ihre Privatsphäre
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Wir nutzen Cookies, um diese Website zu betreiben und optional die Nutzung zu
                analysieren.{" "}
                <a
                  href="/datenschutz"
                  className="underline text-[var(--gold)] hover:text-[var(--gold-light)]"
                >
                  Datenschutzerklärung
                </a>
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-2 shrink-0">
              {/* Settings toggle */}
              <button
                onClick={() => setSettingsOpen((o) => !o)}
                className="flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-[var(--navy)] px-3 py-2 rounded-lg border border-[var(--border-col)] hover:border-[var(--navy)] transition-colors"
              >
                Einstellungen
                {settingsOpen ? <ChevronDown size={13} /> : <ChevronUp size={13} />}
              </button>

              {settingsOpen ? (
                <>
                  <button
                    onClick={declineAll}
                    className="text-xs font-medium text-gray-500 hover:text-[var(--navy)] px-3 py-2 rounded-lg border border-[var(--border-col)] hover:border-[var(--navy)] transition-colors"
                  >
                    Ablehnen
                  </button>
                  <button
                    onClick={saveSelection}
                    className="text-xs font-semibold bg-[var(--navy)] text-white px-4 py-2 rounded-lg hover:bg-[var(--navy-light)] transition-colors"
                  >
                    Auswahl bestätigen
                  </button>
                </>
              ) : null}

              <button
                onClick={acceptAll}
                className="text-xs font-semibold bg-[var(--gold)] text-white px-4 py-2 rounded-lg hover:bg-[var(--gold-light)] transition-colors"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
