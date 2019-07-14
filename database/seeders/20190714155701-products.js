'use strict';

const { Product } = require('../../src/models');

const products = [
  {
    code: '1015494',
    description: 'HAMBURG BOV DEF PERD 672G',
    value: 12.99,
  },
  {
    code: '1647083',
    description: 'PRES PERD TRAD FAT 200G',
    value: 6.99,
  },
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all(products.map(product => Product.create(product)));
  },

  down: (queryInterface, Sequelize) => {
    return Product.destroy({
      where: {
        code: operations.map(product => product.code),
      },
    });
  }
};
