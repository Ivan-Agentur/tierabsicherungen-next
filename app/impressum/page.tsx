import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Impressum – tierabsicherungen.de",
  description: "Gesetzliche Anbieterkennzeichnung gemäß § 5 TMG für tierabsicherungen.de",
};

export default function Impressum() {
  return (
    <>
      <Header />

      <main className="bg-[var(--cream)] min-h-screen py-16 px-6">
        <div className="max-w-3xl mx-auto">

          <h1
            className="text-3xl md:text-4xl text-[var(--navy)] mb-3"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Impressum
          </h1>
          <p className="text-gray-400 text-sm mb-10">Angaben gemäß § 5 TMG</p>

          <div className="flex flex-col gap-6">

            <Section title="Angaben gemäß § 5 TMG">
              <address className="not-italic text-[var(--foreground)]">
                <strong>Ivan Aziablé</strong><br />
                ARAG Hauptgeschäftsstelle Rhein Sieg<br />
                Holzgasse 4–20<br />
                53721 Siegburg<br />
                <br />
                E-Mail: <a href="mailto:info@tierabsicherungen.de" className="text-[var(--gold)] hover:underline">info@tierabsicherungen.de</a>
              </address>
            </Section>

            <Section title="Berufsbezeichnung und Zulassung">
              <p>
                Ivan Aziablé ist als <strong>Versicherungsmakler</strong> gemäß § 34d Abs. 1 der
                Gewerbeordnung (GewO) tätig und im Vermittlerregister der Deutschen Industrie-
                und Handelskammer eingetragen.
              </p>
              <p className="mt-3">
                <strong>Registrierungsnummer:</strong> D-JA31-D7W20-08<br />
                <strong>Register:</strong>{" "}
                <a
                  href="https://www.vermittlerregister.info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--gold)] hover:underline"
                >
                  www.vermittlerregister.info
                </a>
              </p>
            </Section>

            <Section title="Zuständige Aufsichtsbehörde">
              <p>
                <strong>Handelskammer Hamburg</strong><br />
                Adolphsplatz 1<br />
                20457 Hamburg<br />
                Telefon: +49 40 36138-0<br />
                <a
                  href="https://www.hk24.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--gold)] hover:underline"
                >
                  www.hk24.de
                </a>
              </p>
              <p className="mt-4">
                Die Aufsicht über Versicherungsvermittler wird zudem durch die{" "}
                <strong>Bundesanstalt für Finanzdienstleistungsaufsicht (BaFin)</strong> ausgeübt:<br />
                Graurheindorfer Str. 108, 53117 Bonn<br />
                <a
                  href="https://www.bafin.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--gold)] hover:underline"
                >
                  www.bafin.de
                </a>
              </p>
            </Section>

            <Section title="Berufshaftpflichtversicherung">
              <p>
                Gemäß § 34d Abs. 5 GewO in Verbindung mit § 9 VersVermV besteht eine
                Berufshaftpflichtversicherung. Der räumliche Geltungsbereich der
                Berufshaftpflichtversicherung erstreckt sich auf das Gebiet der
                Europäischen Union und die Vertragsstaaten des Europäischen
                Wirtschaftsraums (EWR).
              </p>
            </Section>

            <Section title="Schlichtungsstellen">
              <p>
                Bei Streitigkeiten aus der Vermittlung von Versicherungsverträgen können
                sich Verbraucher an folgende Schlichtungsstellen wenden:
              </p>
              <p className="mt-3">
                <strong>Versicherungsombudsmann e.V.</strong><br />
                Postfach 08 06 32, 10006 Berlin<br />
                <a
                  href="https://www.versicherungsombudsmann.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--gold)] hover:underline"
                >
                  www.versicherungsombudsmann.de
                </a>
              </p>
            </Section>

            <Section title="EU-Streitschlichtung">
              <p>
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--gold)] hover:underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="mt-3">
                Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren
                vor einer Verbraucherschlichtungsstelle teilzunehmen, mit Ausnahme der
                oben genannten Schlichtungsstellen für Versicherungsangelegenheiten.
              </p>
            </Section>

            <Section title="Inhaltlich Verantwortlicher">
              <p>
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:<br />
                <strong>Ivan Aziablé</strong><br />
                Holzgasse 4–20, 53721 Siegburg
              </p>
            </Section>

            <Section title="Haftungsausschluss">
              <p className="font-semibold text-[var(--navy)]">Haftung für Inhalte</p>
              <p className="mt-2">
                Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die
                Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch
                keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG
                für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich.
              </p>
              <p className="mt-3 font-semibold text-[var(--navy)]">Haftung für Links</p>
              <p className="mt-2">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte
                wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte
                auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist
                stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
              <p className="mt-3 font-semibold text-[var(--navy)]">Urheberrecht</p>
              <p className="mt-2">
                Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
                Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts
                bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
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
