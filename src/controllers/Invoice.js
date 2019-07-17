const Queue = require('../services/Queue');
const { InvoiceScrapper } = require('../jobs');

class InvoiceController {
  async create(req, res) {
    const { invoice_url: invoiceUrl } = req.body;
    Queue.create(InvoiceScrapper.key, { invoiceUrl }).save();

    return res.send();
  }
}

module.exports = new InvoiceController();
