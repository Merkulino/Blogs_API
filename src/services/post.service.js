const { BlogPost, PostCategory } = require('../models');
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

module.exports = {
  newPost,
};