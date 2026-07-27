import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="bg-hero-petrol py-24 text-petrol-foreground">
      <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
        <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
          Seu próximo passo começa com uma conversa.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-petrol-foreground/75">
          Sem formulários longos, sem espera, sem enrolação. Fala com a Simples e descobre o melhor
          caminho para conquistar o que você quer.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={waLink("Olá! Quero saber mais sobre consórcio e seguros.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-7 py-4 text-base font-bold text-whatsapp-foreground transition-transform hover:scale-[1.02]"
          >
            <MessageCircle className="size-5" /> Falar com a Simples agora
          </a>
          <a
            href="#produtos"
            className="inline-flex items-center justify-center rounded-xl border border-petrol-foreground/25 px-7 py-4 text-base font-bold text-petrol-foreground transition-colors hover:bg-petrol-foreground/10"
          >
            Ver nossos planos
          </a>
        </div>
      </div>
    </section>
  );
}