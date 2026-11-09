# 📱 Proposta Técnica & Arquitetura: Mobile PWA Executivo
**Painel de Eventos de Segurança — Instituto Elo (2025 vs 2026)**  
*Documento de Especificação Técnica e Planejamento UI/UX*  
*Status: Aguardando devolutiva/ajustes da Gestão para início da implementação*

---

## 1. Objetivo da Proposta

Disponibilizar uma versão com ergonomia **Mobile-First / PWA (Progressive Web App)** do *Painel Executivo de Eventos de Segurança*, permitindo aos Diretores, Coordenadores e Gestores de Unidade:
1. Instalar o painel como um aplicativo nativo na tela inicial do celular (iOS e Android), operando em modo *Standalone* (sem barra de URL do navegador).
2. Consultar todos os indicadores estratégicos, comparativos homólogos (2025 vs 2026) e matrizes de segurança de forma rápida e tátil.
3. Manter a integridade de dados e lógica já homologada na versão desktop.

---

## 2. Princípios Diretivos Estabelecidos

* **HUD Minimalista (Ícones Estritamente Necessários):**
  - Eliminação de qualquer ícone supérfluo, emoji decorativo ou ilustração desnecessária.
  - Interface técnica, executiva e sóbria, preservando o padrão de cores corporativas do Instituto Elo (`#0b1120`, `#131c31`, `#182238`, `#2563eb`).
  - Uso de ícones restrito a elementos funcionais indispensáveis (setas ordenadoras `▲/▼`, chevrons e indicadores de status).

* **Integridade Absoluta das Seções:**
  - Preservação de **100% das seções, nomenclaturas e ordem** do projeto atual.
  - Nenhuma seção ou tabela do desktop é omitida ou mesclada.

---

## 3. Mapeamento Integral das Seções (Estrutura Canônica)

### 3.1. Cabeçalho & Filtros Globais
* **Logo Oficial:** Instituto Elo em branco (auto-ajustável).
* **Títulos Oficiais:**
  * Título: `Painel Executivo de Eventos de Segurança`
  * Subtítulo: `Estudo: Eventos de Segurança Janeiro a Outubro (2025 - 2026)`
* **Filtros Globais:**
  * `Unidade:` Todas as Unidades (13) + lista completa das 13 unidades socioeducativas.
  * `Evento:` Todos os Eventos de Segurança + 10 tipologias padronizadas.
  * `Período:` Acumulado (10 meses) + Janeiro a Dezembro.
* **Ações:** `Limpar Filtros` e `Imprimir Relatório`.

### 3.2. Barra de Navegação & Seletor de Escopo
* **Abas de Navegação:**
  1. `Comparativo` (Aba analítica principal)
  2. `Power BI 2026`
  3. `Power BI 2025`
* **Seletor de Escopo:**
  * `Lista Padronizada` vs `Base Completa (com TA 2025)`

### 3.3. Aba Comparativo: Banner de Contexto & 4 Cards de KPIs
* **Banner de Contexto:** Título dinâmico da seleção ativa (`currentContextTitle`).
* **Grid de 4 KPIs:**
  1. `Ocorrências: 2026` (Valor principal + badge de variação percentual).
  2. `Ocorrências: 2025` (Valor consolidado + rodapé com valor de 12 meses).
  3. `Evento de Maior Ocorrência (2026)` (Nome completo do evento e volume).
  4. `Participação das Ocorrências 2026` (% de concentração e unidade com maior volume).

### 3.4. Seção 1: 1. Evento de Segurança
* **Gráficos:**
  * Gráfico 1: `Demonstrativo de Eventos de Segurança (2025 - 2026)` (Barras por categoria).
  * Gráfico 2: `Comparativo de Eventos de Segurança (2025 - 2026)` (Evolução mensal Jan-Out).
* **Tabela:** `Quadro Comparativo de Eventos de Segurança`
  * Colunas completas: `Eventos de Segurança`, `2025`, `2026`, `Dif. (Δ)`, `Var. (%)`, `% Total 2026`, `Maior Volume 2026 - Unidade`.

### 3.5. Seção 2: 2. Comparativo por Unidade
* **Controles de Ordenação:**
  * `Maior em 2026` | `Maior Aumento (Δ)` | `Alfabética`
* **Gráfico Benchmark:** `Comparativo por Unidade - Todos os Eventos de Segurança`
* **Tabela de Unidades:** `Comparativo por Unidade - Todos os Eventos de Segurança`
  * Colunas completas: `Unidade Socioeducativa`, `2025`, `2026`, `Dif. (Δ)`, `Var. (%)`, `% Total 2026`, `Evento Principal 2026`.

### 3.6. Seção 3: 3. Comparativo por Evento de Segurança
* **Controles de Visualização da Matriz:**
  * `Comparativo (2025 vs 2026)` | `Apenas 2026` | `Apenas 2025` | `Saldo (Δ)`
* **Legenda Oficial:**
  * `[ ] 2025` | `[ ] 2026` | `[ ] Aumento` | `[ ] Redução`
* **Tabela Matriz (13 Unidades x 10 Eventos):**
  * Coluna da esquerda (`Unidade`) congelada (*sticky column*) no mobile para permitir deslizamento horizontal sem perder a referência de qual unidade está sendo examinada.

### 3.7. Abas Power BI (2026 e 2025)
* Iframes integrados dos modelos oficiais do Power BI.
* Ações de `Abrir em Nova Guia` e `Recarregar`.

### 3.8. Rodapé
* `Instituto Elo - Departamento de Monitoria e Socioeducação`

---

## 4. Especificações Técnicas de Adaptação Mobile (PWA)

```
┌────────────────────────────────────────────────────────┐
│  📱 Camada de Apresentação PWA (Mobile & Desktop)     │
├────────────────────────────────────────────────────────┤
│  • manifest.json dinâmico (Data URI base64)            │
│  • display: standalone (tela cheia sem barra URL)      │
│  • theme-color: #0b1120                                │
│  • apple-mobile-web-app-capable: yes                   │
│  • viewport-fit=cover (suporte a Dynamic Island/Notch) │
├────────────────────────────────────────────────────────┤
│  📐 Layout Responsivo (@media max-width: 768px)        │
│  • Header com empilhamento compacto de filtros        │
│  • KPI Grid: 2 colunas no mobile (leitura imediata)    │
│  • Tabelas com scroll horizontal contido no card       │
│  • Coluna 1 da Matriz congelada (position: sticky)     │
│  • Áreas de toque com altura mínima de 40px            │
└────────────────────────────────────────────────────────┘
```

---

## 5. Próximos Passos (Fluxo Pós-Devolutiva da Gestão)

Conforme as diretrizes de governança do `AGENTS.md`:

1. **Recepção dos Ajustes da Gestão:**
   - Registrar no backlog as alterações solicitadas pela diretoria/gestores.
2. **Implementação em Ambiente Local:**
   - Atualizar `GoogleAppsScript/index.html` incorporando as regras de CSS mobile, metas PWA e os ajustes pontuais da gestão.
   - Executar validação de sintaxe (`npm run test-syntax`).
3. **Deploy no Ambiente Sandbox (`/dev`):**
   - Enviar alterações via `clasp push`.
   - Testar no smartphone através do link `@HEAD/dev`.
4. **Homologação pelo GP:**
   - O Gestor do Projeto valida o funcionamento no dispositivo móvel.
5. **Backup e Publicação em Produção (`/exec`):**
   - Criação de nova versão no Apps Script e backup completo (Git Tag + ZIP).
