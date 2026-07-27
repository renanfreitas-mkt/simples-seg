import { useState } from "react";
import { MapPin, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";

const options = ["Imóvel", "Veículo", "Maquinário", "Caminhão", "Seguro"];

export function SimulationCta() {
  const [choice, setChoice] = useState("Imóvel");

  return (
    <section className="bg-background py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-primary">
            Simulação gratuita e sem compromisso
          </p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
            Descubra quanto fica a parcela do seu sonho
          </h2>
          <p className="mt-4 max-w-xl text-base text-muted-foreground">
            Em menos de 5 minutos você recebe uma simulação personalizada diretamente no seu
            WhatsApp. Sem enrolar, sem letra miúda.
          </p>

          <fieldset className="mt-8">
            <legend className="text-sm font-bold">O que você quer?</legend>
            <div className="mt-4 flex flex-wrap gap-2">
              {options.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setChoice(option)}
                  className={`rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${
                    choice === option
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-foreground hover:border-primary/40"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </fieldset>

          <a
            href={waLink(
              `Olá! Quero receber uma simulação de ${choice.toLowerCase()} com a Simples.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-7 py-4 text-base font-bold text-whatsapp-foreground transition-transform hover:scale-[1.02]"
          >
            <MessageCircle className="size-5" /> Receber simulação
          </a>
          <p className="mt-3 text-xs text-muted-foreground">
            Sem spam. Retorno em menos de 5 minutos nos dias úteis.
          </p>
        </div>

        <div className="rounded-2xl bg-hero-petrol p-9 text-petrol-foreground">
          <MapPin className="size-6 text-teal-soft" />
          <p className="mt-4 text-2xl font-extrabold">Linhares — ES</p>
          <p className="mt-1 text-sm text-petrol-foreground/65">Sede da Simples Corretora</p>
          <div className="mt-8 grid grid-cols-2 gap-6 border-t border-petrol-foreground/15 pt-8">
            <div>
              <p className="text-2xl font-extrabold text-teal-soft">+2.000</p>
              <p className="mt-1 text-xs text-petrol-foreground/65">Clientes</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-teal-soft">17 anos</p>
              <p className="mt-1 text-xs text-petrol-foreground/65">De mercado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}