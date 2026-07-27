import { useState } from "react";
import { CalendarDays, MessageCircle, Star, Users } from "lucide-react";
import { waLink } from "@/lib/site";

const bens = ["Imóvel", "Veículo", "Maquinário", "Caminhão", "Outro"];

export function Hero() {
  const [bem, setBem] = useState("");
  const [valor, setValor] = useState("");

  const message = `Olá! Quero simular um consórcio${bem ? ` de ${bem.toLowerCase()}` : ""}${
    valor ? ` no valor de R$ ${valor}` : ""
  }. Pode me ajudar?`;

  return (
    <section id="topo" className="relative overflow-hidden bg-hero-petrol pt-32 pb-40 lg:pt-44">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div>
          <p className="text-sm font-bold text-teal-soft">
            17 anos realizando sonhos no ES e em todo o Brasil
          </p>
          <h1 className="mt-5 max-w-2xl text-4xl font-extrabold leading-[1.05] text-petrol-foreground sm:text-5xl lg:text-6xl">
            Conquiste seu imóvel ou proteja o que é seu: sem juros e sem burocracia.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-petrol-foreground/75">
            A Simples Corretora une a expertise de quem conhece o mercado com o atendimento de quem
            conhece você. Consórcio e seguro do jeito certo.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink("Olá! Quero simular um consórcio/seguro. Pode me ajudar?")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal px-7 py-4 text-base font-bold text-petrol-deep transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="size-5" /> Simular agora pelo WhatsApp
            </a>
            <a
              href="#produtos"
              className="inline-flex items-center justify-center rounded-xl border border-petrol-foreground/25 px-7 py-4 text-base font-bold text-petrol-foreground transition-colors hover:bg-petrol-foreground/10"
            >
              Conhecer os planos
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-petrol-foreground/70">
            <li className="flex items-center gap-2">
              <Users className="size-4 text-teal-soft" /> +2.000 clientes
            </li>
            <li className="flex items-center gap-2">
              <Star className="size-4 text-teal-soft" /> Nota 4.9 no Google
            </li>
            <li className="flex items-center gap-2">
              <CalendarDays className="size-4 text-teal-soft" /> 17 anos de mercado
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-petrol-foreground/12 bg-petrol-foreground/[0.06] p-6 backdrop-blur-sm sm:p-8">
          <h2 className="text-xl font-bold text-petrol-foreground">Sua simulação em 5 minutos</h2>
          <p className="mt-1.5 text-sm text-petrol-foreground/60">
            Sem compromisso. Retorno em menos de 5 minutos.
          </p>

          <label
            htmlFor="hero-bem"
            className="mt-7 block text-[11px] font-bold uppercase tracking-widest text-petrol-foreground/60"
          >
            Que bem você quer conquistar?
          </label>
          <select
            id="hero-bem"
            value={bem}
            onChange={(e) => setBem(e.target.value)}
            className="mt-2 h-12 w-full rounded-lg border border-petrol-foreground/15 bg-petrol-deep/50 px-3 text-sm text-petrol-foreground outline-none focus:border-teal"
          >
            <option value="">Selecione...</option>
            {bens.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>

          <label
            htmlFor="hero-valor"
            className="mt-5 block text-[11px] font-bold uppercase tracking-widest text-petrol-foreground/60"
          >
            Valor da carta desejada
          </label>
          <div className="mt-2 flex h-12 items-center gap-2 rounded-lg border border-petrol-foreground/15 bg-petrol-deep/50 px-3 focus-within:border-teal">
            <span className="text-sm text-petrol-foreground/50">R$</span>
            <input
              id="hero-valor"
              inputMode="numeric"
              placeholder="300.000"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              className="w-full bg-transparent text-sm text-petrol-foreground placeholder:text-petrol-foreground/40 outline-none"
            />
          </div>

          <a
            href={waLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-whatsapp px-5 py-3.5 text-sm font-bold text-whatsapp-foreground transition-transform hover:scale-[1.01]"
          >
            <MessageCircle className="size-4" /> Simular pelo WhatsApp
          </a>
        </div>
      </div>

      <svg
        aria-hidden="true"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-16 w-full text-background sm:h-24"
      >
        <path
          fill="currentColor"
          d="M0,64 C240,120 480,120 720,88 C960,56 1200,24 1440,56 L1440,120 L0,120 Z"
        />
      </svg>
    </section>
  );
}