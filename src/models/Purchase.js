'use strict';

module.exports = (sequelize, DataTypes) => {
  const Purchase = sequelize.define('Purchase', {
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

  Purchase.associate = function(models) {
    Purchase.belongsTo(models.Invoice, { foreignKey: 'invoice_id', as: 'invoice' });
  };

  return Purchase;
};
