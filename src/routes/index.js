const routify = (router) => {
  router.get('/', (req, res) => res.send('Hello World!'));
};

module.exports = [routify];
