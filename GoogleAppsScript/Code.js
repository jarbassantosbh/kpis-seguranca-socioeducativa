/**
 * =======================================================================
 * SISTEMA DE GESTÃO E INTELIGÊNCIA EM SEGURANÇA SOCIOEDUCATIVA
 * Backend Google Apps Script (GAS) para Dashboard Executivo
 * Instituto Elo - Gestão de Unidades Socioeducativas
 * =======================================================================
 */

function doGet(e) {
  var template = HtmlService.createTemplateFromFile('index');
  
  // Parâmetros recebidos na requisição (ex: view, unit, event, period, scope)
  var params = (e && e.parameter) ? e.parameter : {};

  // Whitelist de chaves e caracteres permitidos (evita injeção de conteúdo na página)
  var allowedKeys = ['view', 'unit', 'event', 'period', 'scope'];
  var safeParams = {};
  allowedKeys.forEach(function (k) {
    if (params[k]) {
      safeParams[k] = String(params[k]).replace(/[^A-Za-z0-9_ \-\u00C0-\u00FF]/g, '').substring(0, 60);
    }
  });

  // URL oficial do Web App (/dev ou /exec conforme o acesso)
  var webAppUrl = '';
  try { webAppUrl = ScriptApp.getService().getUrl() || ''; } catch (err) { webAppUrl = ''; }

  // JSON injetado em bloco <script type="application/json"> (não executável)
  template.serverParamsJson = JSON.stringify({ params: safeParams, webAppUrl: webAppUrl })
    .replace(/</g, '\\u003c');

  // Títulos por demonstrativo para a aba independente do navegador
  var VIEW_TITLES = {
    chartCat: 'Demonstrativo de Eventos de Segurança',
    chartTrend: 'Comparativo de Eventos de Segurança',
    chartBenchmark: 'Comparativo Absoluto por Unidade',
    tableEvents: 'Quadro Comparativo de Eventos de Segurança',
    tableUnits: 'Quadro Comparativo por Unidade',
    tableMatrix: 'Matriz Geral de Eventos por Unidade'
  };
  var pageTitle = 'Painel Executivo de Eventos de Segurança';
  if (safeParams.view && VIEW_TITLES[safeParams.view]) {
    pageTitle = VIEW_TITLES[safeParams.view] + ' - Instituto Elo';
  }
  
  // Avalia o template e configura viewport responsivo e título
  var output = template.evaluate()
    .setTitle(pageTitle)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    
  return output;
}

/**
 * Função opcional para incluir arquivos parciais no HTML
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

/**
 * Retorna metadados consolidados do Painel
 */
function getSecurityMetadata() {
  return {
    titulo: "Painel Executivo de Eventos de Segurança",
    versao: "2.3.0",
    periodoComparativo: "Jan-Out 2025 vs Jan-Out 2026",
    totalUnidades: 13,
    powerBi2025Url: "https://app.powerbi.com/view?r=eyJrIjoiNDRkZDFkZTEtZjhjNy00MWUyLWFiYWMtMTI5ZTk1OTA1YjNlIiwidCI6IjhmZTFiMzYwLTFmNzYtNDBhNS1iOTlmLWU4NzZkYjhhZjdkNyJ9",
    powerBi2026Url: "https://app.powerbi.com/view?r=eyJrIjoiMDAxMjcxY2ItNWE2Ny00MjkwLWI5NTUtYmM1YWFmZWI0MTE1IiwidCI6IjhmZTFiMzYwLTFmNzYtNDBhNS1iOTlmLWU4NzZkYjhhZjdkNyJ9"
  };
}
