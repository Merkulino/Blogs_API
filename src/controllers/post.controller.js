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

const updatePost = async (req, res) => {
  const { currentUser } = req;
  const { id } = req.params;
  const field = req.body;

  const { type, message } = await postService.updatePost(Number(id), currentUser, field);
  if (type) return res.status(mapHttpError(type)).json({ message });
  res.status(200).json(message);
};

const deletePost = async (req, res) => {
  const { currentUser } = req;
  const { id } = req.params;
  const { type, message } = await postService.deletePost(Number(id), currentUser);
  if (type) return res.status(mapHttpError(type)).json({ message });
  res.status(204).send();
};

module.exports = {
  newPost,
  getAll,
  getPost,
  updatePost,
  deletePost,
};