'use strict';

module.exports = (sequelize, DataTypes) => {
  const Invoice = sequelize.define('Invoice', {
    number: DataTypes.STRING,
    access_key: DataTypes.STRING,
    serie: DataTypes.STRING,
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
  });

  return Invoice;
};
