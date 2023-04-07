const express = require('express');
const { userController } = require('../controllers');
const { validateNewUserInputs } = require('../middlewares/validateInputs');

const route = express.Router();

route.post('/', validateNewUserInputs, userController.newUser);

module.exports = route;