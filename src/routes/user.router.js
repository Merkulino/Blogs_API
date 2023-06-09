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
  '/:id',
  validateToken,
  userController.getUserByID,
);

route.get(
  '/',
  validateToken,
  userController.getUsers,
);

route.delete(
  '/:me',
  validateToken,
  userController.deleteUser,
);

module.exports = route;