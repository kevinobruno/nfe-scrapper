'use strict';

module.exports = (sequelize, DataTypes) => {
  const Invoice = sequelize.define('Invoice', {
    number: DataTypes.STRING,
    serie: DataTypes.STRING,
    accessKey: {
      type: DataTypes.STRING,
      field: 'access_key',
    },
    issueDate: {
      type: DataTypes.DATE,
      field: 'issue_date',
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at',
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at',
    },
  }, {
    timestamps: true,
    underscored: true,
    defaultScope: {
      attributes: { exclude: ['createdAt', 'updatedAt'] }
    },
  });

  return Invoice;
};
