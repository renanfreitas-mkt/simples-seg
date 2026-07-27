import { BadgeCheck, Clock, Heart, Route } from "lucide-react";
import { differentials } from "@/lib/site";

const icons = { heart: Heart, clock: Clock, badge: BadgeCheck, route: Route };

export function Differentials() {
  return (
    <section className="bg-hero-petrol py-24 text-petrol-foreground">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-teal-soft">
            Por que escolher a Simples
          </p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
            Não somos o maior. Somos o mais cuidadoso.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-petrol-foreground/70">
            Enquanto os grandes bancos automatizam e os especialistas vendem volume, a Simples
            entrega algo que nenhum deles consegue: um especialista que conhece o seu nome e o seu
            objetivo.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {differentials.map((item) => {
            const Icon = icons[item.icon];
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-petrol-foreground/12 bg-petrol-foreground/[0.05] p-6"
              >
                <Icon className="size-6 text-teal-soft" />
                <h3 className="mt-4 text-base font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-petrol-foreground/70">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}