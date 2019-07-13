const to = require('await-to-js').default;
const scrapper = require('../scrapper');
const expected = require('../__mocks__/scrapper');

describe('given: scrapper', () => {
  describe('when: valid invoice url is provided', () => {
    test('then: it should scrap the page correctly', async () => {
      const url = 'https://sistemas.sefaz.am.gov.br/nfceweb/consultarNFCe.jsp?p=13190622991939001250650100001444511002312092|2|1|1|E878E999081D177A356C287BF7B524FAFAEC544D';

      const [err, scrap] = await to(scrapper(url));

      expect(err).toBe(null);
      expect(scrap).toStrictEqual(expected);
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

  describe('when: url provided url don\'t exists', () => {
    test('then: it should not scrap the page', async () => {
      const url = 'https://sistemas.sefaz.a.gov.br';

      const [err, scrap] = await to(scrapper(url));

      expect(err).not.toBe(null);
      expect(scrap).toBe(undefined);
    });
  });
});
