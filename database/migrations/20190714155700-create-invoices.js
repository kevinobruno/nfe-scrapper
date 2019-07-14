'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('invoices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      number: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      access_key: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      serie: {
        type: Sequelize.STRING,
      },
      issue_date: Sequelize.DATE,
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('invoices');
  }
};
