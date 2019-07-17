const { Invoice: Controller } = require('../controllers');
const { Invoice: Validator } = require('../validators');

const routify = (router) => {
  router.post('/invoices', Validator.create, Controller.create);
};

module.exports = routify;
