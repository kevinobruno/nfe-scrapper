const http = require('http-status-codes');
const { check } = require('express-validator');

const { Purchase } = require('../../models');

module.exports = [
  check('purchase_id').custom(async (value, { req }) => {
    if (!await Purchase.findByPk(value)) {
      req.statusCode = http.NOT_FOUND;
      return Promise.reject('purchase.details.purchase_id.not_found');
    }
  }),
];
