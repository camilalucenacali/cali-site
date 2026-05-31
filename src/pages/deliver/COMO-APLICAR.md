# Entrega — `/app-spine-lab` igual ao HTML (sem planos)

Esta pasta tem **exatamente os 2 arquivos** que precisam ir pro repositório `cali-site`,
já na estrutura de pastas certa:

```
deliver/
├─ src/pages/app-spine-lab.astro      ← substitui o arquivo atual
└─ public/assets/spine-mandala.png    ← imagem NOVA da mandala (adicionar)
```

## O que mudou
A página foi reescrita pra ficar **idêntica ao HTML de referência**:
- Mandala em **imagem** (prisma glossy) com halo, no lugar da mandala de linha animada
- Tipografia **Cormorant Garamond** (carregada só nesta página, via `slot="head"`)
- Fundo bone quente com **lavagens prisma** suaves
- Cor de acento **coral** (`#E8714E`)
- **Sem seção de planos** (mantido o beta)
- Mantém o `Header`, `Footer` e `WhatsAppButton` do site (nada duplicado)
- Formulário continua abrindo o **WhatsApp da Cami** com mensagem pré-preenchida

Todo o CSS é **escopado em `.sl-page`** + escopo automático do Astro, então **não afeta**
nenhuma outra página do site.

## Como aplicar (caminho fácil — Claude Code)
Abra o Claude Code na pasta `CALI_MOVIMENTO` e mande:

> "Substitua `src/pages/app-spine-lab.astro` pelo arquivo que vou colar, e adicione a imagem
> `public/assets/spine-mandala.png`. Depois faça commit e push."

(cole o conteúdo do `.astro` e arraste a imagem)

## Como aplicar (manual)
1. Copie `deliver/src/pages/app-spine-lab.astro` por cima de `src/pages/app-spine-lab.astro`
2. Copie `deliver/public/assets/spine-mandala.png` para `public/assets/spine-mandala.png`
3. `git add . && git commit -m "app-spine-lab: design igual ao HTML (mandala em imagem)" && git push`
4. A Vercel publica sozinha em 1–2 min.

> ⚠️ A imagem é obrigatória. Sem o arquivo `public/assets/spine-mandala.png`, a mandala
> do hero aparece quebrada.
