const { check } = require('express-validator');

module.exports = [
  check('invoice_url').exists().withMessage('invoice.create.invoice_id.required'),
];
