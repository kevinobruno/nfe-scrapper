// const to = require('await-to-js').default;
// const scrapper = require('./scrapper');

// const testUrl = 'https://sistemas.sefaz.am.gov.br/nfceweb/consultarNFCe.jsp?p=13190622991939001250650100001444511002312092|2|1|1|E878E999081D177A356C287BF7B524FAFAEC544D';
// // const testUrl = 'https://sistemas.sefaz.am.gov.br/nfceweb/consultarNFCe.jsp?p=13190622991939001250650100001444521008671237|2|1|1|3ECECC3E6D890D373E891308A4247CFCF2202E21';

// scrapInvoiceUrl = async (url) => {
//   const [err, result] = await to(scrapper(url));
//   console.log(err);
//   console.log(result);
// };

// scrapInvoiceUrl(testUrl);

const server = require('./server');

server.listen(process.env.PORT || 3031);
