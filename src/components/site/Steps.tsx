import { steps } from "@/lib/site";

export function Steps() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-widest text-primary">
          Simples, rápido e sem pegadinhas
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl">
          Do primeiro contato ao seu bem em mãos — 4 passos
        </h2>

        <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.number} className="border-t-2 border-primary/25 pt-6">
              <span className="text-4xl font-extrabold text-primary/25">{step.number}</span>
              <h3 className="mt-3 text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}