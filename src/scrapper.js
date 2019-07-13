const cheerio = require('cheerio');
const request = require('request');

getProducts = (nfc) => {
  const products = [];
  const nfcProducts = nfc.find('> tr:nth-child(3) > td > table > tbody');

  let i = 2;
  let product = nfcProducts.find(`> tr:nth-child(${i})`);

  do {
    const code = product.find('> td:nth-child(1)').text();
    const description = product.find('> td:nth-child(2)').text();
    const quantity = product.find('> td:nth-child(3)').text();
    const unitValue = product.find('> td:nth-child(5)').text();
    const totalValue = product.find('> td:nth-child(6)').text();

    products.push({ code, description, quantity, unitValue, totalValue });

    i++;
    product = nfcProducts.find(`> tr:nth-child(${i})`);
  } while (product != '');

  return products;
};

getMarketInfo = (nfc) => {
  const name = nfc.find('> tr:nth-child(1) > td > table:nth-child(1) > tbody > tr:nth-child(1) > td:nth-child(2)').text();
  const address = nfc.find('> tr:nth-child(1) > td > table:nth-child(2) > tbody > tr > td').text();

  const regex = /^(.*),(.*),(.*),(.*),(.*),(.*)/gm;
  const appliedRegex = regex.exec(address.replace(/\s/g,''));
  const street = /^(.*),/.exec(address)[1];
  const number = appliedRegex[2];
  const neighborhood = appliedRegex[4];
  const city = appliedRegex[5];
  const state = appliedRegex[6];

  return { name, address: { street, number, neighborhood, city, state } };
};

getInvoiceInfo = (nfc) => {
  const invoice = nfc.find('tr:nth-child(5) > td > table > tbody');
  const generalInfo = invoice.find('> tr:nth-child(2) > td').text().replace(/\s/g,'');

  const regex = /^Número\:(.*)Série\:(.*)DatadeEmissão\:(.*)-/gm;
  const appliedRegex = regex.exec(generalInfo);
  const number = appliedRegex[1];
  const serie = appliedRegex[2];
  const issueDate = appliedRegex[3];

  const accessKey = invoice.find('> tr:nth-child(5) > td').text().replace(/\s/g,'');

  return { number, serie, issueDate, accessKey };
};

getTotalValue = (nfc) => nfc.find('> tr:nth-child(4) > td > table > tbody > tr:nth-child(2) > td:nth-child(2)').text();

module.exports  = (url) => {
  return new Promise(function(resolve, reject) {
    request(url, (error, response, body) => {
      if (error) return reject(error);

      const $ = cheerio.load(body);    
      const nfc = $('table').find('#tbLeiauteDANFENFCe > tbody > tr > td > table > tbody');

      resolve({
        totalValue: getTotalValue(nfc),
        invoice: getInvoiceInfo(nfc),
        market: getMarketInfo(nfc),
        products: getProducts(nfc),
      });
    });
  });
};;
