const Joi = require('joi');

const loginInputs = (body) => Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
}).validate(body);

const newUserInputs = (body) => Joi.object({
  displayName: Joi.string().required().min(8),
  password: Joi.string().required().min(6),
  email: Joi.string().required().email(),
  image: Joi.string(),
}).validate(body);

const validName = (name) => Joi.string().required().label('name').validate(name);

const newPostInputs = (body) => Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().items(Joi.number()).required(),
}).validate(body);

const postInputs = (body) => Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
}).validate(body);

module.exports = {
  loginInputs,
  newUserInputs,
  validName,
  newPostInputs,
  postInputs,
};