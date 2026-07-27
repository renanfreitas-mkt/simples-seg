import { ArrowRight, Clock } from "lucide-react";
import { posts } from "@/lib/site";

export function Blog() {
  return (
    <section id="blog" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-widest text-primary">
          Conteúdo que vale a leitura
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl">
          Entenda consórcio e seguro antes de decidir
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-lg"
            >
              <div className="flex items-center gap-3 text-xs font-semibold">
                <span className="rounded-full bg-accent px-3 py-1 text-primary">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="size-3.5" /> {post.readTime}
                </span>
              </div>
              <h3 className="mt-5 flex-1 text-lg font-bold leading-snug">{post.title}</h3>
              <a
                href="#blog"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary transition-all hover:gap-3"
              >
                Ler artigo <ArrowRight className="size-4" />
              </a>
            </article>
          ))}
        </div>

        <a
          href="#blog"
          className="mt-10 inline-flex items-center justify-center rounded-xl border border-border px-6 py-3 text-sm font-bold text-foreground transition-colors hover:bg-secondary"
        >
          Ver todos os artigos
        </a>
      </div>
    </section>
  );
}