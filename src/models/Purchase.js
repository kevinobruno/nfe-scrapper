'use strict';

module.exports = (sequelize, DataTypes) => {
  const Purchase = sequelize.define('Purchase', {
    purchasedAt: {
      type: DataTypes.DATE,
      field: 'purchased_at',
    },
  }, {
    timestamps: false,
    underscored: true,
    defaultScope: {
      attributes: { exclude: ['invoice_id'] }
    },
  });

  Purchase.associate = function(models) {
    Purchase.belongsTo(models.Invoice, { foreignKey: 'invoice_id', as: 'invoice' });
    Purchase.belongsToMany(models.Product, {
      through: models.PurchaseProduct,
      as: { singular: 'product', plural: 'products' },
    });
  };

  return Purchase;
};
