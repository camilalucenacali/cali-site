# CLAUDE.md — cali-site

Site institucional e de vendas da marca **CALI MOVIMIENTO** (Camila Lucena).
Stack: Astro 4 · CSS puro · JS vanilla · Vercel CI/CD

**Produção:** https://cali-site.vercel.app
**Repo:** https://github.com/camilalucenacali/cali-site
**Arquivos locais:** `C:\Users\camil\Documents\CALI_MOVIMENTO\cali-site\`

---

## Ritual de início de sessão

1. Ler `ESTADO_DA_ARTE.md` → entender o estado atual completo do site
2. Se houver pedidos múltiplos, dividir em grupos antes de codificar
3. Apresentar os grupos à Cami e aguardar confirmação antes de começar

---

## Protocolo de execução — Grupos de tarefas

Cada grupo deve tocar arquivos relacionados e ser verificável de forma independente.

### Por grupo, nesta ordem:
1. Implementar
2. `npm run build` — zero erros antes de avançar
3. Marcar o grupo como concluído
4. Se for o último grupo da sessão: atualizar `ESTADO_DA_ARTE.md`

### Ao final da sessão:
1. Atualizar `ESTADO_DA_ARTE.md` com tudo que mudou
2. Atualizar memory `project_cali_site.md` se houver decisão relevante
3. Commit descritivo + push → deploy automático no Vercel

### Política de commit
- **Não commitar automaticamente** — sempre perguntar à Cami antes
- Um commit por grupo concluído (ou por sessão se forem mudanças pequenas)
- CI/CD ativo: todo push em `main` → build + deploy em produção

---

## Arquivos de referência

| Arquivo | Uso |
|---------|-----|
| `ESTADO_DA_ARTE.md` | Fonte de verdade do estado do site — ler no início, atualizar no fim |
| `CALI_SITE_SPEC.md` | Spec original de produto — consultar para dúvidas de posicionamento |

---

## Stack e regras críticas

- **Dados das imersões:** `src/data/workshops.js` — única fonte de verdade
- **Fontes:** Poiret One · Instrument Serif · Hanken Grotesk (Google Fonts no BaseLayout)
- **CSS:** global em `src/styles/global.css` · blog em `src/styles/blog.css`
- **Componentes:** Header, Footer, WhatsAppButton (aceita prop `text`), PaymentModal
- **Scroll interno na home:** usar `#id` (ex: `/#imersoes`, `/#pratica`) — não criar páginas separadas para seções
- **Deploy:** push em `main` → Vercel build automático (~2 min)

## Navegação atual
- `/` — Home (hero, manifesto, imersões, sobre, aula online, Spine Lab, CTA, blog)
- `/app-spine-lab` — APP Spine Lab (mandala, jornada, lista de espera)
- `/blog` — listagem de posts
- `/blog/[slug]` — post individual
- `/imprensa` — fora do nav, URL acessível
- `/workshops` — redirect 301 → `/#imersoes`

## Pendências em aberto
- [ ] Link real do Calendly (`index.astro` id="btnAgendar")
- [ ] Link real do Mercado Pago (`PaymentModal.astro`)
- [ ] Foto de Camila no hero e seção Sobre (`index.astro`)
- [ ] Data exata da imersão Floripa (14–17 jun — a definir)
- [ ] Domínio próprio (substituir cali-site.vercel.app)

---

## Tom e identidade

- Pronome: **tu/teu/tua** — nunca você/seu/sua
- Marca: CALI MOVIMIENTO · produto: Spine Lab
- Imersões (nunca "workshops")
