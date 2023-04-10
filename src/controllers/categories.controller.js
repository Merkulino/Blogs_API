const { categoryService } = require('../services');
const mapHttpError = require('../utils/errorMap');

const newCategory = async (req, res) => {
  const newCat = req.body;
  const { type, message } = await categoryService.newCategory(newCat);
  if (type) return res.status(mapHttpError(type)).json({ message });
  res.status(201).json(message);
};

module.exports = {
  newCategory,
};