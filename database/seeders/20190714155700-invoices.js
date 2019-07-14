'use strict';

const { Invoice } = require('../../src/models');

const invoices = [
  {
    number: '144451',
    serie: '10',
    issueDate: new Date('2019', '06', '19', '15', '18', '57', '0'),
    accessKey: '13190622991939001250650100001444511002312092'
  },
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all(invoices.map(invoice => Invoice.create(invoice)));
  },

  down: (queryInterface, Sequelize) => {
    return Invoice.destroy({
      where: {
        number: operations.map(invoice => invoice.number),
      },
    });
  }
};
