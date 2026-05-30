# COMANDO PARA CLAUDE CODE — calispinelab.vercel.app

**Contexto:** Este site é o ponto de entrada digital da **CALI**, laboratório de ativismo corporal fundado por Camila Lucena. O produto principal é o **Spine Lab** — plataforma de respiração consciente e movimento. A marca tem identidade visual forte: espiral, gradientes vibrantes (laranja, magenta, lilás, grafite), tipografia TAN. O tom é vibrante, inclusivo, político e acolhedor. Tudo que for implementado precisa estar alinhado a isso.

---

## 1. SISTEMA DE ACESSO — FLUXO COMPLETO

**Contexto:** O Spine Lab tem dois níveis de acesso. A Fase 1 do Ciclo 1 é aberta a todo mundo — sem cadastro, sem pagamento, sem barreira. É a prova real da jornada. Após concluir a Fase 1, a pessoa já experienciou a transformação e entende o valor. Só então entra no fluxo de acesso à Zona Spine Lab.

**Implementar:**

**Landing page de entrada**
- Título: *"Spine Lab é uma comunidade que cuida"*
- Subtítulo: *"Todos os membros passam por uma conversa rápida de 15 min com a Camila para entendermos seus objetivos e garantirmos que você terá a melhor experiência."*
- Destaque principal: **"Comece agora — Fase 1 gratuita, sem cadastro"** → botão que abre direto no app
- Destaque secundário: *"10 conversas por semana para acesso completo — próxima liberação: segunda-feira"*
- Botão secundário: **"Entrar na lista de espera"** → abre formulário

**Fluxo após Fase 1 gratuita**
- Ao concluir a última aula da Fase 1, exibir no app: *"Você completou a Fase 1. A jornada continua — e começa com uma conversa."*
- Botão: **"Quero continuar"** → redireciona para o formulário de lista de espera no site

**Formulário de inscrição**
- Campos: Nome, Email, WhatsApp, "Como você conheceu a Spine Lab?"
- Mensagem pós-envio: *"Você está na lista! Entraremos em contato pelo WhatsApp para agendar sua conversa. Enquanto isso, pense: o que no seu corpo está pedindo atenção agora?"*

**Integração WhatsApp**
- Botão de agendamento com mensagem pré-preenchida: *"Olá! Completei a Fase 1 da Spine Lab e gostaria de agendar minha conversa de 15 min. Meu nome é [NOME]."*
- Após entrevista: aprovação manual pela Camila + envio de link de pagamento + acesso às Fases 2–7

**Contador de escassez**
- Exibir na landing: *"X conversas disponíveis esta semana"* ou *"Lista de espera: X pessoas aguardando"*
- Atualização manual pela Camila via painel admin

**Sistema de convite (invite-only)**
- Cada membro aprovado recebe **2 convites exclusivos**
- Convidados pulam a fila e vão direto para a entrevista — mas ainda precisam completar a Fase 1 antes
- Copy do convite: *"Você recebeu um convite exclusivo para a Spine Lab. Isso significa que alguém que te conhece acredita que essa prática é para você. O convite garante sua vaga na conversa de 15 min — sem espera."*

**Capacidade máxima**
- Limite de membros ativos a definir (ex: 500)
- Quando alguém sai, a próxima pessoa da lista é notificada

**Recompensa para quem espera**
Envio automático após inscrição na lista:
- Ebook "Fundamentos da Respiração Consciente"
- Aula gravada exclusiva
- Acesso antecipado ao conteúdo do Instagram da CALI

---

## 2. CUPOM DE ACESSO — COMUNIDADE LGBTQIA+ E MINORIAS

**Modelo:** declaração de honra — sem verificação, sem burocracia.

**Posicionamento:** banner discreto na seção de preços ou footer.

**Copy:**
> *"Este cupom existe porque cuidado corporal é um ato político. Se você faz parte da comunidade LGBTQIA+ ou de outra minoria, use-o."*

**Código:** `COMUNIDADE` — desconto de 20% aplicado automaticamente no checkout.

---

## 3. CONTATOS — WHATSAPP E INSTAGRAM

**WhatsApp**
- Botão flutuante sticky no canto inferior direito em todas as páginas
- Link: `https://wa.me/[NUMERO]` com mensagem pré-preenchida
- Também presente no header e footer

**Instagram**
- Ícone no header e footer
- Link: `https://instagram.com/calispinelab` (confirmar @ correto com Camila)

---

## 4. RENOMEAR "WORKSHOP" → "IMERSÃO"

Substituir **todas** as ocorrências de "workshop" por "imersão" em:
- Textos do site
- Títulos de seções
- URLs (criar redirecionamentos se necessário)
- Meta tags e SEO
- Botões e CTAs

**Texto a inserir na seção da imersão:**
> *"Ao final da imersão você recebe o material impresso para seguir fazendo a prática mesmo longe — e pode entrar no grupo de acompanhamento permanente."*

---

## 5. AGENDAMENTO — 1ª AULA ONLINE

Inserir seção ou botão: **"Marque sua 1ª aula online"**

- Valor: R$ 39,50 (Brasil) / € 39,50 (Europa)
- Detectar localização do usuário para exibir moeda correta
- Fluxo: clicar → formulário de agendamento → pagamento → confirmação automática

---

## 6. CHECKOUT — MERCADO PAGO

- Implementar Checkout Pro do Mercado Pago
- Campo de cupom de desconto com recalculo automático do valor
- Cupom `COMUNIDADE` já configurado (20% de desconto)
- Pergunta ao dev: qual a melhor forma de integrar considerando a stack atual (Vercel)?

---

## 7. BOTÃO PARA O APP

- Mini splash/banner pequeno acima do botão de WhatsApp
- Texto: *"Acesse o Spine Lab"*
- Link: direcionar para o PWA ou página de instalação (https://calispinelab.vercel.app)

---

## 8. SEÇÃO/PÁGINA — IMERSÃO PRESENCIAL

Criar página dedicada com:
- O que é a imersão e como funciona
- Próximas datas e locais
- Valores
- Botão de inscrição → leva ao fluxo de entrevista (item 1)

---

## 9. BLOG

- Inserir post mais recente com legenda descritiva
- Estrutura para publicação dos próximos posts

---

## 10. FEED DO INSTAGRAM

- Seção com grid dos últimos 6–9 posts
- Conectar via Instagram Graph API para atualização automática

---

## PRIORIDADE DE IMPLEMENTAÇÃO

| # | Item | Status |
|---|---|---|
| 1 | Sistema de acesso (entrevista + escassez + convite) | 🔴 Urgente |
| 2 | Cupom LGBTQIA+ e minorias | 🔴 Urgente |
| 3 | Contatos WhatsApp e Instagram | 🔴 Urgente |
| 4 | Renomear workshop → imersão | 🔴 Urgente |
| 5 | Checkout Mercado Pago + cupom geral | 🟡 Em andamento |
| 6 | Aula online avulsa (agendamento + pagamento) | 🟡 Próximo |
| 7 | Botão para o app | 🟢 Simples |
| 8 | Imersão presencial (página dedicada) | 🟢 Próximo |
| 9 | Blog | 🟢 Próximo |
| 10 | Feed Instagram | 🟢 Pendente |

---

**Nota:** A comunidade interna se chama **Zona Spine Lab**.
