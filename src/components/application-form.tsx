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
              placeholder="Nome da sua organizacao"
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
            <span>Numero de funcionarios</span>
            <select name="team-size" defaultValue="51 - 200 funcionarios">
              <option>1 - 10 funcionarios</option>
              <option>11 - 50 funcionarios</option>
              <option>51 - 200 funcionarios</option>
              <option>200+ funcionarios</option>
            </select>
          </label>
        </div>

        <div className="form-divider" />

        <div className="application-stack">
          <label className="field">
            <span>Area ou processo que deseja mapear</span>
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
                "Reduzir dependencia",
                "Padronizar processos",
                "Escalar operacao",
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
            <legend>Urgencia para implementacao</legend>
            <div className="choice-grid choice-grid-three">
              {["Imediata", "Proximos 30 dias", "Apenas sondando"].map(
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
          Enviar aplicacao
        </button>
      </form>

      {formState === "success" ? (
        <div className="success-banner" role="status">
          <strong>Aplicacao recebida.</strong> Como o formulario esta em modo
          estatico neste momento, a proxima etapa e conectar esse layout ao
          destino final quando voce quiser.
        </div>
      ) : null}
    </div>
  );
}
