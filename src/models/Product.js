'use strict';

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    code: DataTypes.STRING,
    description: DataTypes.STRING,
    value: DataTypes.FLOAT,
    unity: DataTypes.STRING,
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

  Product.associate = function(models) {
    Product.belongsToMany(models.Purchase, {
      through: models.PurchaseProduct,
      as: { singular: 'product', plural: 'products' },
    });
  };

  return Product;
};
