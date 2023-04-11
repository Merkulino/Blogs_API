const express = require('express');
const { postController } = require('../controllers');
const { validateToken, validateNewPostInputs } = require('../middlewares/validateInputs');

const route = express.Router();

route.post(
  '/', 
  validateToken,
  validateNewPostInputs,
  postController.newPost,
  ); 

route.get(
  '/', 
  validateToken,
  postController.getAll,
); 

route.get(
  '/:id', 
  validateToken,
  postController.getPost,
); 

module.exports = route;