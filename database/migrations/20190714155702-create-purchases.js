'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('purchases', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      invoice_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'invoices',
          key: 'id',
        },
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('purchases');
  }
};
