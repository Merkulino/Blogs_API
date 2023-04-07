const express = require('express');

const route = express.Router();
const { validateLoginInput } = require('../middlewares/validateInputs');
const { loginController } = require('../controllers');

route.post('/', validateLoginInput, loginController.loginUser);

module.exports = route;