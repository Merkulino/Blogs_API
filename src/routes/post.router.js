const express = require('express');
const { postController } = require('../controllers');
const { validateToken, validateNewPostInputs, 
        validatePostInputs } = require('../middlewares/validateInputs');

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

route.put(
  '/:id', 
  validateToken,
  validatePostInputs,
  postController.updatePost,
); 

route.delete(
  '/:id', 
  validateToken,
  postController.deletePost,
); 

module.exports = route;