'use strict';

const { Purchase } = require('../../src/models');

const purchases = [
  {
    invoice_id: 1,
  },
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all(purchases.map(purchase => Purchase.create(purchase)));
  },

  down: (queryInterface, Sequelize) => {
    return Purchase.destroy({
      where: {
        invoice_id: purchases.map(purchase => purchase.invoice_id),
      },
    });
  }
};
