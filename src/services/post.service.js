const { BlogPost, PostCategory, User, Category } = require('../models');
const { validExistCategoryIds } = require('./validations');

const newPost = async ({ title, content, categoryIds }, userId) => { // Refatorar?
  const error = await validExistCategoryIds(categoryIds);
  if (error.type) return error;
  
  const { dataValues } = await BlogPost.create({ title, content, categoryIds });

  const insertIntoPostCategoryTable = categoryIds
    .map((cat) => PostCategory.create({ postId: dataValues.id, categoryId: cat }));
  await Promise.all(insertIntoPostCategoryTable);

  return { type: null, message: { ...dataValues, userId } };
};

const getAll = async () => {
  const response = await BlogPost.findAll({ 
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', attributes: { exclude: ['PostCategory'] } }, // esse exclude n funciona
    ],
  });
  return { type: null, message: response };
};

const getPost = async () => {
  // const response = await BlogPost.findByPk(id);
};

module.exports = {
  newPost,
  getAll,
  getPost,
};