const to = require('await-to-js').default;
const scrapper = require('../scrapper');
const { additionalInfoInvoice, defaultInvoice } = require('../__mocks__/scrapper');

describe('given: scrapper', () => {
  describe('when: valid invoice url is provided', () => {
    test('then: it should scrap the page correctly', async () => {
      const url = 'https://sistemas.sefaz.am.gov.br/nfceweb/consultarNFCe.jsp?p=13190622991939001250650100001444511002312092|2|1|1|E878E999081D177A356C287BF7B524FAFAEC544D';

      const [err, scrap] = await to(scrapper(url));

      expect(err).toBe(null);
      expect(scrap).toStrictEqual(defaultInvoice);
    });
  });

  describe('when: valid invoice url with additional info is provided', () => {
    test('then: it should scrap the page correctly', async () => {
      const url = 'http://sistemas.sefaz.am.gov.br/nfceweb/consultarNFCe.jsp?p=13190710713693000113650350004638841567420423|2|1|1|A2520183E9E9FF4F7D1C934B3C3066CD4547CEFC';

      const [err, scrap] = await to(scrapper(url));

      expect(err).toBe(null);
      expect(scrap).toStrictEqual(additionalInfoInvoice);
    });
  });

  describe('when: url provided is not an invoice url', () => {
    test('then: it should not scrap the page', async () => {
      const url = 'https://sistemas.sefaz.am.gov.br';

      const [err, scrap] = await to(scrapper(url));

      expect(err).not.toBe(null);
      expect(scrap).toBe(undefined);
    });
  });

  describe('when: url provided don\'t exists', () => {
    test('then: it should not scrap the page', async () => {
      const url = 'https://sistemas.sefaz.a.gov.br';

      const [err, scrap] = await to(scrapper(url));

      expect(err).not.toBe(null);
      expect(scrap).toBe(undefined);
    });
  });
});
