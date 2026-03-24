import { ApplicationForm } from "@/components/application-form";
import { SiteShell } from "@/components/site-shell";

export default function AplicacaoPage() {
  return (
    <SiteShell activePath="/aplicacao">
      <section className="section page-intro">
        <div className="shell narrow-shell center-text">
          <span className="eyebrow">Aplicação</span>
          <h1>Aplicação</h1>
          <p className="lead">
            Responda algumas perguntas para entendermos seu cenário e orientar
            os próximos passos.
          </p>

          <div className="form-steps" aria-hidden="true">
            <div className="form-step form-step-active">1 Informações básicas</div>
            <div className="form-step">2 Contexto e objetivos</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell narrow-shell">
          <ApplicationForm />
        </div>
      </section>
    </SiteShell>
  );
}
