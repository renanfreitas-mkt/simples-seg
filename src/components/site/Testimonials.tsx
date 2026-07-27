import { Quote } from "lucide-react";
import { testimonials } from "@/lib/site";

export function Testimonials() {
  return (
    <section className="bg-secondary/60 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-widest text-primary">
          O que nossos clientes dizem
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl">
          Cada consórcio é uma história. Essas são algumas delas.
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-8"
            >
              <Quote className="size-7 text-primary/30" />
              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-foreground/85">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3 border-t border-border pt-6">
                <span className="inline-flex size-11 items-center justify-center rounded-full bg-accent text-sm font-bold text-primary">
                  {item.initials}
                </span>
                <span>
                  <span className="block text-sm font-bold">{item.name}</span>
                  <span className="block text-xs text-muted-foreground">{item.product}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}