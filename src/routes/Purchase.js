const { Purchase: Controller } = require('../controllers');
const { Purchase: Validator } = require('../validators');

const routify = (router) => {
  router.get('/v1/purchases', Controller.list);
  router.get('/v1/purchases/:purchase_id', Validator.details, Controller.details);
};

module.exports = routify;
