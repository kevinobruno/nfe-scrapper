const { Invoice: Controller } = require('../controllers');

const routify = (router) => {
  router.post('/invoices', Controller.create);
};

module.exports = routify;
