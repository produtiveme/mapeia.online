export const navItems = [
  { href: "/", label: "Início" },
  { href: "/servicos", label: "Serviços" },
  { href: "/sobre", label: "Sobre" },
  { href: "/aplicacao", label: "Aplicação" },
];

export const plans = [
  {
    name: "Essencial",
    badge: "Diagnóstico rápido",
    priceCash: "R$ 1.499,99",
    priceInstallments: "R$ 1.999,99 em até 3x no cartão",
    description:
      "Para mapear um processo crítico com clareza, padrão e próximos passos objetivos.",
    items: [
      "Diagrama AS-IS com até 15 etapas",
      "Top 10 gargalos e dependências",
      "Até 1 POP essencial",
      "Backlog de melhorias e próximos passos",
    ],
    extras: [
      "Treinamento gravado de como mapear processos por R$ 300,00",
      "POP adicional por R$ 400,00",
    ],
  },
  {
    name: "Completo",
    badge: "Processos em escala",
    priceCash: "R$ 3.999,99",
    priceInstallments: "R$ 4.499,99 em até 3x no cartão",
    description:
      "Para empresas que precisam de mais profundidade, alinhamento entre áreas e documentação viva no Notion.",
    items: [
      "Diagrama AS-IS com até 20 etapas",
      "Kickoff, aprofundamento, pré-validação e reunião final",
      "Matriz RACI do processo",
      "Até 3 POPs essenciais",
      "Top 20 gargalos e dependências",
      "Biblioteca do processo no Notion",
      "Treinamento gravado de como mapear processos",
    ],
    extras: ["POP adicional por R$ 300,00"],
  },
];

export const principles = [
  {
    title: "Simplicidade",
    text: "Não acreditamos em documentação que só parece robusta. O padrão precisa ser entendido e usado no dia a dia.",
  },
  {
    title: "Clareza",
    text: "Se um novo colaborador não entende o fluxo rapidamente, o processo ainda está opaco demais.",
  },
  {
    title: "Aplicabilidade",
    text: "Toda entrega precisa caber na operação real da empresa, com linguagem prática e acionável.",
  },
  {
    title: "Autonomia",
    text: "O objetivo não é criar dependência de consultoria, e sim reduzir dependência de pessoas-chave dentro da empresa.",
  },
];

export const processSteps = [
  {
    index: "01",
    title: "Aplicação inicial",
    text: "Você nos conta qual processo quer organizar, onde estão as dores e qual é o contexto do negócio.",
  },
  {
    index: "02",
    title: "Kickoff e fronteiras",
    text: "Travamos o escopo, definimos início e fim do processo e combinamos as evidências que vão sustentar o mapeamento.",
  },
  {
    index: "03",
    title: "Diagnóstico AS-IS",
    text: "Mapeamos como o processo roda hoje, identificamos gargalos e classificamos dependências nas quatro camadas.",
  },
  {
    index: "04",
    title: "Entrega acionável",
    text: "Você recebe diagrama, gargalos priorizados, POPs essenciais e backlog de melhorias para seguir com segurança.",
  },
];

export const deliverables = [
  "Diagrama AS-IS com visão ponta a ponta do processo",
  "Fronteiras claras de início, fim e fora do escopo",
  "Top gargalos e dependências com próximo passo recomendado",
  "Resumo executivo do diagnóstico",
  "POPs essenciais para rotinas críticas",
  "Backlog de melhorias e próximos passos",
];

export const targetAudience = [
  "Empresas com mais de 50 funcionários em fase de crescimento ou expansão.",
  "Gestores, diretores e donos que precisam de mais previsibilidade operacional.",
  "Operações com retrabalho, falta de padrão e dependência excessiva de pessoas-chave.",
];

export const faqs = [
  {
    question: "Para quem a Mapeia.Online foi criada?",
    answer:
      "Para empresas em crescimento que já possuem time estruturado, mas sofrem com caos operacional, retrabalho e dependências concentradas em poucas pessoas.",
  },
  {
    question: "O trabalho é teórico ou prático?",
    answer:
      "Prático. O foco é sair com um processo visível, um diagnóstico priorizado e documentos que apoiem a execução de verdade.",
  },
  {
    question: "O que significa mapear o AS-IS?",
    answer:
      "É registrar como o processo funciona hoje, sem idealização. Isso nos permite entender gargalos reais antes de propor qualquer evolução.",
  },
  {
    question: "Vocês implementam ferramentas também?",
    answer:
      "O foco principal aqui é a consultoria de processos. Dependendo do caso, o trabalho pode abrir caminho para desdobramentos com Notion e outras estruturas depois.",
  },
];
