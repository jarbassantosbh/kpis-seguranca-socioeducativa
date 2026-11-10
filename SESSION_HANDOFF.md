# 🛡️ Registro de Continuidade de Sessão (Handoff)
## Dashboard Executivo de Eventos de Segurança Socioeducativa (2025 vs 2026)
**Subsecretaria de Atendimento Socioeducativo | Instituto Elo**

---

### 📌 Informações Gerais da Sessão
* **Data / Horário do Registro:** 10 de Novembro de 2026 às 17:15
* **Conversation ID:** `a356de8e-e8a2-4e26-9241-5da26a3b7183`
* **Diretório Raiz do Projeto:** `c:\Projetos Antigrafity Google\KPI Unidades Socioeducativas`
* **Versão Vigente em Produção:** `2.5.5` (Deployment Oficial Homologado `@13`)
* **Status do Sistema:** 🟢 **OPERACIONAL & HOMOLOGADO EM PRODUÇÃO**

---

### 🌐 Ambientes e URLs Oficiais Ativas

| Recurso | Tipo / Descrição | Link Oficial |
| :--- | :--- | :--- |
| 🚀 **Produção Oficial** | Web App Apps Script (`/exec` - Versão `@13`) | [Painel Executivo em Produção (v2.5.5)](https://script.google.com/macros/s/AKfycbxlbSyOoaCUdKbywBwtd5KnTNzdhCvefG1TEMzo33oJ2szOyhVDLXI_A4__jVhO5Ms6/exec) |
| 🧪 **Sandbox / Testes** | Ambiente de Desenvolvimento (`/dev` - Versão `@HEAD`) | [Ambiente de Testes (/dev)](https://script.google.com/macros/s/AKfycbzrk3nQwvXTb2f7hfZjJCpVosuhkMhK4sNOoRR_C9g/dev) |
| 📝 **Editor Google Apps Script** | Projeto Cloud Script Editor | [Editor Google Apps Script](https://script.google.com/d/1PEM_TJ7gTmQOy4Uf47knhGLf9Y29B9N7rU2q2D-mggCRrqTmAzqtDsb_/edit) |
| 🐙 **Repositório GitHub** | Controle Remoto Oficial | [GitHub jarbassantosbh/kpis-seguranca-socioeducativa](https://github.com/jarbassantosbh/kpis-seguranca-socioeducativa.git) |
| 📊 **Power BI Oficial (2026)** | Dashboard Integrado no Painel | [Power BI 2026](https://app.powerbi.com/view?r=eyJrIjoiMDAxMjcxY2ItNWE2Ny00MjkwLWI5NTUtYmM1YWFmZWI0MTE1IiwidCI6IjhmZTFiMzYwLTFmNzYtNDBhNS1iOTlmLWU4NzZkYjhhZjdkNyJ9) |
| 📈 **Power BI Oficial (2025)** | Dashboard Histórico no Painel | [Power BI 2025](https://app.powerbi.com/view?r=eyJrIjoiNDRkZDFkZTEtZjhjNy00MWUyLWFiYWMtMTI5ZTk1OTA1YjNlIiwidCI6IjhmZTFiMzYwLTFmNzYtNDBhNS1iOTlmLWU4NzZkYjhhZjdkNyJ9) |

---

### 📦 Histórico de Entregas Realizadas Nesta Sessão

1. **Release `v2.5.3` - Impressão Executiva A4 em 2 Páginas Exatas:**
   - Encaixe milimétrico em exatamente 2 páginas A4 Retrato.
   - Gráfico Comparativo Absoluto: todas as 13 unidades visíveis com barras esbeltas de 9px a 45°, sem corte horizontal.
   - Tabelas centralizadas, cabeçalhos compactados para 4.8pt e fontes internas reduzidas para 4.4pt.
   - Correção do contraste de Média e Mediana para preto negrito (`#000000 !important; font-weight: 700;`).

2. **Release `v2.5.4` - Observação Dinâmica no Card 4 (Participação 2026):**
   - Inclusão do rodapé `.kpi-footer` idêntico ao Card 2 (*Ocorrências: 2025*).
   - Nomenclatura dinâmica:
     - Rede Consolidada: `Base: Total Consolidado (418)`
     - Unidade: `Base: Total Consolidado (164 de 418)`
     - Evento na Unidade: `Base: Total da Unidade (20 de 164)`
     - Evento na Rede: `Base: Total Consolidado (168 de 418)`

3. **Release `v2.5.5` - Filtro por Trimestres, Ordenação Alfabética e Resumo Conciso:**
   - Filtro por Período em Trimestres (`1° Trimestre`, `2° Trimestre`, `3° Trimestre`, `4° Trimestre` homólogo para Outubro).
   - Filtro Evento ordenado alfabeticamente pela língua portuguesa (`pt-BR`), mantendo `Todos os Eventos de Segurança` em 1º.
   - Resumo Executivo conciso, sem apêndice redundante de totais, com inteligência para zero x zero e novas ocorrências.
   - Cores semânticas de alto contraste para impressão física (`.stat-diff-up`, `.stat-diff-down`, `.stat-diff-neutral`).

---

### 🛡️ Estado do Repositório Git & Backups

* **Branch:** `main`
* **Tags Registradas no Git:** `v2.5.3`, `v2.5.4`, `v2.5.5`.
* **Backups Estruturados (3 Níveis):**
  1. Pasta física local: `backup_v2.5.5/`
  2. Arquivo ZIP no projeto: `backup_v2.5.5_completo.zip` *(142.513 bytes)*
  3. Cópia sincronizada: `%USERPROFILE%\Downloads\backup_v2.5.5_completo.zip`

---

### 📋 Instruções para Retomar em Sessão Futura

1. **Arquivos Centrais de Código:**
   - `GoogleAppsScript/index.html`: Código principal do Web App (HTML, CSS e JavaScript).
   - `dashboard_seguranca_socioeducativa.html`: Versão espelhada com Chart.js local para visualização off-line e validação de impressão.
   - `AGENTS.md`: Guia Mestre de Governança Técnica e Histórico de Releases.
2. **Fluxo de Governança Obrigatório:**
   - Sempre enviar as alterações primeiro para testes com `npx @google/clasp push -f` e homologar na URL `/dev`.
   - Publicar em produção com `clasp deploy -i ...` somente após aprovação expressa do GP.
