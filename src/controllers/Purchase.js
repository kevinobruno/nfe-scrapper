const { Purchase } = require('../models');

class PurchaseController {
  async list(req, res) {
    const purchases = await Purchase.findAll({ include: ['invoice', 'products'] });
    return res.send({ data: purchases });
  }
}

module.exports = new PurchaseController();
