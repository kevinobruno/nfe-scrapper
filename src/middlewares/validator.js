const http = require('http-status-codes');
const { validationResult } = require('express-validator');

module.exports = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const statusCode = req.statusCode || http.UNPROCESSABLE_ENTITY;
    return res.status(statusCode).send({ errors: errors.array() });
  }

  return next();
};
