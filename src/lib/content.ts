export const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/servicos", label: "Servicos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/aplicacao", label: "Aplicacao" },
];

export const plans = [
  {
    name: "Essencial",
    badge: "Diagnostico rapido",
    priceCash: "R$ 1.499,99",
    priceInstallments: "R$ 1.999,99 em ate 3x no cartao",
    description:
      "Para mapear um processo critico com clareza, padrao e proximos passos objetivos.",
    items: [
      "Diagrama AS-IS com ate 15 etapas",
      "Top 10 gargalos e dependencias",
      "Ate 1 POP essencial",
      "Backlog de melhorias e proximos passos",
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
    priceInstallments: "R$ 4.499,99 em ate 3x no cartao",
    description:
      "Para empresas que precisam de mais profundidade, alinhamento entre areas e documentacao viva no Notion.",
    items: [
      "Diagrama AS-IS com ate 20 etapas",
      "Kickoff, aprofundamento, pre-validacao e reuniao final",
      "Matriz RACI do processo",
      "Ate 3 POPs essenciais",
      "Top 20 gargalos e dependencias",
      "Biblioteca do processo no Notion",
      "Treinamento gravado de como mapear processos",
    ],
    extras: ["POP adicional por R$ 300,00"],
  },
];

export const principles = [
  {
    title: "Simplicidade",
    text: "Nao acreditamos em documentacao que so parece robusta. O padrao precisa ser entendido e usado no dia a dia.",
  },
  {
    title: "Clareza",
    text: "Se um novo colaborador nao entende o fluxo rapidamente, o processo ainda esta opaco demais.",
  },
  {
    title: "Aplicabilidade",
    text: "Toda entrega precisa caber na operacao real da empresa, com linguagem pratica e acionavel.",
  },
  {
    title: "Autonomia",
    text: "O objetivo nao e criar dependencia de consultoria, e sim reduzir dependencia de pessoas-chave dentro da empresa.",
  },
];

export const processSteps = [
  {
    index: "01",
    title: "Aplicacao inicial",
    text: "Voce nos conta qual processo quer organizar, onde estao as dores e qual o contexto do negocio.",
  },
  {
    index: "02",
    title: "Kickoff e fronteiras",
    text: "Travamos o escopo, definimos inicio e fim do processo e combinamos as evidencias que vao sustentar o mapeamento.",
  },
  {
    index: "03",
    title: "Diagnostico AS-IS",
    text: "Mapeamos como o processo roda hoje, identificamos gargalos e classificamos dependencias nas quatro camadas.",
  },
  {
    index: "04",
    title: "Entrega acionavel",
    text: "Voce recebe diagrama, gargalos priorizados, POPs essenciais e backlog de melhorias para seguir com seguranca.",
  },
];

export const deliverables = [
  "Diagrama AS-IS com visao ponta a ponta do processo",
  "Fronteiras claras de inicio, fim e fora do escopo",
  "Top gargalos e dependencias com proximo passo recomendado",
  "Resumo executivo do diagnostico",
  "POPs essenciais para rotinas criticas",
  "Backlog de melhorias e proximos passos",
];

export const targetAudience = [
  "Empresas com mais de 50 funcionarios em fase de crescimento ou expansao.",
  "Gestores, diretores e donos que precisam de mais previsibilidade operacional.",
  "Operacoes com retrabalho, falta de padrao e dependencia excessiva de pessoas-chave.",
];

export const faqs = [
  {
    question: "Para quem a Mapeia.Online foi criada?",
    answer:
      "Para empresas em crescimento que ja possuem time estruturado, mas sofrem com caos operacional, retrabalho e dependencias concentradas em poucas pessoas.",
  },
  {
    question: "O trabalho e teorico ou pratico?",
    answer:
      "Pratico. O foco e sair com um processo visivel, um diagnostico priorizado e documentos que apoiem a execucao de verdade.",
  },
  {
    question: "O que significa mapear o AS-IS?",
    answer:
      "E registrar como o processo funciona hoje, sem idealizacao. Isso nos permite entender gargalos reais antes de propor qualquer evolucao.",
  },
  {
    question: "Vocês implementam ferramentas tambem?",
    answer:
      "O foco principal aqui e a consultoria de processos. Dependendo do caso, o trabalho pode abrir caminho para desdobramentos com Notion e outras estruturas depois.",
  },
];
