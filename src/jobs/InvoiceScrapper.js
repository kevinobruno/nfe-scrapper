const to = require('await-to-js').default;
const Scrapper = require('../services/Scrapper');

class InvoiceScrapper {
  get key() {
    return 'InvoiceScrapper';
  }

  async handle(job, done) {
    const { invoiceUrl } = job.data;

    const [err, result] = await to(Scrapper(invoiceUrl));

    if (err) return done();

    return done();
  }
}

module.exports = new InvoiceScrapper();
