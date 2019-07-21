const { Purchase } = require('../models');
const { Purchase: Formatter } = require('../formatters');

class PurchaseController {
  async list(req, res) {
    const purchases = await Purchase.findAll({ include: ['invoice', 'products'] });
    const data = Formatter.list(purchases);
    return res.send({ data });
  }

  async details(req, res) {
    const { purchase_id: purchaseId } = req.params;
    const purchases = await Purchase.findOne({ where: { id: purchaseId }, include: ['invoice', 'products'] });
    const data = Formatter.details(purchases);
    return res.send({ data });
  }
}

module.exports = new PurchaseController();
