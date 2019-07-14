'use strict';

module.exports = (sequelize, DataTypes) => {
  const PurchaseProduct = sequelize.define('PurchaseProduct', {
    quantity: DataTypes.INTEGER,
  }, {
    timestamps: false,
  });

  PurchaseProduct.associate = function(models) {
    PurchaseProduct.belongsTo(models.Purchase, { foreignKey: 'purchase_id', as: 'purchase' });
    PurchaseProduct.belongsTo(models.Product, { foreignKey: 'product_id', as: 'product' });
  };

  return PurchaseProduct;
};
