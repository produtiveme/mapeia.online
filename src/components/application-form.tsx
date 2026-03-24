"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "success";

export function ApplicationForm() {
  const [formState, setFormState] = useState<FormState>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState("success");
  }

  return (
    <div className="application-card">
      <form className="application-form" onSubmit={handleSubmit}>
        <div className="application-grid">
          <label className="field">
            <span>Nome completo</span>
            <input name="name" placeholder="Seu nome" type="text" />
          </label>
          <label className="field">
            <span>Empresa</span>
            <input
              name="company"
              placeholder="Nome da sua organização"
              type="text"
            />
          </label>
          <label className="field">
            <span>E-mail corporativo</span>
            <input
              name="email"
              placeholder="exemplo@empresa.com"
              type="email"
            />
          </label>
          <label className="field">
            <span>WhatsApp</span>
            <input name="phone" placeholder="(00) 00000-0000" type="tel" />
          </label>
          <label className="field field-full">
            <span>Número de funcionários</span>
            <select name="team-size" defaultValue="51 - 200 funcionários">
              <option>1 - 10 funcionários</option>
              <option>11 - 50 funcionários</option>
              <option>51 - 200 funcionários</option>
              <option>200+ funcionários</option>
            </select>
          </label>
        </div>

        <div className="form-divider" />

        <div className="application-stack">
          <label className="field">
            <span>Área ou processo que deseja mapear</span>
            <input
              name="process"
              placeholder="Ex: onboarding de clientes, vendas, financeiro"
              type="text"
            />
          </label>

          <fieldset className="field">
            <legend>Principal objetivo</legend>
            <div className="choice-grid">
              {[
                "Reduzir dependência",
                "Padronizar processos",
                "Escalar operação",
                "Eliminar retrabalho",
              ].map((option) => (
                <label key={option} className="choice-card">
                  <input name="objective" type="radio" value={option} />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <label className="field">
            <span>Qual a principal dor hoje?</span>
            <textarea
              name="pain"
              placeholder="Descreva brevemente os gargalos que voce enfrenta..."
              rows={5}
            />
          </label>

          <fieldset className="field">
            <legend>Urgência para implementação</legend>
            <div className="choice-grid choice-grid-three">
              {["Imediata", "Próximos 30 dias", "Apenas sondando"].map(
                (option) => (
                  <label key={option} className="choice-card">
                    <input name="urgency" type="radio" value={option} />
                    <span>{option}</span>
                  </label>
                ),
              )}
            </div>
          </fieldset>
        </div>

        <button className="button button-primary button-block" type="submit">
          Enviar aplicação
        </button>
      </form>

      {formState === "success" ? (
        <div className="success-banner" role="status">
          <strong>Aplicação recebida.</strong> Como o formulário está em modo
          estático neste momento, a próxima etapa é conectar esse layout ao
          destino final quando você quiser.
        </div>
      ) : null}
    </div>
  );
}
