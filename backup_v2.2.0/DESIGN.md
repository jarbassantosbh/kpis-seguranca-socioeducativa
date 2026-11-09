# 🎨 Design System & Diretrizes de UI/UX - Dashboard de Segurança Socioeducativa
**Instituto Elo - Versão Oficial Vigente: 2.0.0**  
*Documento canônico de Design Tokens para uso com Google Stitch e Engenharia de Frontend.*

---

## 1. Filosofia de Design & Diretrizes Institucionais

O sistema opera sob uma identidade **Corporativa Escura (Dark Mode Sofisticado)**, pensada para análise executiva da Subsecretaria de Atendimento Socioeducativo e Gestores das 13 unidades socioeducativas e Sede.
* **Sobriedade e Foco:** O layout prioriza clareza analítica, minimização da fadiga visual e leitura ágil de indicadores críticos (fugas, agressões, apreensões).
* **Comparativo Justo (YTD):** Jan-Out 2025 vs Jan-Out 2026 (mesmo período de 10 meses), com visão de ano completo (12m de 2025) contextualizada.
* **HUD Minimalista:** Sem ícones poluídos ou excessivos, sem subtítulos redundantes, mantendo painéis limpos e objetivos.
* **Zero Barras de Rolagem Horizontal:** Toda tabela e modal se ajusta milimetricamente à largura útil do desktop (`max-width: 1650px`).
* **Pronto para Impressão A4:** Ficha de reunião do Gestor com formatação CSS `@media print` limpa, sem fundos escuros pesados ao imprimir ou exportar PDF.

---

## 2. Tokens de Cor & Superfícies (Color Palette)

| Papel Semântico | Token / Valor Hex | Alpha / Fallback | Aplicação Principal |
| :--- | :--- | :--- | :--- |
| **Fundo Principal (Canvas)** | `#0b1120` | `rgb(11, 17, 32)` | Fundo geral da página (`body`), scrollbars e cabeçalhos. |
| **Superfície Secundária** | `#131c31` | `rgba(19, 28, 49, 0.9)` | Header superior, filtros e barras de controle. |
| **Superfície Primária (Cards)** | `#182238` | `rgba(24, 34, 56, 0.7)` | Cards de KPI, painéis de gráficos e tabelas. |
| **Superfície Hover** | `#1f2c47` | `rgba(31, 44, 71, 0.8)` | Hover em linhas de tabela, botões secundários e cards. |
| **Bordas Sutis** | `#263554` | `rgba(255, 255, 255, 0.08)` | Divisores de cards, bordas de tabelas e contornos. |
| **Bordas Destacadas** | `#3b82f6` | `rgba(59, 130, 246, 0.3)` | Hover de elementos clicáveis e contornos de inputs focados. |
| **Primária (Ação / Destaque)** | `#38bdf8` | `#0284c7` (Hover) | Títulos destacados, links e botões primários. |
| **Sucesso / Redução de Eventos** | `#10b981` | `rgba(16, 185, 129, 0.2)` | Queda no número de ocorrências, zero eventos, melhoria. |
| **Atenção / Aumento Moderado** | `#f59e0b` | `rgba(245, 158, 11, 0.2)` | Aumento até 50% de ocorrências, pendências de monitoramento. |
| **Perigo / Crítico (Aumento Alto)** | `#ef4444` | `rgba(239, 68, 68, 0.2)` | Aumento superior a 50%, fugas, motins, rebeliões. |
| **Informativo / Neutro** | `#818cf8` | `rgba(129, 140, 248, 0.2)` | Indicadores históricos, badges de contagem e gráficos. |
| **Texto Primário** | `#f8fafc` | `#ffffff` | Títulos e textos de alto contraste. |
| **Texto Secundário** | `#94a3b8` | `#64748b` (Muted) | Rótulos de campos, legendas e metadados. |

---

## 3. Padrão Canônico de Tabelas (`.dashboard-table`)

> [!IMPORTANT]
> **NÃO UTILIZAR TABELAS ZEBRADAS PADRÃO DO BOOTSTRAP (`.table-striped`).**  
> Todas as tabelas comparativas devem seguir estritamente o layout com cards flutuantes:

```css
.dashboard-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 8px;
}
.dashboard-table thead th {
  background-color: #131c31;
  color: #94a3b8;
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 12px 16px;
  position: sticky;
  top: 0;
  z-index: 10;
}
.dashboard-table tbody tr {
  background-color: #182238;
  border-radius: 8px;
  transition: transform 0.15s ease, background-color 0.15s ease;
}
.dashboard-table tbody tr:hover {
  background-color: #1f2c47;
  transform: translateY(-1px);
}
.dashboard-table td {
  padding: 12px 16px;
  font-size: 0.88rem;
  color: #f8fafc;
}
```

---

## 4. Tipografia & Hierarquia de Texto

* **Família de Fontes:** `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
* **Escala de Tamanhos:**
  * **H1 / H2 (Cabeçalho do Portal):** `1.4rem` a `1.6rem` (`font-weight: 700; color: #f8fafc`)
  * **H3 / H4 (Títulos de Seção e Cards):** `1.05rem` a `1.2rem` (`font-weight: 600; color: #f8fafc`)
  * **H6 (Subseções e Rótulos de KPI):** `0.78rem` (`text-transform: uppercase; font-weight: 600; color: #94a3b8`)
  * **Valores Principais de KPI:** `1.8rem` a `2.2rem` (`font-weight: 800; letter-spacing: -0.5px`)
  * **Corpo Geral (Body):** `0.88rem` a `0.92rem` (`color: #f8fafc`)
  * **Rótulos e Metadados (Small):** `0.75rem` a `0.80rem` (`color: #94a3b8`)

---

## 5. Diretrizes de Gráficos (Chart.js Palette)

Os gráficos interativos utilizam o tema escuro integrado com cores de alto contraste:
* **2025 (Histórico YTD):** Azul índigo (`#818cf8`, preenchimento `rgba(129, 140, 248, 0.4)`)
* **2026 (Ano Vigente):** Azul celeste (`#38bdf8`, preenchimento `rgba(56, 189, 248, 0.8)`)
* **Grid Lines:** `rgba(255, 255, 255, 0.06)`
* **Tooltip:** Fundo `#0b1120`, borda `#263554`, texto `#f8fafc`

