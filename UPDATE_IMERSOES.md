# ATUALIZAÇÃO DOS DADOS DAS IMERSÕES — CLAUDE CODE

## REGRA GERAL (aplicar em todas as imersões)

Todas as imersões incluem:
- Material de apoio impresso para levar para casa e continuar praticando
- Acesso ao APP Spine Lab

---

## IMERSÕES — DADOS ATUALIZADOS

### 1. IMERSÃO RIO DE JANEIRO — HORA DO ALMOÇO

| Campo | Valor |
|---|---|
| Formato | Hora do almoço |
| Local | AMARATHI (RUA DA QUITANDA 109) Centro do Rio de Janeiro |
| Data | 11 de junho de 2026 |
| Horário | 12h30 às 13h30 |
| Valor padrão | R$ 137 |
| Early bird (3+ dias antes) | R$ 116,45 (15% de desconto) |
| Opcional: almoço (marmita ayurveda) | R$ 192 |

**Lógica de preço:**
- Compra com 3+ dias de antecedência: R$ 116,45 (early bird, 15% off)
- Compra até 1 dia antes: R$ 137
- Com marmita ayurvédica: R$ 192 (OPÇÃO APENAS NA AMARATHI, RIO DE JANEIRO)

---

### 2. IMERSÃO FLORIANÓPOLIS

| Campo | Valor |
|---|---|
| Período | Entre 14 e 17 de junho de 2026 |
| Data exata | A definir |
| Local | Rio Tavares Sunset, Florianópolis |
| Early bird (3+ dias antes) | R$ 177,30 (10% de desconto) |
| Valor padrão | R$ 197 |
| No dia | R$ 216,70 (10% a mais) |

---

### 3. IMERSÃO PORTO ALEGRE

| Campo | Valor |
|---|---|
| Data | 19 de junho de 2026 |
| Local | Bairro Santana, Porto Alegre |
| Horário | Sunset |
| Early bird (3+ dias antes) | R$ 177,30 (10% de desconto) |
| Valor padrão | R$ 197 |
| No dia | R$ 216,70 (10% a mais) |

---

## LÓGICA DE PREÇO — APLICAR EM TODAS AS IMERSÕES

| Momento da compra | Rio | Floripa | POA |
|---|---|---|---|
| Early bird (3+ dias antes) | R$ 116,45 | R$ 177,30 | R$ 177,30 |
| Padrão (até 1 dia antes) | R$ 137,00 | R$ 197,00 | R$ 197,00 |
| No dia | R$ 150,70 | R$ 216,70 | R$ 216,70 |

---

## INSTRUÇÕES PARA O DEV

- Calcular preço automaticamente com base na data de compra vs. data da imersão
- Early bird: ativado se faltam 3+ dias para a imersão
- No dia: ativado se a compra acontece no mesmo dia da imersão
- Marmita ayurvédica (só Rio): exibir como add-on opcional no checkout — preço total R$ 192 (substituir valor base, não somar)
- Exibir "Em breve" nas imersões com data a definir — não omitir, não bloquear
- Todas as páginas de imersão exibir banner: *"Todas as imersões incluem material impresso + acesso ao APP Spine Lab"*
- **Campo de código de desconto:** exibir no checkout de todas as imersões, antes do botão de pagamento. Label: *"Código de desconto"* + botão *"Aplicar"*. Recalcular valor total ao aplicar.

---

## PENDÊNCIAS (resolver com Camila antes de publicar)

- [ ] Data exata da imersão Floripa (entre 14–17/06)
- [ ] Endereço exato do Centro Rio e Santana POA
