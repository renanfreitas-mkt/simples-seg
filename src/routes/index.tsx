import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Products } from "@/components/site/Products";
import { Steps } from "@/components/site/Steps";
import { Differentials } from "@/components/site/Differentials";
import { Testimonials } from "@/components/site/Testimonials";
import { SimulationCta } from "@/components/site/SimulationCta";
import { About } from "@/components/site/About";
import { Blog } from "@/components/site/Blog";
import { Faq } from "@/components/site/Faq";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { faqGroups } from "@/lib/site";

const title = "Simples Corretora — Consórcio e Seguros sem juros e sem burocracia";
const description =
  "Consórcio de imóvel, veículo, maquinário e seguros com atendimento humano. 17 anos, +2.000 clientes, simulação pelo WhatsApp em 5 minutos.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:site_name", content: "Simples Corretora" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      {
        name: "keywords",
        content:
          "consórcio de imóvel, consórcio de veículo, consórcio de maquinário, seguro de vida, seguro auto, corretora de seguros, simulação de consórcio",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqGroups.flatMap((group) =>
            group.items.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          ),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "InsuranceAgency",
          name: "Simples Corretora",
          description,
          url: "/",
          areaServed: "BR",
          priceRange: "$$",
          telephone: "+55 0800 050 5500",
          sameAs: ["https://wa.me/5508000505500"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Products />
        <Steps />
        <Differentials />
        <Testimonials />
        <SimulationCta />
        <About />
        <Blog />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
