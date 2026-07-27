import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { navLinks, waLink } from "@/lib/site";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-petrol-deep/95 backdrop-blur border-b border-petrol-foreground/10" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-8">
        <a href="#topo" className="shrink-0">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-petrol-foreground/85 transition-colors hover:text-petrol-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={waLink("Olá! Quero simular um consórcio/seguro. Pode me ajudar?")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg bg-teal px-5 py-2.5 text-sm font-bold text-petrol-deep transition-transform hover:scale-[1.02] sm:inline-flex"
          >
            Simular agora
          </a>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-lg text-petrol-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-petrol-foreground/10 bg-petrol-deep px-5 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-petrol-foreground/10 py-3 text-base font-semibold text-petrol-foreground/90"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={waLink("Olá! Quero simular um consórcio/seguro. Pode me ajudar?")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-whatsapp px-5 py-3 text-sm font-bold text-whatsapp-foreground"
          >
            <MessageCircle className="size-4" /> Simular pelo WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}