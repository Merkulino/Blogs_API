const { Category } = require('../models');

const newCategory = async ({ name }) => { 
  // Extra: Adicionar uma verificação se já existe a categoria
  const newCategoryAdded = await Category.create({ name });
  return { type: null, message: newCategoryAdded };
};

const getCategories = async () => Category.findAll();

module.exports = {
  newCategory,
  getCategories,
};
