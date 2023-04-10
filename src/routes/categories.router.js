const express = require('express');
const { categoryController } = require('../controllers');
const { validateToken, validateNameInput } = require('../middlewares/validateInputs');

const route = express.Router();

route.get(
  '/', 
  validateToken,
  categoryController.getCategories,
);

route.post(
  '/', 
  validateToken,
  validateNameInput,
  categoryController.newCategory,
);

module.exports = route;