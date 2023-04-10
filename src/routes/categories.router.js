const express = require('express');
const { categoryController } = require('../controllers');
const { validateToken, validateNameInput } = require('../middlewares/validateInputs');

const route = express.Router();

route.post(
  '/', 
  validateToken,
  validateNameInput,
  categoryController.newCategory,
);

module.exports = route;