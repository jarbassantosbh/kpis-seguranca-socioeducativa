# 🛡️ Guia Mestre do Agente & Documentação Unificada do Sistema
## Dashboard Executivo de Eventos de Segurança Socioeducativa (2025 vs 2026)
**Instituto Elo - Subsecretaria de Atendimento Socioeducativo**  
**Versão Vigente:** `2.5.2` (Deploy Oficial de Produção Homologado)  
**Data da Criação / Atualização:** 10 de Novembro de 2026  
**Status do Sistema:** 🟢 **OPERACIONAL & HOMOLOGADO EM PRODUÇÃO**

---

> [!IMPORTANT]
> **LEITURA OBRIGATÓRIA PARA AGENTES DE IA**: Este é o documento mestre de governança técnica, arquitetura de dados e instruções operacionais do projeto. Todo novo agente ou desenvolvedor que assumir este repositório **DEVE** seguir integralmente as diretrizes aqui estabelecidas.

---

## 1. Instruções Operacionais do Agente & Fluxo de Governança

### 1.1. Papéis e Responsabilidades
* **Usuário (GP - Gerente de Projeto / Gestor de Segurança):** É a autoridade máxima de negócio. Define as prioridades analíticas, avalia propostas técnicas, homologa os testes no ambiente `/dev` e emite autorização explícita para deploy em produção.
* **Agente (ES - Engenheiro de Software):** Atua no planejamento, formula propostas técnicas de arquitetura, gerencia o ciclo de publicação em homologação (`/dev`), apresenta relatórios de implementação e propostas de release.
* **Agente (PG - Programador Sênior):** Constrói e refatora o código (`Code.js`, `index.html`, etc.), realiza validação sintática local (`node -c GoogleAppsScript/Code.js`) e saneia apontamentos do GP.

### 1.2. Regra Fundamental de Segurança e Deploy
> [!CRITICAL]
> **PROIBIÇÃO DE DEPLOY DIRETO EM PRODUÇÃO**: O sistema é utilizado por diretores e equipes de segurança de 13 unidades socioeducativas e pela Sede. É **terminantemente proibido** executar deploy em produção (`clasp deploy` na URL `/exec`) sem a aprovação explícita e inequívoca do GP após homologação no link `/dev`.

### 1.3. Ciclo Operacional Passo a Passo (10 Etapas)
```
[1. Demanda GP] ➔ [2. Proposta ES] ➔ [3. Avaliação GP] ➔ [4. Código/Testes PG] 
   ➔ [5. Push Teste /dev] ➔ [6. Relatório ES] ➔ [7. Homologação GP] 
   ➔ [8. Proposta Deploy ES] ➔ [9. Autorização GP] ➔ [10. Deploy /exec + Git + Backup]
```

1. **GP - Demanda:** Apresenta o objetivo de negócio ou funcionalidade analítica requerida.
2. **ES - Proposta Técnica:** Descreve escopo, arquivos impactados, modelo visual/dados e mensagens de interface para validação.
3. **GP - Avaliação:** Aprova a proposta ou solicita saneamento prévio.
4. **PG - Desenvolvimento & Testes:** Escreve o código e executa validação sintática local (`node -c GoogleAppsScript/Code.js`).
5. **ES - Publicação no Ambiente de Testes:** Envia para o Google Apps Script via `npx @google/clasp push -f` no ambiente `@HEAD`.
6. **ES - Relatório de Implementação:** Apresenta ao GP o resumo do que foi construído e o link direto para testes (`/dev`).
7. **GP - Homologação:** Valida a solução no ambiente de testes. Caso necessário, solicita saneamento ao PG.
8. **ES - Proposta de Release:** Apresenta versão e changelog para deploy em produção.
9. **GP - Autorização de Produção:** Concede o aval formal para publicação.
10. **ES/PG - Deploy Oficial, Versionamento & Backup:** Executa `clasp deploy`, atualiza rodapés e documentações, gera backup estruturado e publica commit e tag no Git.

---

## 2. Ambientes e URLs Oficiais do Projeto

| Ambiente | Tipo / Alvo | Detalhes / URL Oficial |
| :--- | :--- | :--- |
| 🧪 **Testes / Sandbox** | `@HEAD` (`/dev`) | [Ambiente de Testes (/dev)](https://script.google.com/macros/s/AKfycbzrk3nQwvXTb2f7hfZjJCpVosuhkMhK4sNOoRR_C9g/dev) |
| 🚀 **Produção Oficial** | Web App (`/exec`) | [Portal Produção (/exec)](https://script.google.com/macros/s/AKfycbxlbSyOoaCUdKbywBwtd5KnTNzdhCvefG1TEMzo33oJ2szOyhVDLXI_A4__jVhO5Ms6/exec) |
| 📝 **Editor Apps Script** | `scriptId` Oficial | [Projeto no Google Apps Script](https://script.google.com/d/1PEM_TJ7gTmQOy4Uf47knhGLf9Y29B9N7rU2q2D-mggCRrqTmAzqtDsb_/edit) |
| 📊 **Power BI 2026** | Modelo Oficial Vigente | [Power BI 2026 Integrado](https://app.powerbi.com/view?r=eyJrIjoiMDAxMjcxY2ItNWE2Ny00MjkwLWI5NTUtYmM1YWFmZWI0MTE1IiwidCI6IjhmZTFiMzYwLTFmNzYtNDBhNS1iOTlmLWU4NzZkYjhhZjdkNyJ9) |
| 📈 **Power BI 2025** | Modelo Histórico | [Power BI 2025 Integrado](https://app.powerbi.com/view?r=eyJrIjoiNDRkZDFkZTEtZjhjNy00MWUyLWFiYWMtMTI5ZTk1OTA1YjNlIiwidCI6IjhmZTFiMzYwLTFmNzYtNDBhNS1iOTlmLWU4NzZkYjhhZjdkNyJ9) |
| ☁️ **Google Drive Backups** | Nuvem Oficial de Continuidade | Pasta de Backups Estruturados do Instituto Elo |
| 🐙 **Repositório GitHub** | Controle Remoto Oficial | [GitHub jarbassantosbh/kpis-seguranca-socioeducativa](https://github.com/jarbassantosbh/kpis-seguranca-socioeducativa.git) |

---

## 3. Padrões de Design, Ergonomia e UI/UX

* **Estética Geral:** Design corporativo escuro, moderno e sofisticado (fundo principal `#0b1120`, header `#131c31`, cards `#182238`, hover `#1f2c47`).
* **Identidade Visual Oficial:** Logo Marca branca do Instituto Elo no cabeçalho superior (`filter: brightness(0) invert(1)`), em harmonia com o Portal de Capacitação.
* **Tabelas do Sistema:** Utilizar estritamente a classe oficial `.dashboard-table` definida em [`DESIGN.md`](file:///c:/Projetos%20Antigrafity%20Google/KPI%20Unidades%20Socioeducativas/DESIGN.md) com linhas em cards flutuantes, hover suave e cabeçalho fixo (`thead` sticky). **Nunca utilizar tabelas zebradas padrão (`.table-striped`).**
* **Comparativo Justo (YTD):** Jan-Out 2025 vs Jan-Out 2026 (mesmo período de 10 meses), com total 12 meses de 2025 para contextualização do fechamento anual.
* **Zero Rolagem Horizontal:** Layout fluido adaptado ao desktop com limites e quebras de linha responsivas no cabeçalho para acomodar descrições completas de eventos sem scroll horizontal.
* **Formatação A4 para Gestores:** Botão de impressão que dispara `@media print` sem fundos escuros, permitindo exportar PDF ou imprimir folha física limpa para pauta de reunião.

---

## 4. Estrutura da Base de Dados e Tipologia de Eventos

### 4.1. As 13 Unidades Socioeducativas Monitoradas (Nomenclatura Completa)
1. **CEIP Araxá** (Centro de Atendimento Inicial e Provisório de Araxá)
2. **CEIP Contagem** (Centro de Atendimento Inicial e Provisório de Contagem)
3. **CEIP São Benedito** (Centro de Atendimento Inicial e Provisório de São Benedito)
4. **CEIP Sete Lagoas** (Centro de Atendimento Inicial e Provisório de Sete Lagoas)
5. **CSE Ipatinga** (Centro Socioeducativo de Ipatinga)
6. **CSE Lindéia** (Centro Socioeducativo Lindéia)
7. **CSE Passos** (Centro Socioeducativo de Passos)
8. **CSE Santa Clara** (Centro Socioeducativo Santa Clara)
9. **CSE Santa Helena** (Centro Socioeducativo Santa Helena)
10. **CSE São Jerônimo** (Centro Socioeducativo São Jerônimo)
11. **CSE Tupaciguara** (Centro Socioeducativo de Tupaciguara)
12. **CSE Uberaba** (Centro Socioeducativo de Uberaba)
13. **CSE Unaí** (Centro Socioeducativo de Unaí)

### 4.2. Tipologia e Agrupamento de Eventos
| Categoria Canônica | Tipologia em 2025 (Origem Detalhada) | Tipologia em 2026 (Consolidada) | Rótulo Oficial da Interface |
| :--- | :--- | :--- | :--- |
| **Fuga** | Fuga interna + Fuga externa | Fuga | **Fuga** |
| **Agressão a Adolescentes** | Agressão de adolescente a outro adolescente | Agressão contra adolescente | **Agressão contra adolescentes** |
| **Agressão a Funcionários** | Agressão de adolescente a funcionário ou terceiros | Agressão contra funcionários | **Agressão contra funcionários** |
| **Motim** | Motim | Motim | **Motim** |
| **Tumulto** | Tumulto | Tumulto | **Tumulto** |
| **Rebelião** | Rebelião | Rebelião | **Rebelião** |
| **Apreensão de Drogas** | Drogas em alojamentos + Drogas em revistas | Apreensão de drogas | **Apreensão de drogas na Unidade** |
| **Apreensão de Armas** | Armas em alojamentos + Armas em revistas | Apreensão de armas brancas | **Apreensão de armas brancas na Unidade** |
| **Apreensão de Celulares** | Celulares em alojamentos + Celulares em revistas | Apreensão de celular | **Apreensão de celular na Unidade** |
| **Evasão** | Evasão | Evasão | **Evasão** |
| **Autoextermínio** | Tentativa de autoextermínio (25 registros em Jan-Out 2025) | *(Não monitorado em 2026)* | **Tentativa de autoextermínio** *(modo Base Completa)* |

---

## 5. Ferramentas, MCPs e Protocolo Portátil

* **Google Stitch (`google-stitch` Skill):** Prototipação de UI, gestão de Design Tokens ([`DESIGN.md`](file:///c:/Projetos%20Antigrafity%20Google/KPI%20Unidades%20Socioeducativas/DESIGN.md)) e transpilação para Web Apps.
* **Preservação de Cota do Stitch:** Não re-gerar telas completas do zero; priorizar refinamento e edição direta.
* **Configuração Portável no Git:** Configurações centralizadas em [`.agents/mcp_config.json`](file:///c:/Projetos%20Antigrafity%20Google/KPI%20Unidades%20Socioeducativas/.agents/mcp_config.json).
* **Validação Sintática Local:** `npm run test-syntax` (`node -c GoogleAppsScript/Code.js`).

---

## 6. Roteiro Operacional: Comandos, Git e Backups Estruturados

### 6.1. Cheatsheet de Comandos Clasp
```powershell
# Verificar status dos arquivos monitorados
npx @google/clasp status

# Enviar alterações locais para o ambiente de testes (/dev)
npx @google/clasp push -f

# Baixar alterações feitas no editor web
npx @google/clasp pull

# Listar versões e deployments ativos
npx @google/clasp deployments

# Publicar nova versão em produção (SOMENTE COM APROVAÇÃO DO GP)
npx @google/clasp deploy -i AKfycbxlbSyOoaCUdKbywBwtd5KnTNzdhCvefG1TEMzo33oJ2szOyhVDLXI_A4__jVhO5Ms6 -d "v2.3.0 - Descrição da Release"
```

### 6.2. Rotina de Backup Obrigatória a Cada Release
A cada publicação em produção, executar os 3 níveis de backup:
1. **Pasta física local:** Copiar todos os arquivos para `backup_v2.X.X/`.
2. **ZIP no projeto:** Compactar a pasta gerando `backup_v2.X.X_completo.zip`.
3. **Cópia em Downloads:** Copiar o ZIP para `%USERPROFILE%\Downloads\` para sincronização com o Google Drive.

### 6.3. Comandos de Versionamento Git
```powershell
# Sincronizar commits e tags
git add .
git commit -m "feat(deploy): release v2.X.X - descricao"
git tag -a v2.X.X -m "Versao 2.X.X - Deploy Homologado"
git push origin main --tags
```

---

## 7. Histórico de Versões e Releases Oficiais

| Versão | Deployment | Data | Descrição / Entregas da Release |
| :--- | :--- | :--- | :--- |
| **`2.5.2`** | `@exec` | 10/11/2026 | **Relatório Gerencial Executivo Homologado (A4 Retrato), Alta Resolução e Ajustes Finos:**<br>• Formatação de impressão profissional em A4 Retrato (vertical) com estrutura de 4 páginas limpas e sem quebras de linhas no meio de tabelas.<br>• Resolução de gráficos elevada com `devicePixelRatio: 2.5` (250-300 DPI) e eliminação de distorções/alongamentos visuais.<br>• Rótulos de eixos, descrições de eventos e legendas renderizados em preto negrito de alto contraste para impressão física.<br>• Tabelas com larguras percentuais fixas evitando corte de colunas no formato retrato.<br>• Cabeçalho exclusivo de impressão com Logo do Instituto Elo, títulos institucionais, data/hora e filtros ativos, estritamente oculto na navegação de tela web.<br>• Responsividade mobile aprimorada e alinhamento de KPIs executivos. |
| **`2.3.0`** | `@3` | 09/11/2026 | **Identidade Visual, Nomenclatura Completa CEIP/CSE, Filtros e Ergonomia Sem Rolagem:**<br>• Inclusão da Logo Marca oficial do Instituto Elo (branca) no cabeçalho.<br>• Atualização do subtítulo: *"Estudo: Eventos de Segurança Janeiro a Outubro (2025 - 2026)"*.<br>• Nomes completos oficiais padronizados para as 13 unidades (`CEIP Araxá`, `CEIP Contagem`, etc.).<br>• Filtro de Período limpo (`Acumulado (10 meses)` e lista de meses direta).<br>• Quadro Comparativo ajustado: títulos *Eventos de Segurança*, *2025*, *2026* e *Maior Volume 2026 - Unidade*.<br>• Seção 3 Comparativa com nomes completos de todas as 10 tipologias de eventos e legenda simplificada (`2025`, `2026`, `Aumento`, `Redução`).<br>• Otimização visual para eliminação total de barra de rolagem horizontal em desktop. |
| **`2.2.0`** | `@2` | 07/11/2026 | **Painel Executivo de Eventos de Segurança - Filtro Global & Lista Patronizada:**<br>• Filtros globais sincronizados no topo (Unidade, Evento, Período).<br>• Tabela cruzada interativa (Matriz Unidade x Evento com modos Comparativo, 2026, 2025 e Saldo).<br>• Modos *Lista Patronizada* (homóloga) vs *Base Completa*.<br>• Integração dos dois modelos oficiais Power BI (2025 e 2026) em abas nativas. |
| **`2.0.0`** | Baseline | 06/11/2026 | **Estruturação Inicial e Governança:**<br>• Criação do Guia Mestre `AGENTS.md` e Design System `DESIGN.md`.<br>• Saneamento e extração limpa UTF-8 do dataset (`dados_seguranca.json`).<br>• Configuração de ferramentas: ESLint, Clasp, Git e backup em 3 níveis. |
