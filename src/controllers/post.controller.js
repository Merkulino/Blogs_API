const mapHttpError = require('../utils/errorMap');
const { postService } = require('../services');

const newPost = async (req, res) => {
  const post = req.body;
  const { currentUser } = req;
  const { type, message } = await postService.newPost(post, currentUser);
  if (type) return res.status(mapHttpError(type)).json({ message });
  res.status(201).json(message);
};

const getAll = async (req, res) => {
  const { type, message } = await postService.getAll();
  if (type) return res.status(mapHttpError(type)).json({ message });
  res.status(200).json(message);
};

const getPost = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await postService.getPost(id);
  if (type) return res.status(mapHttpError(type)).json({ message });
  res.status(200).json(message);
};

module.exports = {
  newPost,
  getAll,
  getPost,
};