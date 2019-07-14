'use strict';

const { PurchaseProduct } = require('../../src/models');

const purchaseProducts = [
  {
    purchase_id: 1,
    product_id: 1,
    quantity: 1,
  },
  {
    purchase_id: 1,
    product_id: 2,
    quantity: 4,
  },
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all(purchaseProducts.map(purchaseProduct => PurchaseProduct.create(purchaseProduct)));
  },

  down: (queryInterface, Sequelize) => {
    return PurchaseProduct.destroy({
      where: {
        purchase_id: purchaseProducts.map(purchaseProduct => purchaseProduct.purchase_id),
      },
    });
  }
};
