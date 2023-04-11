const { BlogPost, PostCategory, User, Category } = require('../models');
const { validExistCategoryIds, 
  // validPostOwner
 } = require('./validations');

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

const validPostOwnerHERE = async (postId, currentUserId) => { // Essa função gera problema no arquivo validation
  console.log(postId);
  const post = await getPost(postId);
  if (post.type) return post;
  const { dataValues: { userId } } = post.message;
  
  if (userId !== currentUserId) return { type: 'UNAUTHORIZED', message: 'Unauthorized user' };
  return { type: null };
};

const updatePost = async (postId, currentUserId, { title, content }) => {
  const error = await validPostOwnerHERE(postId, currentUserId);
  if (error.type) return error;

  const [id] = await BlogPost.update({ title, content }, { where: { id: postId } });
  const { message } = await getPost(id);
  
  return { type: null, message };
};

const deletePost = async (postId, userId) => {
  const error = await validPostOwnerHERE(postId, userId);
  if (error.type) return error;

  await PostCategory.destroy({ where: { postId } });
  await BlogPost.destroy({ where: { id: postId } });

  return { type: null };
};

module.exports = {
  newPost,
  getAll,
  getPost,
  updatePost,
  deletePost,
};