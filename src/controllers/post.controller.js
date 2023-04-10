const newPost = (req, res) => {
  res.status(200).json({ message: 'posts works!' });
};

module.exports = {
  newPost,
};