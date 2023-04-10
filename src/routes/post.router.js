const express = require('express');
const { postController } = require('../controllers');

const route = express.Router();

route.get('/', postController.newPost); 

module.exports = route;