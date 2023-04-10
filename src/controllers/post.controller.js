const mapHttpError = require('../utils/errorMap');
const { postService } = require('../services');

const newPost = async (req, res) => {
  const post = req.body;
  const { currentUser } = req;
  const { type, message } = await postService.newPost(post, currentUser);
  if (type) return res.status(mapHttpError(type)).json({ message });
  res.status(201).json(message);
};

module.exports = {
  newPost,
};