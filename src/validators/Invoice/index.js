const validatorMiddleware = require('../../middlewares/validator');

module.exports = {
  create: [require('./Create'), validatorMiddleware],
};
