import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqGroups, waLink } from "@/lib/site";

export function Faq() {
  return (
    <section className="bg-secondary/60 py-24">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-widest text-primary">
          Perguntas frequentes
        </p>
        <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
          Ficou com dúvida? A resposta provavelmente está aqui.
        </h2>
        <p className="mt-4 text-base text-muted-foreground">
          Se não encontrar o que precisa,{" "}
          <a
            href={waLink("Olá! Tenho uma dúvida sobre consórcio/seguro.")}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary underline underline-offset-4"
          >
            fale direto com a gente pelo WhatsApp
          </a>{" "}
          — respondemos em minutos.
        </p>

        {faqGroups.map((group) => (
          <div key={group.group} className="mt-12">
            <h3 className="text-lg font-bold">{group.group}</h3>
            <Accordion type="single" collapsible className="mt-4">
              {group.items.map((item) => (
                <AccordionItem key={item.q} value={item.q}>
                  <AccordionTrigger className="text-left text-base font-semibold">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </section>
  );
}