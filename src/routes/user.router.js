const express = require('express');
const { userController } = require('../controllers');
const { validateNewUserInputs, validateToken } = require('../middlewares/validateInputs');

const route = express.Router();

route.post(
  '/', 
  validateNewUserInputs, 
  userController.newUser,
);

route.get(
  '/',
  validateToken,
  userController.getUsers,
  );

module.exports = route;