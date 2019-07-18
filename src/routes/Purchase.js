const { Purchase: Controller } = require('../controllers');

const routify = (router) => {
  router.get('/v1/purchases', Controller.list);
};

module.exports = routify;
