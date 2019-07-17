const to = require('await-to-js').default;
const Scrapper = require('../services/Scrapper');
const { Invoice, Product, Purchase, PurchaseProduct } = require('../models');

class InvoiceScrapper {
  get key() {
    return 'InvoiceScrapper';
  }

  async handle(job, done) {
    const { invoiceUrl } = job.data;

    const [err, response] = await to(Scrapper(invoiceUrl));

    if (err) return done();

    try {
      const invoice = await Invoice.create(response.invoice);
      const purchase = await Purchase.create({ invoice_id: invoice.id, purchasedAt: response.invoice.issueDate });
      
      for (const p of response.products) {
        let product = await Product.findOne({ where: { code: p.code, value: p.value } });
        if (!product) product = await Product.create(p);

        const purchaseProduct = await PurchaseProduct.findOne({ where: { purchase_id: purchase.id, product_id: product.id } });
        if (purchaseProduct) {
          purchaseProduct.quantity = purchaseProduct.quantity + p.quantity;
          await purchaseProduct.save();
        } else {
          await PurchaseProduct.create({ purchase_id: purchase.id, product_id: product.id, quantity: p.quantity });
        }
      }
    } catch (err) {
      console.log(err);
      return done();
    }

    return done();
  }
}

module.exports = new InvoiceScrapper();
