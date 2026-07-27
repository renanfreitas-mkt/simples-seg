import { ArrowRight } from "lucide-react";

export function About() {
  return (
    <section id="sobre" className="bg-secondary/60 py-24">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-widest text-primary">Quem somos</p>
        <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          17 anos simplificando o que parecia complicado
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          A Simples nasceu em Linhares, no Espírito Santo, com uma missão clara: fazer com que
          qualquer brasileiro pudesse conquistar um imóvel, um veículo ou a proteção da família —
          sem medo, sem burocracia e sem ter que decifrar contratos sozinho.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Em 17 anos, ajudamos mais de 2.000 clientes a realizar sonhos que pareciam distantes. Hoje
          atendemos do ES para o Brasil inteiro, mas carregamos o mesmo jeito de Linhares: olho no
          olho, palavra firme e transparência total.
        </p>
        <a
          href="#produtos"
          className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary transition-all hover:gap-3"
        >
          Conhecer a nossa história <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  );
}