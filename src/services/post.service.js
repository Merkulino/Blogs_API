const { BlogPost, PostCategory, User, Category } = require('../models');
const { validExistCategoryIds } = require('./validations');

const INCLUDE_USER_AND_CATEGORIES = { 
  include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', attributes: { exclude: ['PostCategory'] } }, // esse exclude n funciona
  ],
};

const newPost = async ({ title, content, categoryIds }, userId) => { // Refatorar? Pegar id e usar o getPost(id)
  const error = await validExistCategoryIds(categoryIds);
  if (error.type) return error;
  
  const { dataValues } = await BlogPost.create({ title, content, categoryIds });

  const insertIntoPostCategoryTable = categoryIds
    .map((cat) => PostCategory.create({ postId: dataValues.id, categoryId: cat }));
  await Promise.all(insertIntoPostCategoryTable);

  return { type: null, message: { ...dataValues, userId } };
};

const getAll = async () => {
  const response = await BlogPost.findAll(INCLUDE_USER_AND_CATEGORIES);
  return { type: null, message: response };
};

const getPost = async (id) => {
  const response = await BlogPost.findByPk(id, INCLUDE_USER_AND_CATEGORIES);
  if (response === null) return { type: 'NOT_FOUND', message: 'Post does not exist' };
  return { type: null, message: response };
};

module.exports = {
  newPost,
  getAll,
  getPost,
};