const { User, Category } = require('../models');

const validExistUser = async (email) => {
  const user = await User.findAll({ where: { email } });
  if (user.length > 0) return { type: 'CONFLICT', message: 'User already registered' };
  return { type: null, message: 'Teste' };
};

// const validExistPost = async (email) => {
//   const user = await User.findAll({ where: { email } });
//   if (user.length > 0) return { type: 'CONFLICT', message: 'User already registered' };
//   return { type: null, message: 'Teste' };
// };

const validExistCategoryIds = async (ids) => {
  const result = ids.map(async (currentId) => Category.findByPk(currentId));
  const dataValues = await Promise.all(result);

  if (dataValues.some((value) => value === null)) {
    return { type: 'BAD_REQUEST', message: 'one or more "categoryIds" not found' };
  } 
  return { type: null, message: 'ok' };
};

module.exports = {
  validExistUser,
  validExistCategoryIds,
};
