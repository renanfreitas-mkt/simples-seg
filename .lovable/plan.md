## Objetivo

Replicar o site da Simples Corretora (consórcio e seguros) como uma landing page única em português, fiel ao layout, conteúdo e identidade visual do original.

## Identidade visual

- Paleta: verde-petróleo escuro (fundo do hero), teal como cor primária, verde WhatsApp para CTAs de conversão, branco/cinza claro nas seções internas.
- Tipografia sem serifa, títulos muito grandes e pesados (estilo do hero "Conquiste seu imóvel...").
- Divisor em onda entre o hero escuro e o conteúdo claro.
- Todos os tokens (cores, gradientes, sombras) definidos em `src/styles.css` em oklch.

## Estrutura da página (rota `/`)

1. **Header fixo** — logo "SIMPLES · Corretora de Seguros e Consórcio", menu (Consórcio, Seguros, Sobre Nós, Blog) e botão "Simular agora". Menu mobile.
2. **Hero** — selo "17 anos realizando sonhos no ES e em todo o Brasil", título, subtítulo, dois CTAs, provas sociais (+2.000 clientes, Nota 4.9, 17 anos) e card de simulação à direita (tipo de bem + valor da carta → abre WhatsApp com mensagem pré-preenchida).
3. **Faixa de números** — +2.000 clientes, 4.9 no Google, 17 anos, 100% digital, parceiras (contagem animada ao entrar na viewport).
4. **Produtos** — 4 cards: Consórcio de Imóvel, de Veículo, Seguros, Consórcio para Empresas, cada um com 3 bullets e CTA de WhatsApp específico.
5. **Como funciona** — 4 passos numerados (Simule, Escolha, Contrate, Realize).
6. **Diferenciais** — "Não somos o maior. Somos o mais cuidadoso." com 4 itens.
7. **Depoimentos** — carrossel/cards com iniciais, nome e produto (Mariana S., Ricardo M., Carlos A.).
8. **CTA de simulação** — bloco com seleção de produto e envio para WhatsApp; ao lado, destaque "Linhares — ES" com números.
9. **Sobre** — "17 anos simplificando o que parecia complicado" + link para história.
10. **Blog** — 3 cards de artigo com categoria e tempo de leitura + "Ver todos os artigos".
11. **FAQ** — accordion agrupado em Consórcio (Geral), Consórcio para Empresas, Seguros e Atendimento, com as perguntas do original e respostas equivalentes.
12. **CTA final + rodapé** — "Seu próximo passo começa com uma conversa.", dados de contato, aviso de regulamentação BACEN/SUSEP.
13. **Botão flutuante de WhatsApp**.

## Detalhes técnicos

- Página única em `src/routes/index.tsx` (substitui o placeholder), com seções `#produtos`, `#sobre`, `#blog` para os âncoras do menu, cada seção em um componente próprio em `src/components/`.
- Formulários são apenas frontend: montam a URL `wa.me` com a mensagem pré-preenchida (mesmo comportamento do original). Sem backend.
- Contadores animados via IntersectionObserver; accordion e menu mobile com componentes shadcn.
- Ilustrações/fotos de apoio geradas como imagens em `src/assets` quando necessário.
- SEO: `head()` na rota `/` com title, description, og:title, og:description, og:type e twitter:card; HTML semântico com um único H1 e alt em imagens.

## Fora do escopo

- Páginas internas de blog, área de cliente, banco de dados ou envio de leads por e-mail. Posso adicionar depois se quiser.
