const express = require('express');

const route = express.Router();
const { validateLoginInput } = require('../middlewares/validateInputs');
const { loginUser } = require('../controllers/login.controller');

route.post('/', validateLoginInput, loginUser);

module.exports = route;