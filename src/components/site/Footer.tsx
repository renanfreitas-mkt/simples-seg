import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { navLinks } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-petrol-deep py-14 text-petrol-foreground/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            Consórcio e seguros com atendimento humano, desde 2009. Sede em Linhares — ES,
            atendimento em todo o Brasil.
          </p>
        </div>

        <nav>
          <h2 className="text-sm font-bold text-petrol-foreground">Navegação</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-petrol-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold text-petrol-foreground">Contato</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-teal-soft" /> 0800 050 5500
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 text-teal-soft" /> contato@simplescorretora.com.br
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-teal-soft" /> Linhares — ES
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-petrol-foreground/10 px-5 pt-6 text-xs lg:px-8">
        <p>
          Simples Corretora de Seguros e Consórcio. Trabalhamos com administradoras autorizadas pelo
          Banco Central (BACEN) e seguradoras registradas na SUSEP.
        </p>
        <p className="mt-2">
          © {new Date().getFullYear()} Simples Corretora. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}