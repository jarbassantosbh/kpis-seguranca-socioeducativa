# 🚀 Guia de Publicação no Google Apps Script (Web App)

Este projeto contém a estrutura completa para publicar o **Portal Executivo de Segurança Socioeducativa** no Google Apps Script, permitindo compartilhamento fácil com Gestores por link ou integração no Google Sites/Intranet.

---

## 📁 Arquivos Incluídos

- **`Code.gs`**: Script do servidor Google Apps Script que inicializa e renderiza o Web App.
- **`index.html`**: Interface completa com o Painel Comparativo (2025 vs 2026), Pauta dos Gestores e os dois relatórios oficiais do **Power BI (2025 e 2026)** integrados em abas.
- **`appsscript.json`**: Manifesto de configuração com fuso horário `America/Sao_Paulo`.

---

## ⏱️ Passo a Passo para Publicar (2 Minutos)

### Passo 1: Criar o Projeto no Google Apps Script
1. Acesse: **[script.google.com](https://script.google.com)** com sua conta Google institucional.
2. Clique no botão **"Novo projeto"** (canto superior esquerdo).
3. Renomeie o projeto no topo de *"Projeto sem título"* para **"Dashboard de Segurança Socioeducativa"**.

---

### Passo 2: Inserir o Código do Servidor (`Code.gs`)
1. No editor, você verá o arquivo padrão `Código.gs` (ou `Code.gs`).
2. Abra o arquivo local [`Code.gs`](file:///c:/Projetos%20Antigrafity%20Google/KPI%20Unidades%20Socioeducativas/GoogleAppsScript/Code.gs), copie todo o seu conteúdo e cole substituindo o texto no editor do Google Apps Script.
3. Pressione `Ctrl + S` para salvar.

---

### Passo 3: Criar o Arquivo HTML (`index.html`)
1. No editor do Google Apps Script, clique no ícone **`+`** (ao lado de Arquivos) e selecione **"HTML"**.
2. Digite exatamente o nome **`index`** (o sistema adicionará a extensão `.html` automaticamente).
3. Abra o arquivo local [`index.html`](file:///c:/Projetos%20Antigrafity%20Google/KPI%20Unidades%20Socioeducativas/GoogleAppsScript/index.html), copie todo o seu conteúdo e cole substituindo o que estiver no editor.
4. Pressione `Ctrl + S` para salvar.

---

### Passo 4: Implantar como Aplicativo da Web (Web App)
1. No canto superior direito da tela, clique no botão azul **"Implantar"** > **"Nova implantação"**.
2. Clique no ícone de engrenagem ⚙️ (Selecionar tipo) e escolha **"Aplicativo da Web"**.
3. Preencha as configurações:
   - **Descrição**: `Versão 2.0 - Comparativo 2025/2026 + Power BI`
   - **Executar como**: `Eu (seu-email@...)`
   - **Quem pode acessar**: `Qualquer pessoa com uma Conta Google` (ou `Qualquer pessoa na sua organização` para restringir aos gestores).
4. Clique no botão azul **"Implantar"**.
5. Copie o **URL do Aplicativo da Web** gerado (ex: `https://script.google.com/macros/s/.../exec`).

Pronto! Esse link pode ser enviado diretamente para os Gestores ou aberto durante as reuniões individuais.

---

## 💡 Recursos do Portal
- **Aba 1 - Painel Comparativo:** Análise YTD justa, seletor de Unidades, Diagnóstico automático para cada gestor, ranking e gráficos.
- **Aba 2 - Power BI 2026:** Modelo oficial 2026 incorporado em tela cheia com botão de recarregar.
- **Aba 3 - Power BI 2025:** Modelo histórico 2025 incorporado.
- **Botão Imprimir Ficha do Gestor:** Formata automaticamente em folha A4 limpa para reunião presencial ou exportação em PDF.
