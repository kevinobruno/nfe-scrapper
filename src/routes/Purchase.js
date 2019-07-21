const { Purchase: Controller } = require('../controllers');

const routify = (router) => {
  router.get('/v1/purchases', Controller.list);
  router.get('/v1/purchases/:purchase_id', Controller.details);
};

module.exports = routify;
