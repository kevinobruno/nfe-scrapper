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
  });

  Purchase.associate = function(models) {
    Purchase.belongsTo(models.Invoice, { foreignKey: 'invoice_id', as: 'invoice' });
  };

  return Purchase;
};
