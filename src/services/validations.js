const { User, Category } = require('../models');
// const { getPost } = require('./post.service');

const validExistUser = async (email) => {
  const user = await User.findAll({ where: { email } });
  if (user.length > 0) return { type: 'CONFLICT', message: 'User already registered' };
  return { type: null, message: 'Teste' };
};

const validExistCategoryIds = async (ids) => {
  const result = ids.map(async (currentId) => Category.findByPk(currentId));
  const dataValues = await Promise.all(result);

  if (dataValues.some((value) => value === null)) {
    return { type: 'BAD_REQUEST', message: 'one or more "categoryIds" not found' };
  } 
  return { type: null, message: 'ok' };
};

// const validPostOwner = async (postId, currentUserId) => { ---> Não sei porque mas da erro chamando a service aqui
//   console.log(postId);
//   const post = await getPost(postId);
//   if (post.type) return post;
//   const { dataValues: { userId } } = post.message;

//   if (userId !== currentUserId) return { type: 'UNAUTHORIZED', message: 'Unauthorized user' };
//   return { type: null };
// };

module.exports = {
  validExistUser,
  validExistCategoryIds,
  // validPostOwner,
};
