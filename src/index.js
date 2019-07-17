// const to = require('await-to-js').default;
// const scrapper = require('./scrapper');

// const testUrl = 'https://sistemas.sefaz.am.gov.br/nfceweb/consultarNFCe.jsp?p=13190622991939001250650100001444511002312092|2|1|1|E878E999081D177A356C287BF7B524FAFAEC544D';
// const testUrl = 'https://sistemas.sefaz.am.gov.br/nfceweb/consultarNFCe.jsp?p=13190622991939001250650100001444521008671237|2|1|1|3ECECC3E6D890D373E891308A4247CFCF2202E21';
// const testUrl = 'http://sistemas.sefaz.am.gov.br/nfceweb/consultarNFCe.jsp?p=13190710713693000113650350004638841567420423|2|1|1|A2520183E9E9FF4F7D1C934B3C3066CD4547CEFC';
// const testUrl = 'http://sistemas.sefaz.am.gov.br/nfceweb/consultarNFCe.jsp?p=13190711102673000179652050000268061097056853|2|1|0|cfe83cc2fdd1b6c52cb28fb42bbf03d68757381e';

// scrapInvoiceUrl = async (url) => {
//   const [err, result] = await to(scrapper(url));
//   console.log(err);
//   console.log(result);
// };

// scrapInvoiceUrl(testUrl);

const server = require('./server');
server.listen(process.env.PORT || 3031);
