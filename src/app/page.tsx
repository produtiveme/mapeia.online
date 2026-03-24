import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import {
  deliverables,
  faqs,
  plans,
  processSteps,
  targetAudience,
} from "@/lib/content";

export default function Home() {
  return (
    <SiteShell activePath="/">
      <section className="hero-section section">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Consultoria de processos online</span>
            <h1>
              Tire o processo da cabeça das pessoas.{" "}
              <span className="gradient-text">Padronize para escalar.</span>
            </h1>
            <p className="hero-text">
              A Mapeia.Online ajuda empresas em crescimento a enxergar o
              processo real, reduzir dependência de pessoas-chave e transformar
              conhecimento disperso em padrões claros.
            </p>
            <div className="button-row">
              <Link className="button button-primary" href="/aplicacao">
                Preencher aplicação
              </Link>
              <Link className="button button-secondary" href="/servicos">
                Ver serviços
              </Link>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="hero-card">
              <div className="crystal crystal-large" />
              <div className="crystal crystal-small" />
              <div className="hero-glow hero-glow-blue" />
              <div className="hero-glow hero-glow-pink" />
            </div>
          </div>
        </div>
      </section>

      <section className="section surface-alt">
        <div className="shell">
          <div className="section-heading">
            <span className="eyebrow">O problema</span>
            <h2>O custo da falta de padrão</h2>
            <p>
              Processos invisíveis criam vulnerabilidades silenciosas dentro da
              operação.
            </p>
          </div>

          <div className="card-grid three-cols">
            <article className="feature-card">
              <strong>Dependência de pessoas-chave</strong>
              <p>
                Quando o conhecimento mora em poucas pessoas, qualquer ausência
                vira risco operacional.
              </p>
            </article>
            <article className="feature-card">
              <strong>Retrabalho e variações</strong>
              <p>
                Cada pessoa executa de um jeito, a qualidade oscila e o processo
                fica mais caro do que deveria.
              </p>
            </article>
            <article className="feature-card">
              <strong>Crescimento vira caos</strong>
              <p>
                Sem padrões claros, contratar e expandir aumenta a complexidade
                em vez da capacidade.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-heading center">
            <span className="eyebrow">Entregáveis</span>
            <h2>O que entregamos</h2>
          </div>

          <div className="card-grid three-cols">
            {deliverables.map((item) => (
              <article key={item} className="deliverable-card">
                <span className="dot-accent" />
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface-strong">
        <div className="shell">
          <div className="section-heading split">
            <div>
              <span className="eyebrow">Método</span>
              <h2>Jornada de transformação</h2>
            </div>
            <p>Um fluxo direto, com escopo claro e entregas objetivas.</p>
          </div>

          <div className="step-grid">
            {processSteps.map((step) => (
              <article key={step.index} className="step-card">
                <span className="step-number">{step.index}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell two-column-panel">
          <div className="panel">
            <span className="eyebrow">Para quem</span>
            <h2>Perfil ideal de cliente</h2>
            <ul className="list-clean">
              {targetAudience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="panel panel-emphasis">
            <span className="eyebrow">Escopo base</span>
            <h2>Consultoria previsível, sem escopo infinito</h2>
            <p>
              O formato inicial da Mapeia.Online foca em um processo por vez,
              com diagnóstico AS-IS, gargalos priorizados, POPs essenciais e
              backlog de melhorias.
            </p>
            <Link className="button button-primary" href="/servicos">
              Conhecer os planos
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-heading center">
            <span className="eyebrow">Planos</span>
            <h2>Como podemos atuar</h2>
          </div>

          <div className="plan-grid">
            {plans.map((plan, index) => (
              <article
                key={plan.name}
                className={index === 1 ? "plan-card plan-card-featured" : "plan-card"}
              >
                <span className="plan-badge">{plan.badge}</span>
                <h3>{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
                <div className="price-box">
                  <strong>{plan.priceCash}</strong>
                  <span>{plan.priceInstallments}</span>
                </div>
                <ul className="list-clean compact">
                  {plan.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link className="button button-primary button-block" href="/aplicacao">
                  Aplicação
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell narrow-shell">
          <div className="section-heading center">
            <span className="eyebrow">Perguntas frequentes</span>
            <h2>Dúvidas comuns antes de começar</h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq) => (
              <article key={faq.question} className="faq-card">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="cta-band">
            <div>
              <span className="eyebrow eyebrow-light">Próximo passo</span>
              <h2>Quer organizar um processo crítico e reduzir dependência?</h2>
            </div>
            <Link className="button button-light" href="/aplicacao">
              Preencher aplicação agora
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
