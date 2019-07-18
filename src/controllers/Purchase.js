const { Purchase } = require('../models');

class PurchaseController {
  async list(req, res) {
    const purchases = await Purchase.findAll();
    return res.send({ data: purchases });
  }
}

module.exports = new PurchaseController();
