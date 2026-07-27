import { Car, Check, Home, Shield, Truck, ArrowRight } from "lucide-react";
import { products, waLink } from "@/lib/site";

const icons = { home: Home, car: Car, shield: Shield, truck: Truck };

export function Products() {
  return (
    <section id="produtos" className="bg-secondary/60 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-widest text-primary">
          O que a Simples oferece
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl">
          Consórcio ou seguro — do jeito que faz sentido pra você
        </h2>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground">
          Cada produto foi pensado para um momento da sua vida. Sem jargão, sem letra miúda — só
          clareza e resultado.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {products.map((product) => {
            const Icon = icons[product.icon];
            return (
              <article
                key={product.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-lg"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-accent text-primary">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-6 text-xl font-bold">{product.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {product.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink(product.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all"
                >
                  {product.cta} <ArrowRight className="size-4" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}