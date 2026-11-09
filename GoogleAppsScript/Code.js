/**
 * =======================================================================
 * SISTEMA DE GESTÃO E INTELIGÊNCIA EM SEGURANÇA SOCIOEDUCATIVA
 * Backend Google Apps Script (GAS) para Dashboard Executivo
 * Instituto Elo - Gestão de Unidades Socioeducativas
 * =======================================================================
 */

function doGet(e) {
  var template = HtmlService.createTemplateFromFile('index');
  
  // Avalia o template e configura viewport responsivo e título
  var output = template.evaluate()
    .setTitle('Painel Executivo de Eventos de Segurança')
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
