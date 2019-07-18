const { Invoice: Controller } = require('../controllers');
const { Invoice: Validator } = require('../validators');

const routify = (router) => {
  router.post('/v1/invoices', Validator.create, Controller.create);
};

module.exports = routify;
