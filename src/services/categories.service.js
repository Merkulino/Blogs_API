const { Category } = require('../models');

// Extra: Adicionar uma verificação se já existe a categoria
const newCategory = async ({ name }) => { 
  const newCategoryAdded = await Category.create({ name });
  return { type: null, message: newCategoryAdded };
};

const getCategories = async () => Category.findAll();

module.exports = {
  newCategory,
  getCategories,
};
