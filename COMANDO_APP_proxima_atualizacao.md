# COMANDO CLAUDE CODE — ATUALIZAÇÕES DO APP
## calispinelab.vercel.app — próxima sessão

Estas mudanças são exclusivas do **app** (https://calispinelab.vercel.app).
Nada aqui diz respeito ao site CALI. O app não tem e não terá informações sobre imersões.

**Contexto geral:** O Spine Lab está em fase beta. A Fase 1 é aberta a todo mundo sem cadastro. O acesso completo (Fases 2–7) passa por uma conversa de 15 min com a Cami — não para selecionar quem entra, mas para garantir que a prática não seja intensa demais para o momento de cada pessoa.

---

## 1. TELA DE TRANSIÇÃO — FIM DA FASE 1

**O que fazer:**
Ao concluir a última aula da Fase 1, exibir uma tela de transição antes de mostrar o paywall.

**Texto da tela:**
> *"Você completou a Fase 1."*
> *"O Spine Lab está em fase beta. Para continuar, cada nova pessoa passa por uma conversa de 15 min com a Cami — não para ser selecionada, mas para que a prática faça sentido para o seu corpo, no seu momento."*

**Botão principal:** *"Quero continuar"* → redireciona para o formulário de lista de espera no site (`https://cali-site.vercel.app/app-spine-lab`)

**Botão secundário:** *"Rever a Fase 1"* → volta para a listagem das aulas da Fase 1

---

## 2. BOTÃO 🩸 — REGISTRAR MENSTRUAÇÃO

**O que fazer:**
Adicionar um botão permanente e acessível no app com ícone de gota de sangue (🩸).

**Comportamento:**
- Ao tocar, registra o dia atual como Dia 1 do novo ciclo menstrual
- O app reinicia automaticamente a contagem do ciclo a partir desse dia
- O conteúdo diário e as curiosidades do ciclo são recalibrados de acordo com a nova fase
- Salvar o registro no Supabase com data e hora do toque

**Posicionamento sugerido:** área de perfil ou tela de acompanhamento do ciclo — visível mas não intrusivo.

**UX:** confirmar com um pop-up simples antes de reiniciar — *"Registrar hoje como Dia 1 do seu ciclo?"* → botão "Sim" e "Cancelar".

---

## 3. CICLO ADAPTATIVO — REMOVER FIXAÇÃO EM 28 DIAS

**O que mudar:**
O app atualmente assume 28 dias como duração padrão do ciclo. Isso precisa ser flexível.

**Comportamento novo:**
- O ciclo lunar acompanha o calendário lunar real — não um número fixo de dias
- O ciclo menstrual se adapta ao ritmo real de cada usuária (pode ser 24, 28, 32, 35 dias — qualquer duração é válida)
- A contagem não "quebra" nem exibe erro se o ciclo for mais curto ou mais longo que 28 dias

**Implementar:**
- Campo editável nas configurações de perfil: *"Duração média do meu ciclo: ___ dias"*
- O app usa esse número como referência, mas o botão 🩸 sempre prevalece como marco real
- Se a usuária não preencher, o app usa 28 dias como default silencioso — sem avisos ou alertas

---

## 4. ZONA SPINE LAB — REFERÊNCIA NO APP

**O que fazer:**
Adicionar menção à **Zona Spine Lab** no app — o grupo permanente de acompanhamento.

**Onde:**
- Tela de boas-vindas pós-login (onboarding) — uma linha: *"Você faz parte da Zona Spine Lab."*
- Seção de perfil — exibir o status de membro

**O que NÃO fazer:** não criar uma seção de comunidade dentro do app. A Zona Spine Lab é externa (grupo de WhatsApp ou similar). O app apenas referencia a pertença.

---

## 5. CONTEÚDO — PUBLICAR FASES 2 A 7 DO CICLO 1

**O que fazer:**
Via painel admin, publicar as Fases 2 a 7 do Ciclo 1 (Respiração e Nauli Kriya).

**Estrutura de cada fase:** 4 dias × 3 durações (5, 10 e 21 min) = 12 aulas por fase.

**Verificar antes de publicar:**
- Cada dia segue a sequência: Compreender (Dia 1) → Praticar (Dia 2) → Integrar (Dia 3) → Assimilar (Dia 4)
- Cada aula existe nas 3 durações com o mesmo conteúdo adaptado

---

## PRIORIDADE DE IMPLEMENTAÇÃO

| # | Item | Complexidade | Prioridade |
|---|---|---|---|
| 1 | Tela de transição fim da Fase 1 + CTA lista de espera | Baixa | 🔴 Alta |
| 2 | Botão 🩸 com reinício do ciclo | Média | 🔴 Alta |
| 3 | Ciclo adaptativo (remover fixação em 28 dias) | Média | 🔴 Alta |
| 4 | Referência à Zona Spine Lab no app | Baixa | 🟡 Média |
| 5 | Publicar Fases 2–7 no painel admin | Baixa (conteúdo) | 🟡 Média |

---

**Nota:** o acesso curado (lista de espera, entrevista, convites) é uma mudança do **site**, não do app. O app em si não muda o fluxo de login nessa atualização.

**O que fazer:**
Adicionar um botão permanente e acessível no app com ícone de gota de sangue (🩸).

**Comportamento:**
- Ao tocar, registra o dia atual como Dia 1 do novo ciclo menstrual
- O app reinicia automaticamente a contagem do ciclo a partir desse dia
- O conteúdo diário e as curiosidades do ciclo são recalibrados de acordo com a nova fase
- Salvar o registro no Supabase com data e hora do toque

**Posicionamento sugerido:** área de perfil ou tela de acompanhamento do ciclo — visível mas não intrusivo.

**UX:** confirmar com um pop-up simples antes de reiniciar — *"Registrar hoje como Dia 1 do seu ciclo?"* → botão "Sim" e "Cancelar".

---

## 2. CICLO ADAPTATIVO — REMOVER FIXAÇÃO EM 28 DIAS

**O que mudar:**
O app atualmente assume 28 dias como duração padrão do ciclo. Isso precisa ser flexível.

**Comportamento novo:**
- O ciclo lunar acompanha o calendário lunar real — não um número fixo de dias
- O ciclo menstrual se adapta ao ritmo real de cada usuária (pode ser 24, 28, 32, 35 dias — qualquer duração é válida)
- A contagem não "quebra" nem exibe erro se o ciclo for mais curto ou mais longo que 28 dias

**Implementar:**
- Campo editável nas configurações de perfil: *"Duração média do meu ciclo: ___ dias"*
- O app usa esse número como referência, mas o botão 🩸 sempre prevalece como marco real
- Se a usuária não preencher, o app usa 28 dias como default silencioso — sem avisos ou alertas

---

## 3. ZONA SPINE LAB — REFERÊNCIA NO APP

**O que fazer:**
Adicionar menção à **Zona Spine Lab** no app — o grupo permanente de acompanhamento.

**Onde:**
- Tela de boas-vindas pós-login (onboarding) — uma linha: *"Você faz parte da Zona Spine Lab."*
- Seção de perfil — exibir o status de membro

**O que NÃO fazer:** não criar uma seção de comunidade dentro do app. A Zona Spine Lab é externa (grupo de WhatsApp ou similar). O app apenas referencia a pertença.

---

## 4. CONTEÚDO — PUBLICAR FASES 2 A 7 DO CICLO 1

**O que fazer:**
Via painel admin, publicar as Fases 2 a 7 do Ciclo 1 (Respiração e Nauli Kriya).

**Estrutura de cada fase:** 4 dias × 3 durações (5, 10 e 21 min) = 12 aulas por fase.

**Verificar antes de publicar:**
- Cada dia segue a sequência: Compreender (Dia 1) → Praticar (Dia 2) → Integrar (Dia 3) → Assimilar (Dia 4)
- Cada aula existe nas 3 durações com o mesmo conteúdo adaptado

---

## PRIORIDADE DE IMPLEMENTAÇÃO

| # | Item | Complexidade | Prioridade |
|---|---|---|---|
| 1 | Botão 🩸 com reinício do ciclo | Média | 🔴 Alta |
| 2 | Ciclo adaptativo (remover fixação em 28 dias) | Média | 🔴 Alta |
| 3 | Referência à Zona Spine Lab no app | Baixa | 🟡 Média |
| 4 | Publicar Fases 2–7 no painel admin | Baixa (conteúdo) | 🟡 Média |

---

**Nota:** o acesso curado (lista de espera, entrevista, convites) é uma mudança do **site**, não do app. O app em si não muda o fluxo de login nessa atualização.
