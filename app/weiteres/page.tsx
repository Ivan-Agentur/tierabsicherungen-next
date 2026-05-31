import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Scale, Shield, Home, Car, CalendarCheck } from "lucide-react";

export const metadata = {
  title: "Weiteres – tierabsicherungen.de",
  description:
    "Haustier-Rechtstipps: Was Sie als Tierhalter rechtlich wissen sollten – von Mietrecht bis Schadenersatz.",
};

const rechtsThemen = [
  {
    title: "Streit mit dem Nachbarn",
    icon: Home,
    tarif: "ab Komfort",
    text: "Ihr Nachbar behauptet, Ihre Katze hinterlässt Schäden in seinem Garten – oder er ärgert sich über Ihren bellenden Hund? Solche Konflikte lassen sich oft außergerichtlich lösen. Der Wohnungs- und Grundstücks-Rechtsschutz übernimmt die Kosten für Mediation oder einen Anwalt.",
  },
  {
    title: "Schadenersatz fordern",
    icon: Shield,
    tarif: "Premium",
    text: "Ihr Hund wurde von einem fremden Hund gebissen und muss behandelt werden? Dann haben Sie möglicherweise Anspruch auf Schadenersatz vom Halter des anderen Tieres. Mit dem Schadenersatz-Rechtsschutz stehen wir Ihnen dabei zur Seite.",
  },
  {
    title: "Bußgeld anfechten",
    icon: Scale,
    tarif: "Premium",
    text: "Ihnen wird vorgeworfen, Ihren Hund im Wald nicht angeleint zu haben? Oder Sie sollen eine Strafe zahlen, die Sie für ungerechtfertigt halten? Der Ordnungswidrigkeiten-Rechtsschutz hilft Ihnen, sich gegen Bußgelder zu wehren.",
  },
  {
    title: "Rechtlicher Beistand bei Bissen",
    icon: Scale,
    tarif: "Premium",
    text: "Ihr Hund hat jemanden gebissen und Sie werden strafrechtlich zur Verantwortung gezogen? Mit dem Straf-Rechtsschutz werden die Kosten für einen Anwalt übernommen – damit Sie sich vor Gericht professionell vertreten lassen können.",
  },
  {
    title: "Streit mit dem Veterinäramt",
    icon: Shield,
    tarif: "ab Komfort",
    text: "Das Veterinäramt hat Ihr Tier wegen angeblich schlechter Haltung abgeholt und Sie möchten dagegen vorgehen? Der Verwaltungs-Rechtsschutz unterstützt Sie bei Verfahren vor Verwaltungsgerichten.",
  },
  {
    title: "Hundesteuer anfechten",
    icon: Scale,
    tarif: "ab Komfort",
    text: "Sie halten die Höhe Ihrer Hundesteuer für unrechtmäßig und möchten dagegen klagen? Der Steuer-Rechtsschutz übernimmt die Kosten für das Verfahren vor einem deutschen Finanzgericht.",
  },
  {
    title: "Probleme mit dem Züchter",
    icon: Shield,
    tarif: "Premium",
    text: "Ein Züchter hat Ihnen wissentlich ein krankes Tier verkauft, ohne Sie darüber zu informieren? Das ist kein Kavaliersdelikt. Mit dem Rechtsschutz im Vertrags- und Sachenrecht können Sie Ihre Ansprüche geltend machen.",
  },
];

const rechtstipps = [
  {
    icon: Home,
    frage: "Dürfen Vermieter Haustiere in der Wohnung verbieten?",
    antwort:
      "Ein generelles Verbot für Hunde und Katzen im Mietvertrag ist nach einem Urteil des Bundesgerichtshofs nicht zulässig. Trotzdem kann im Einzelfall ein Verbot gerechtfertigt sein – zum Beispiel wenn das Tier nachweislich andere Mieter stört oder die Wohnung beschädigt. Als Mieter haben Sie also grundsätzlich das Recht, ein Haustier zu halten – solange Sie sich rücksichtsvoll verhalten.",
  },
  {
    icon: Car,
    frage: "Darf man eine Autoscheibe einschlagen, um ein Tier zu retten?",
    antwort:
      "Ja – wer eine Autoscheibe einschlägt, um ein Tier vor dem Hitzetod zu retten, muss in der Regel keinen Schadensersatz befürchten. Das Gesetz erlaubt es, in einer Notsituation Schäden zu verursachen, um ein höherwertiges Gut zu schützen. Wichtig: Vorher die Polizei oder Feuerwehr rufen, wenn möglich – und den Eingriff dokumentieren.",
  },
  {
    icon: CalendarCheck,
    frage: "Krankes Tier beim Züchter gekauft? Sie sind rückwirkend geschützt.",
    antwort:
      "Wenn Sie herausfinden, dass Ihr neu gekauftes Tier bereits beim Kauf krank war, sind Sie nicht schutzlos. Je nach Tarif greift der Rechtsschutz rückwirkend für bis zu drei Monate vor Vertragsbeginn – auch für den Kaufvertrag Ihres Tieres. Das bedeutet: Selbst wenn das Problem schon vor Abschluss der Versicherung entstanden ist, können Sie rechtliche Unterstützung in Anspruch nehmen und Ihre Ansprüche gegenüber dem Züchter geltend machen.",
  },
];

export default function WeiteresPage() {
  return (
    <>
      <Header />

      <main className="bg-[var(--cream)] min-h-screen">
        {/* Hero */}
        <section className="bg-[var(--navy)] pt-10 pb-10 md:pt-16 md:pb-14 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[var(--gold)] text-sm font-semibold uppercase tracking-widest mb-3">
              Wissenswertes
            </p>
            <h1
              className="text-4xl md:text-5xl text-center mb-4"
              style={{ fontFamily: "var(--font-playfair)", color: "white" }}
            >
              Ihr Tier.{" "}
              <em style={{ color: "white" }}>Ihr Recht.</em>
            </h1>
            <p className="text-white/70 text-base max-w-xl mx-auto">
              Als Tierhalter stehen Sie manchmal vor rechtlichen Fragen – mit dem Nachbarn,
              dem Vermieter oder dem Amt. Hier finden Sie die wichtigsten Tipps.
            </p>
          </div>
        </section>

        {/* Tab Navigation */}
        <div className="bg-[var(--navy)] border-t border-white/10 px-6">
          <div className="max-w-5xl mx-auto flex gap-1">
            <Link
              href="/tarife"
              className="px-6 py-3 text-sm font-semibold border-b-2 border-transparent text-white/60 hover:text-white transition-colors"
            >
              Tarife
            </Link>
            <Link
              href="/weiteres"
              className="px-6 py-3 text-sm font-semibold border-b-2 border-[var(--gold)] text-white"
            >
              Weiteres
            </Link>
          </div>
        </div>

        {/* Rechtsschutz-Übersicht */}
        <section className="py-14 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2
                className="text-2xl md:text-3xl text-[var(--navy)] mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Rechtsschutz für Tierhalter
              </h2>
              <p className="text-gray-500 text-sm max-w-xl mx-auto">
                Je nach Tarif sind Rechtsschutz-Leistungen direkt in Ihrer Tier-Krankenversicherung enthalten.
                Hier sehen Sie, in welchen Situationen wir für Sie da sind.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {rechtsThemen.map((t) => (
                <div
                  key={t.title}
                  className="bg-white rounded-2xl border border-[var(--border-col)] p-6 flex flex-col gap-3"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[var(--navy)]/8 flex items-center justify-center shrink-0 mt-0.5">
                      <t.icon size={18} className="text-[var(--navy)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-semibold text-[var(--navy)] text-base">{t.title}</h3>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--gold)]/15 text-[var(--gold)] font-semibold">
                          {t.tarif}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{t.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-[var(--navy)]/5 border border-[var(--navy)]/10 rounded-2xl p-5 text-sm text-gray-600 leading-relaxed">
              <strong className="text-[var(--navy)]">Hinweis:</strong> Die Rechtsschutz-Leistungen sind eine Leistung der ARAG SE und je nach gewähltem Tarif (Komfort oder Premium) in der Tier-Krankenversicherung enthalten. Der genaue Leistungsumfang richtet sich nach den allgemeinen Versicherungsbedingungen.
            </div>
          </div>
        </section>

        {/* Rechtstipps */}
        <section className="py-14 px-6 bg-white border-t border-[var(--border-col)]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2
                className="text-2xl md:text-3xl text-[var(--navy)] mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Häufige Rechtsfragen
              </h2>
              <p className="text-gray-500 text-sm max-w-xl mx-auto">
                Drei Themen, über die sich viele Tierhalter Gedanken machen.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {rechtstipps.map((tip) => (
                <div
                  key={tip.frage}
                  className="rounded-2xl border border-[var(--border-col)] overflow-hidden"
                >
                  <div className="bg-[var(--cream)] px-6 py-4 flex items-center gap-3">
                    <tip.icon size={18} className="text-[var(--gold)] shrink-0" />
                    <h3 className="font-semibold text-[var(--navy)] text-base leading-snug">
                      {tip.frage}
                    </h3>
                  </div>
                  <div className="bg-white px-6 py-5">
                    <p className="text-sm text-gray-600 leading-relaxed">{tip.antwort}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 px-6 bg-[var(--navy)]">
          <div className="max-w-2xl mx-auto text-center">
            <h2
              className="text-3xl text-white mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Noch Fragen?
            </h2>
            <p className="text-white/65 mb-8">
              Ivan Aziablé berät Sie persönlich und kostenlos – zu Tarifen, Leistungen und allem rund um die Absicherung Ihres Haustieres.
            </p>
            <Link
              href="/#kontakt"
              className="inline-flex items-center gap-2.5 bg-[var(--gold)] hover:bg-[var(--gold-light)] text-white font-semibold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-xl text-base"
            >
              Kostenlose Beratung anfragen
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
