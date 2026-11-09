---
name: google-stitch
description: Prototipação rápida, design de interfaces e otimização de limites diários via Google Stitch MCP para o Portal Capacitação Inicial 2026. Use ao conceber, redesenhar ou refatorar modais, tabelas, painéis e formulários, garantindo conformidade estrita com o DESIGN.md, preservação de cota e o runtime Google Apps Script.
---

# 🎨 Skill de Engenharia de Design: Google Stitch ➔ Apps Script
**Portal Capacitação Inicial 2026 — Instituto Elo**  
*Baseada nos padrões oficiais da biblioteca `google-labs-code/stitch-skills` (Google Labs).*

---

## 1. Princípio de Integridade Multi-Terminal & Fonte da Verdade

Esta skill e todo o seu ecossistema foram projetados para garantir **100% de integridade operacional em qualquer computador ou terminal** conectado via Git e Google Antigravity:
* **Projeto Canônico no Google Stitch:** `projects/17493441258062822876` (com o [`DESIGN.md`](file:///c:/Projetos%20Antigrafity%20Google/Portal%20Capacita%C3%A7%C3%A3o%20Inicial_v2/DESIGN.md) do Instituto Elo já atrelado).
* **Configuração Portável do MCP:** Arquivo canônico em [`.agents/mcp_config.json`](file:///c:/Projetos%20Antigrafity%20Google/Portal%20Capacita%C3%A7%C3%A3o%20Inicial_v2/.agents/mcp_config.json) versionado no repositório.
* **Cache Local Compartilhado:** Pasta `.stitch/designs/` e `.stitch/metadata.json` persistidos no Git para evitar consultas redundantes à API.

---

## 2. As 6 Regras de Ouro para Otimização da Cota / Limite Diário

Para evitar o esgotamento precoce da cota diária do Stitch e garantir alta precisão de primeira:

### 1. Regra de Ouro: *"Prefer Edit over Re-generation"*
* **Nunca re-gerar uma tela inteira do zero** para fazer ajustes finos (botões, posições, cores ou textos).
* Usar sempre `edit_screens` apontando o ID da tela e descrevendo cirurgicamente a alteração. A criação do zero (`generate_screen_from_text`) só é permitida na concepção da primeira versão de uma tela nova.

### 2. Sem *"Theme Leakage"* (Prompt focado 100% em Estrutura)
* Como o [`DESIGN.md`](file:///c:/Projetos%20Antigrafity%20Google/Portal%20Capacita%C3%A7%C3%A3o%20Inicial_v2/DESIGN.md) já está ativo no projeto `17493441258062822876`, **NUNCA inclua códigos hexadecimais, nomes de fontes ou cores no prompt de geração**.
* O prompt deve focar exclusivamente em **estrutura de página, seções numeradas e hierarquia de conteúdo**:
  ```markdown
  Objetivo: Modal widescreen para visualização e cadastro de unidades socioeducativas.
  PLATAFORMA: Web Desktop
  ESTRUTURA:
  1. Header: Título "Gestão de Unidades", subtítulo e botão de fechamento circular.
  2. Barra de Ações: Campo de busca com placeholder e botão de ação primária "+ Nova Unidade".
  3. Área Principal: Tabela de dados flutuante com colunas (Nome, Cidade/UF, Status, Ações).
  4. Rodapé do Card: Contador de registros e botões de paginação.
  ```

### 3. Pipeline Local de Pré-Refinamento (`enhance-prompt`)
* Antes de enviar qualquer comando à API do Stitch, o agente Antigravity deve atuar localmente (sem custo de cota) refinando o pedido do GP, adicionando termos técnicos de UI/UX reconhecidos pelo Stitch (*"card grid"*, *"sticky table header"*, *"segmented control"*, *"floating badge"*).

### 4. Controle Severo de Variantes (`generate_variants`)
* A ferramenta `generate_variants` consome múltiplos créditos por chamada.
* Se for estritamente necessário explorar variações de layout, defina sempre `variantCount: 1` e restrinja `aspects: ["LAYOUT"]`, economizando até 66% da cota.

### 5. Cache e Histórico Local Imediato (`.stitch/designs/`)
* Após a resposta da API do Stitch, o agente deve gravar os assets em `.stitch/designs/<screen-id>.html` e atualizar o `.stitch/metadata.json`. Isso impede que o agente precise gastar chamadas de API para consultar telas anteriores.

### 6. Transpilação Design-to-Code Local e Desacoplada
* A transposição do HTML/CSS do Stitch para os arquivos do Google Apps Script ([`Login.html`](file:///c:/Projetos%20Antigrafity%20Google/Portal%20Capacita%C3%A7%C3%A3o%20Inicial_v2/Login.html), [`Style.html`](file:///c:/Projetos%20Antigrafity%20Google/Portal%20Capacita%C3%A7%C3%A3o%20Inicial_v2/Style.html), [`Script.html`](file:///c:/Projetos%20Antigrafity%20Google/Portal%20Capacita%C3%A7%C3%A3o%20Inicial_v2/Script.html)) é executada **100% pelo agente no Antigravity local**, com zero chamadas adicionais de IA na nuvem.

---

## 3. Fluxo de Trabalho Integrado (Design-to-Code em 5 Etapas)

```
[1. Demanda GP] ➔ [2. Refinamento Local] ➔ [3. Stitch (Gerar ou Editar)] 
    ➔ [4. Avaliação GP] ➔ [5. Transpilação Apps Script + Teste /dev]
```

1. **Demanda GP:** O GP solicita a criação de uma tela, modal ou redesign.
2. **Refinamento Local:** O agente monta o prompt estrutural sem menção a cores/fontes (já protegidas no `DESIGN.md`).
3. **Disparo Stitch:** O agente executa a chamada no projeto `17493441258062822876` e salva o retorno em `.stitch/designs/`.
4. **Avaliação GP:** O agente apresenta a proposta visual e lógica para aprovação formal do GP.
5. **Transpilação & Publicação:** O código é adaptado para Bootstrap 5 dark nativo, validado com `node -c Código.js` e publicado no sandbox `@HEAD` via `clasp push -f`.

---

## 4. Checklist de Auditoria Visual & Funcional

- [ ] A tela respeita os breakpoints do container principal (sem barra de rolagem horizontal no desktop)?
- [ ] A tabela utiliza a classe canônica `.dashboard-table` com cabeçalho sticky escuro `#0f172a`?
- [ ] Os botões de fechar modais usam `.btn-close-modal` com hover avermelhado?
- [ ] Não há injeção de dependências externas pesadas (Tailwind CDN, React externo, etc.)?
- [ ] O código passou na validação sintática local (`node -c Código.js`)?
