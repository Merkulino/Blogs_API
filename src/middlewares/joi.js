const Joi = require('joi');

const loginInputs = (body) => Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }).validate(body);

module.exports = {
  loginInputs,
};