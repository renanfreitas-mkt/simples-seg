export const WHATSAPP_NUMBER = "5508000505500";

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { label: "Consórcio", href: "#produtos" },
  { label: "Seguros", href: "#produtos" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Blog", href: "#blog" },
];

export const products = [
  {
    title: "Consórcio de Imóvel",
    description:
      "Conquiste a casa própria, um terreno ou imóvel comercial sem juros e sem entrada obrigatória. Cartas de R$ 100 mil a R$ 1 milhão+.",
    bullets: [
      "Sem juros — só taxa de administração",
      "Use FGTS como lance ou amortização",
      "Parcelas que cabem no bolso",
    ],
    cta: "Simular consórcio imóvel",
    message: "Olá! Quero saber mais sobre o consórcio de imóvel da Simples.",
    icon: "home" as const,
  },
  {
    title: "Consórcio de Veículo",
    description:
      "Carro, moto ou utilitário — planeje a compra sem juros bancários e sem comprometer seu orçamento.",
    bullets: [
      "Parcelas até 50% menores que financiamento",
      "Cartas de R$ 30 mil a R$ 300 mil+",
      "Possibilidade de lance para contemplação rápida",
    ],
    cta: "Simular consórcio veículo",
    message: "Olá! Quero saber mais sobre o consórcio de veículo da Simples.",
    icon: "car" as const,
  },
  {
    title: "Seguros",
    description:
      "Vida, auto, residencial ou empresarial — comparamos as melhores seguradoras para você pagar menos e ter mais cobertura.",
    bullets: [
      "Cotação com as melhores seguradoras",
      "Acompanhamento na renovação",
      "Suporte completo em sinistros",
    ],
    cta: "Cotar seguro agora",
    message: "Olá! Quero cotar um seguro com a Simples.",
    icon: "shield" as const,
  },
  {
    title: "Consórcio para Empresas",
    description:
      "Agronegócio e transporte: maquinário, caminhões e implementos sem juros. Ideal para renovar ou expandir a frota.",
    bullets: [
      "Pessoa jurídica aceita",
      "Tratores, colheitadeiras, caminhões",
      "Planejamento sob medida para cada safra",
    ],
    cta: "Falar sobre consórcio PJ",
    message: "Olá! Quero saber mais sobre consórcio para empresas (agro/transporte).",
    icon: "truck" as const,
  },
];

export const steps = [
  {
    number: "01",
    title: "Simule",
    text: "Fale com a Simples pelo WhatsApp e receba uma simulação personalizada em minutos — sem compromisso.",
  },
  {
    number: "02",
    title: "Escolha",
    text: "Compare as opções com total transparência: valores, prazos, taxas e condições lado a lado. Sem letra miúda.",
  },
  {
    number: "03",
    title: "Contrate",
    text: "Documentação simplificada. A Simples cuida de toda a burocracia para você — 100% digital.",
  },
  {
    number: "04",
    title: "Realize",
    text: "Seja por sorteio ou lance, a Simples te acompanha até a contemplação — e depois dela também.",
  },
];

export const differentials = [
  {
    title: "Atendimento humano de verdade",
    text: "Nada de chatbot ou fila de espera. Aqui você fala com quem entende e se importa.",
    icon: "heart" as const,
  },
  {
    title: "Resposta em minutos",
    text: "Simulação personalizada pelo WhatsApp em até 5 minutos nos dias úteis.",
    icon: "clock" as const,
  },
  {
    title: "100% regulamentada",
    text: "Autorizada pelo Banco Central (BACEN) e SUSEP. Sua segurança é documentada.",
    icon: "badge" as const,
  },
  {
    title: "Do início à contemplação",
    text: "Acompanhamos você em cada assembleia, cada lance, cada etapa. Até o fim e depois dele.",
    icon: "route" as const,
  },
];

export const testimonials = [
  {
    quote:
      "Sempre achei que casa própria era impossível sem financiamento. A Simples me mostrou o consórcio de um jeito que fez sentido. Em 14 meses fui contemplada por lance e hoje estou na minha casa. Sem juros, sem sufoco.",
    initials: "MS",
    name: "Mariana S.",
    product: "Consórcio de Imóvel",
  },
  {
    quote:
      "Troquei de seguradora com a ajuda da Simples e economizei mais de R$ 1.200 na renovação. O melhor: quando precisei acionar o seguro, eles resolveram tudo pra mim. Atendimento impecável.",
    initials: "RM",
    name: "Ricardo M.",
    product: "Seguro Auto",
  },
  {
    quote:
      "Como produtor rural, preciso renovar maquinário todo ano. O consórcio pela Simples me permitiu planejar sem juros e sem comprometer o caixa. A equipe entende do campo e dos prazos de safra.",
    initials: "CA",
    name: "Carlos A.",
    product: "Consórcio Agro",
  },
];

export const posts = [
  {
    category: "Consórcio",
    readTime: "6 min",
    title: "Consórcio ou financiamento: qual é melhor para você em 2026?",
  },
  {
    category: "Estratégia",
    readTime: "5 min",
    title: "Como funciona a contemplação por lance — e quando vale a pena",
  },
  {
    category: "Seguros",
    readTime: "7 min",
    title: "Seguro de vida: o que cobre e como escolher sem pagar a mais",
  },
];

export const faqGroups = [
  {
    group: "Consórcio (Geral)",
    items: [
      {
        q: "O que é consórcio e como ele funciona?",
        a: "Consórcio é uma compra planejada em grupo. Todos os participantes pagam parcelas mensais que formam um fundo comum, e todo mês um ou mais integrantes são contemplados por sorteio ou lance, recebendo uma carta de crédito para comprar o bem.",
      },
      {
        q: "Qual a diferença entre consórcio e financiamento?",
        a: "No financiamento você paga juros ao banco desde o primeiro dia. No consórcio não há juros — apenas a taxa de administração — por isso as parcelas costumam ser bem menores. Em troca, você não recebe o bem imediatamente: precisa ser contemplado.",
      },
      {
        q: "Como sou contemplado?",
        a: "De duas formas: por sorteio, realizado nas assembleias mensais, ou por lance, quando você antecipa uma parte do crédito para tentar a contemplação mais cedo.",
      },
      {
        q: "Consórcio tem riscos?",
        a: "As administradoras são fiscalizadas pelo Banco Central, o que traz muita segurança. O principal ponto de atenção é o prazo de contemplação — por isso montamos um planejamento realista com você antes de contratar.",
      },
      {
        q: "Posso usar o FGTS no consórcio?",
        a: "Sim, no consórcio de imóvel. O FGTS pode ser usado para ofertar lance, complementar o valor da carta ou amortizar parcelas, respeitando as regras da Caixa.",
      },
      {
        q: "Posso cancelar o consórcio?",
        a: "Pode. O valor pago ao fundo comum é devolvido conforme as regras do contrato e do grupo. Explicamos todas as condições antes da assinatura, sem letra miúda.",
      },
    ],
  },
  {
    group: "Consórcio para Empresas",
    items: [
      {
        q: "Posso fazer consórcio no nome da minha empresa (PJ)?",
        a: "Sim. Trabalhamos com cotas em nome de pessoa jurídica para imóveis, veículos, caminhões e maquinário, com planejamento adequado ao fluxo de caixa da empresa.",
      },
      {
        q: "Consórcio de maquinário agrícola funciona para qualquer equipamento?",
        a: "Atende tratores, colheitadeiras, implementos, pulverizadores e equipamentos em geral, novos ou seminovos, conforme a política da administradora.",
      },
    ],
  },
  {
    group: "Seguros",
    items: [
      {
        q: "Como funciona a cotação de seguro com a Simples?",
        a: "Você nos envia os dados do bem pelo WhatsApp e comparamos as principais seguradoras. Você recebe as opções lado a lado, com coberturas e preços explicados.",
      },
      {
        q: "A Simples atende em qual seguradora?",
        a: "Somos corretora independente e trabalhamos com diversas seguradoras do mercado. Indicamos a que melhor combina preço e cobertura para o seu perfil.",
      },
      {
        q: "O que é franquia no seguro auto?",
        a: "É o valor que fica sob sua responsabilidade quando você aciona o seguro em caso de perda parcial. Quanto maior a franquia, menor tende a ser o prêmio do seguro.",
      },
      {
        q: "Como funciona a renovação do seguro?",
        a: "Avisamos você com antecedência, refazemos a cotação no mercado e mostramos se vale renovar com a mesma seguradora ou trocar.",
      },
    ],
  },
  {
    group: "Atendimento",
    items: [
      {
        q: "A Simples atende fora do Espírito Santo?",
        a: "Sim. Nossa sede fica em Linhares — ES, mas atendemos clientes em todo o Brasil de forma 100% digital.",
      },
      {
        q: "Quanto tempo leva para receber uma simulação?",
        a: "Em geral menos de 5 minutos nos dias úteis, direto no seu WhatsApp.",
      },
      {
        q: "A Simples é regulamentada?",
        a: "Sim. Operamos com administradoras autorizadas pelo Banco Central (BACEN) e seguradoras registradas na SUSEP.",
      },
    ],
  },
];