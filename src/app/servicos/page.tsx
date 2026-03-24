import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { plans } from "@/lib/content";

export default function ServicosPage() {
  return (
    <SiteShell activePath="/servicos">
      <section className="section page-intro">
        <div className="shell page-intro-grid">
          <div>
            <span className="eyebrow">Nossas solucoes</span>
            <h1>Servicos</h1>
            <p className="lead">
              Duas opcoes para comecar. A aplicacao inicial nos ajuda a indicar
              qual formato faz mais sentido para o seu momento.
            </p>
          </div>
          <div className="intro-lines" aria-hidden="true">
            <span />
            <span />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell plan-grid">
          {plans.map((plan, index) => (
            <article
              key={plan.name}
              className={index === 1 ? "plan-card plan-card-featured" : "plan-card"}
            >
              <span className="plan-badge">{plan.badge}</span>
              <h2>{plan.name}</h2>
              <p className="plan-description">{plan.description}</p>

              <div className="price-box">
                <strong>{plan.priceCash}</strong>
                <span>{plan.priceInstallments}</span>
              </div>

              <div className="plan-section">
                <p className="plan-section-title">Inclui</p>
                <ul className="list-clean compact">
                  {plan.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="plan-section">
                <p className="plan-section-title">Extras</p>
                <ul className="list-clean compact">
                  {plan.extras.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <Link className="button button-primary button-block" href="/aplicacao">
                Preencher aplicacao
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="info-strip">
            A aplicacao funciona como um filtro inicial: entendemos seu cenario e
            indicamos o plano mais adequado antes de avancar.
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
