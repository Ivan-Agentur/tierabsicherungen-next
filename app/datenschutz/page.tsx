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

      <main className="bg-[var(--cream)] min-h-screen py-16 px-6">
        <div className="max-w-3xl mx-auto">

          <h1
            className="text-3xl md:text-4xl text-[var(--navy)] mb-3"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Datenschutz&shy;erklärung
          </h1>
          <p className="text-gray-400 text-sm mb-10">Stand: Juni 2026</p>

          <div className="flex flex-col gap-6">

            <Section title="1. Verantwortlicher">
              <p>Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und des Bundesdatenschutzgesetzes (BDSG) ist:</p>
              <address className="not-italic mt-3 text-[var(--foreground)]">
                <strong>Ivan Aziablé</strong><br />
                ARAG Hauptgeschäftsstelle Rhein Sieg<br />
                Holzgasse 4–20<br />
                53721 Siegburg<br />
                <br />
                E-Mail: <a href="mailto:ivan.aziable@arag-partner.de" className="text-[var(--gold)] hover:underline">ivan.aziable@arag-partner.de</a>
              </address>
            </Section>

            <Section title="2. Welche Daten wir erheben">
              <p>
                Im Rahmen des Kontaktformulars auf dieser Website erheben wir folgende personenbezogene Daten:
              </p>
              <ul className="mt-3 space-y-1.5 list-disc list-inside text-[var(--foreground)]">
                <li>Vor- und Nachname</li>
                <li>E-Mail-Adresse</li>
                <li>Telefonnummer</li>
                <li>Name, Art, Alter und Rasse des Haustieres</li>
                <li>Angabe, ob das Haustier gechipt ist</li>
                <li>Gewünschte Rückrufzeit</li>
                <li>Optionale Fragen oder Anmerkungen</li>
              </ul>
              <p className="mt-3">
                Beim Besuch der Website werden zudem technische Daten automatisch durch den
                Webserver erfasst (Server-Logfiles), darunter IP-Adresse, Datum und Uhrzeit
                des Zugriffs, aufgerufene Seite, Browsertyp und Betriebssystem. Diese Daten
                werden ausschließlich zur Sicherstellung des technischen Betriebs verarbeitet
                und nicht mit anderen Datenquellen zusammengeführt.
              </p>
            </Section>

            <Section title="3. Zweck der Datenverarbeitung">
              <p>
                Ihre Daten werden ausschließlich zum Zweck der <strong>persönlichen Beratung
                zu Tierkrankenversicherungen</strong> und der damit verbundenen Vertragsanbahnung
                verwendet. Konkret bedeutet das:
              </p>
              <ul className="mt-3 space-y-1.5 list-disc list-inside text-[var(--foreground)]">
                <li>Bearbeitung Ihrer Rückruf-Anfrage</li>
                <li>Vorbereitung eines individuellen Versicherungsangebots</li>
                <li>Persönliche Kontaktaufnahme zur Beratung über Versicherungsleistungen</li>
                <li>Erfüllung gesetzlicher Beratungs- und Dokumentationspflichten gemäß VVG</li>
              </ul>
              <p className="mt-3">
                Eine Nutzung Ihrer Daten zu Werbezwecken oder eine Weitergabe an Dritte
                erfolgt nicht ohne Ihre ausdrückliche Zustimmung. Eine Übermittlung an den
                Versicherer erfolgt nur, wenn und soweit dies für die Vertragsanbahnung oder
                -durchführung erforderlich ist.
              </p>
            </Section>

            <Section title="4. Rechtsgrundlage">
              <p>
                Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf folgenden
                Rechtsgrundlagen:
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside text-[var(--foreground)]">
                <li>
                  <strong>Art. 6 Abs. 1 lit. a DSGVO</strong> – Einwilligung: durch das
                  Ankreuzen der Datenschutz-Checkbox im Kontaktformular erteilen Sie Ihre
                  ausdrückliche Einwilligung zur Verarbeitung Ihrer Daten.
                </li>
                <li>
                  <strong>Art. 6 Abs. 1 lit. b DSGVO</strong> – Vertragsanbahnung: soweit
                  die Verarbeitung zur Durchführung vorvertraglicher Maßnahmen erforderlich
                  ist.
                </li>
                <li>
                  <strong>Art. 6 Abs. 1 lit. c DSGVO</strong> – Rechtliche Verpflichtung:
                  zur Erfüllung gesetzlicher Pflichten, insbesondere nach VVG und GewO.
                </li>
              </ul>
              <p className="mt-3">
                Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft
                widerrufen. Wenden Sie sich dazu per E-Mail an{" "}
                <a href="mailto:ivan.aziable@arag-partner.de" className="text-[var(--gold)] hover:underline">
                  ivan.aziable@arag-partner.de
                </a>.
              </p>
            </Section>

            <Section title="5. Speicherdauer">
              <p>
                Ihre Daten werden gespeichert, solange dies für die Beratung und eine
                etwaige Vertragsanbahnung oder -durchführung erforderlich ist. Darüber
                hinaus unterliegt der Verantwortliche als Versicherungsmakler
                handels- und steuerrechtlichen Aufbewahrungspflichten (in der Regel
                6–10 Jahre). Nach Ablauf dieser Fristen werden Ihre Daten gelöscht oder
                gesperrt.
              </p>
            </Section>

            <Section title="6. Weitergabe von Daten">
              <p>
                Personenbezogene Daten werden nur übermittelt an:
              </p>
              <ul className="mt-3 space-y-1.5 list-disc list-inside text-[var(--foreground)]">
                <li>
                  <strong>Versicherungsunternehmen</strong>, soweit dies für die
                  Vertragsanbahnung oder -durchführung notwendig ist (Art. 6 Abs. 1 lit. b DSGVO)
                </li>
                <li>
                  <strong>Web3Forms</strong> (Formularverarbeitungsdienst, web3forms.com):
                  Ihre Formulardaten werden verschlüsselt über HTTPS übermittelt und an die
                  E-Mail-Adresse des Verantwortlichen weitergeleitet. Eine dauerhafte Speicherung
                  auf den Servern von Web3Forms findet nicht statt.
                </li>
                <li>
                  <strong>Behörden</strong>, sofern wir gesetzlich dazu verpflichtet sind
                </li>
              </ul>
              <p className="mt-3">
                Eine Weitergabe zu Werbezwecken oder an sonstige Dritte findet ohne Ihre
                ausdrückliche Einwilligung nicht statt.
              </p>
            </Section>

            <Section title="7. Hosting">
              <p>
                Diese Website wird gehostet bei der <strong>Strato AG</strong>,
                Pascalstraße 10, 10587 Berlin. Mit Strato besteht ein
                Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO. Die Server
                befinden sich in Deutschland. Der Hoster erhebt automatisch Server-Logfiles
                (IP-Adressen, Zugriffszeitpunkte, Browserinformationen) zur Fehlerbehebung
                und Sicherstellung des Betriebs.
              </p>
            </Section>

            <Section title="8. SSL/TLS-Verschlüsselung">
              <p>
                Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
                vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte
                Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von
                „http://" auf „https://" wechselt und am Schloss-Symbol in Ihrer Browserzeile.
              </p>
              <p className="mt-3">
                Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten,
                die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
              </p>
            </Section>

            <Section title="9. WhatsApp-Kommunikation">
              <p>
                Sie haben die Möglichkeit, uns über WhatsApp zu kontaktieren. WhatsApp ist
                ein Dienst der <strong>Meta Platforms Ireland Limited</strong>, 4 Grand Canal
                Square, Grand Canal Harbour, Dublin 2, Irland (Meta).
              </p>
              <p className="mt-3">
                Bei der Nutzung von WhatsApp werden Ihre Nachrichten über die Server von Meta
                übertragen und verarbeitet. Dabei können Daten in Länder außerhalb der EU
                übermittelt werden. Meta hat sich zur Einhaltung der Standardvertragsklauseln
                der EU-Kommission verpflichtet.
              </p>
              <p className="mt-3">
                Die Nutzung von WhatsApp erfolgt auf Basis Ihrer Einwilligung (Art. 6 Abs. 1
                lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen, indem Sie
                uns über einen anderen Kanal kontaktieren. Weitere Informationen zum
                Datenschutz bei Meta finden Sie unter:{" "}
                <a
                  href="https://www.whatsapp.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--gold)] hover:underline"
                >
                  whatsapp.com/legal/privacy-policy
                </a>
              </p>
            </Section>

            <Section title="10. Cookies & Analyse">
              <p>
                Diese Website verwendet technisch notwendige Cookies, die für den Betrieb
                der Website erforderlich sind. Für weitere Cookies und Analyse-Tools wird
                Ihre Einwilligung über einen Cookie-Banner eingeholt.
              </p>
              <p className="mt-3">
                <strong>Technisch notwendige Cookies:</strong> Diese Cookies sind für die
                Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.
                Eine Einwilligung ist nicht erforderlich.
              </p>
              <p className="mt-3">
                <strong>Google Analytics:</strong> Diese Website ist für die Nutzung von
                Google Analytics (Google LLC, USA) vorbereitet, jedoch derzeit noch nicht
                aktiviert. Sobald aktiviert, wird dies im Cookie-Banner angezeigt und Ihre
                Einwilligung eingeholt. Google Analytics verwendet Cookies zur Analyse der
                Websitenutzung. Die dabei erzeugten Daten werden auf Servern von Google in
                den USA gespeichert. Rechtsgrundlage wäre Art. 6 Abs. 1 lit. a DSGVO
                (Einwilligung). Sie können Ihre Einwilligung jederzeit über den Cookie-Banner
                widerrufen.
              </p>
            </Section>

            <Section title="11. Ihre Rechte">
              <p>Sie haben gemäß DSGVO folgende Rechte gegenüber dem Verantwortlichen:</p>
              <ul className="mt-3 space-y-1.5 list-disc list-inside text-[var(--foreground)]">
                <li><strong>Auskunft</strong> (Art. 15 DSGVO): Informationen über Ihre gespeicherten Daten</li>
                <li><strong>Berichtigung</strong> (Art. 16 DSGVO): Korrektur unrichtiger Daten</li>
                <li><strong>Löschung</strong> (Art. 17 DSGVO): Löschung nicht mehr benötigter Daten</li>
                <li><strong>Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)</li>
                <li><strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO): Herausgabe in maschinenlesbarem Format</li>
                <li><strong>Widerspruch</strong> (Art. 21 DSGVO): Widerspruch gegen die Verarbeitung</li>
                <li><strong>Widerruf</strong> (Art. 7 Abs. 3 DSGVO): Widerruf Ihrer Einwilligung jederzeit ohne Angabe von Gründen</li>
              </ul>
              <p className="mt-3">
                Zur Ausübung Ihrer Rechte wenden Sie sich an:{" "}
                <a href="mailto:ivan.aziable@arag-partner.de" className="text-[var(--gold)] hover:underline">
                  ivan.aziable@arag-partner.de
                </a>
              </p>
            </Section>

            <Section title="12. Beschwerderecht bei der Aufsichtsbehörde">
              <p>
                Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die
                Verarbeitung Ihrer personenbezogenen Daten zu beschweren. Die zuständige
                Aufsichtsbehörde für Nordrhein-Westfalen ist:
              </p>
              <p className="mt-3 text-[var(--foreground)]">
                <strong>Landesbeauftragte für Datenschutz und Informationsfreiheit NRW (LDI NRW)</strong><br />
                Kavalleriestraße 2–4<br />
                40213 Düsseldorf<br />
                Telefon: +49 211 38424-0<br />
                <a
                  href="https://www.ldi.nrw.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--gold)] hover:underline"
                >
                  www.ldi.nrw.de
                </a>
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
