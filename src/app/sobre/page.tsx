import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { principles } from "@/lib/content";

export default function SobrePage() {
  return (
    <SiteShell activePath="/sobre">
      <section className="section page-intro">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Quem somos</span>
            <h1>
              Transformando <span className="gradient-text">caos operacional</span>{" "}
              em fluidez editorial.
            </h1>
            <p className="hero-text">
              A Mapeia.Online nasceu como a empresa irma do ProdutiveMe para
              focar em consultoria de processos. Nosso papel e transformar
              conhecimento tacito, gargalos e improvisos em uma estrutura clara,
              replicavel e pronta para sustentar crescimento.
            </p>
            <p className="supporting-note">
              Process mapping and standardization specialists
            </p>
          </div>

          <div className="hero-art hero-art-soft" aria-hidden="true">
            <div className="hero-card hero-card-neutral">
              <div className="floating-sheet sheet-one" />
              <div className="floating-sheet sheet-two" />
              <div className="floating-sheet sheet-three" />
            </div>
          </div>
        </div>
      </section>

      <section className="section surface-alt">
        <div className="shell">
          <div className="section-heading split">
            <div>
              <span className="eyebrow">Principios</span>
              <h2>Nossa forma de trabalhar</h2>
            </div>
            <p>
              O objetivo nao e fazer documentacao bonita. E construir clareza
              operacional que o time realmente consiga usar.
            </p>
          </div>

          <div className="card-grid four-cols">
            {principles.map((principle) => (
              <article key={principle.title} className="feature-card">
                <strong>{principle.title}</strong>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="cta-band">
            <div>
              <span className="eyebrow eyebrow-light">Pronto para estruturar</span>
              <h2>Se o processo esta travado, a operacao sente primeiro.</h2>
            </div>
            <div className="button-row">
              <Link className="button button-light" href="/aplicacao">
                Preencher aplicacao
              </Link>
              <Link className="button button-secondary-light" href="/servicos">
                Falar com o servico ideal
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
