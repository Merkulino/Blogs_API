const { categoryService } = require('../services');
const mapHttpError = require('../utils/errorMap');

const newCategory = async (req, res) => {
  const newCat = req.body;
  const { type, message } = await categoryService.newCategory(newCat);
  if (type) return res.status(mapHttpError(type)).json({ message }); // Se retornar um erro vai quebrar pq n to tratando isso em Service
  res.status(201).json(message);
};

const getCategories = async (req, res) => {
  const categories = await categoryService.getCategories();
  res.status(200).json(categories);
};

module.exports = {
  newCategory,
  getCategories,
};