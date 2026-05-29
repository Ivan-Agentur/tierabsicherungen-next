import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Datenschutzerklärung – tierabsicherungen.de",
  description: "Informationen zum Datenschutz gemäß DSGVO für tierabsicherungen.de",
};

export default function Datenschutz() {
  return (
    <>
      <Header />

      {/* Content */}
      <main className="bg-[var(--cream)] min-h-screen py-16 px-6">
        <div className="max-w-3xl mx-auto">

          <h1
            className="text-3xl md:text-4xl text-[var(--navy)] mb-3"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Datenschutz&shy;erklärung
          </h1>
          <p className="text-gray-400 text-sm mb-10">Stand: Mai 2026</p>

          <div className="flex flex-col gap-8">

            <Section title="1. Verantwortlicher">
              <p>Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:</p>
              <address className="not-italic mt-3 text-[var(--foreground)]">
                <strong>Agentur Ivan Aziablé</strong><br />
                Inhaber: Ivan Aziablé<br />
                IHK-registrierter Versicherungsmakler<br />
                Reg.-Nr. D-JA31-D7W20-08<br />
                E-Mail: <a href="mailto:info@tierabsicherungen.de" className="text-[var(--gold)] hover:underline">info@tierabsicherungen.de</a>
              </address>
            </Section>

            <Section title="2. Welche Daten wir erheben">
              <p>Im Rahmen des Kontaktformulars auf dieser Website erheben wir folgende personenbezogene Daten:</p>
              <ul className="mt-3 space-y-1.5 list-disc list-inside text-[var(--foreground)]">
                <li>Vor- und Nachname</li>
                <li>E-Mail-Adresse</li>
                <li>Telefonnummer</li>
                <li>Name, Art, Alter und Rasse des Haustieres</li>
                <li>Angabe, ob das Haustier gechipt ist</li>
                <li>Gewünschte Rückrufzeit</li>
                <li>Optionale Fragen oder Anmerkungen</li>
              </ul>
            </Section>

            <Section title="3. Zweck der Datenverarbeitung">
              <p>
                Ihre Daten werden ausschließlich zum Zweck der <strong>persönlichen Beratung zu Tierkrankenversicherungen</strong> durch die Agentur Ivan Aziablé verwendet. Konkret bedeutet das:
              </p>
              <ul className="mt-3 space-y-1.5 list-disc list-inside text-[var(--foreground)]">
                <li>Bearbeitung Ihrer Rückruf-Anfrage durch Ivan Aziablé</li>
                <li>Vorbereitung eines individuellen Versicherungsangebots</li>
                <li>Persönliche Kontaktaufnahme zur Beratung über Versicherungsleistungen</li>
              </ul>
              <p className="mt-3">
                Eine Nutzung Ihrer Daten zu Werbezwecken oder eine Weitergabe an Dritte erfolgt nicht ohne Ihre ausdrückliche Zustimmung.
              </p>
            </Section>

            <Section title="4. Rechtsgrundlage">
              <p>
                Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf Grundlage Ihrer ausdrücklichen Einwilligung gemäß{" "}
                <strong>Art. 6 Abs. 1 lit. a DSGVO</strong>, die Sie durch das Ankreuzen der Datenschutz-Checkbox im Kontaktformular erteilen.
              </p>
              <p className="mt-3">
                Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Wenden Sie sich dazu per E-Mail an{" "}
                <a href="mailto:info@tierabsicherungen.de" className="text-[var(--gold)] hover:underline">info@tierabsicherungen.de</a>.
              </p>
            </Section>

            <Section title="5. Speicherdauer">
              <p>
                Ihre Daten werden gespeichert, solange dies für die Beratung und eine etwaige Vertragsanbahnung erforderlich ist. Nach Abschluss des Vorgangs und Ablauf etwaiger gesetzlicher Aufbewahrungsfristen (in der Regel 6–10 Jahre gemäß handels- und steuerrechtlichen Vorschriften) werden Ihre Daten gelöscht.
              </p>
            </Section>

            <Section title="6. Ihre Rechte">
              <p>Sie haben gemäß DSGVO folgende Rechte:</p>
              <ul className="mt-3 space-y-1.5 list-disc list-inside text-[var(--foreground)]">
                <li><strong>Auskunft</strong> (Art. 15 DSGVO): Informationen über Ihre gespeicherten Daten</li>
                <li><strong>Berichtigung</strong> (Art. 16 DSGVO): Korrektur unrichtiger Daten</li>
                <li><strong>Löschung</strong> (Art. 17 DSGVO): Löschung nicht mehr benötigter Daten</li>
                <li><strong>Einschränkung</strong> (Art. 18 DSGVO): Einschränkung der Verarbeitung</li>
                <li><strong>Widerspruch</strong> (Art. 21 DSGVO): Widerspruch gegen die Verarbeitung</li>
                <li><strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO): Herausgabe Ihrer Daten in maschinenlesbarem Format</li>
                <li><strong>Widerruf</strong> (Art. 7 Abs. 3 DSGVO): Widerruf Ihrer Einwilligung jederzeit ohne Angabe von Gründen</li>
              </ul>
              <p className="mt-3">
                Zur Ausübung Ihrer Rechte wenden Sie sich an:{" "}
                <a href="mailto:info@tierabsicherungen.de" className="text-[var(--gold)] hover:underline">info@tierabsicherungen.de</a>
              </p>
            </Section>

            <Section title="7. Beschwerderecht">
              <p>
                Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren. Die zuständige Aufsichtsbehörde richtet sich nach Ihrem Wohnort.
              </p>
            </Section>

            <Section title="8. Technische Übermittlung">
              <p>
                Die Übertragung Ihrer Formulardaten erfolgt verschlüsselt über HTTPS. Die Daten werden über den Dienst{" "}
                <strong>Web3Forms</strong> (web3forms.com) an die E-Mail-Adresse des Verantwortlichen weitergeleitet und dort nicht dauerhaft auf externen Servern gespeichert.
              </p>
            </Section>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl border border-[var(--border-col)] p-7">
      <h2
        className="text-lg text-[var(--navy)] mb-4 pb-3 border-b border-[var(--cream-dark)]"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        {title}
      </h2>
      <div className="text-sm text-gray-500 leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  );
}
