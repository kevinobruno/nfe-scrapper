const validatorMiddleware = require('../../middlewares/validator');

module.exports = {
  details: [require('./Details'), validatorMiddleware],
};
