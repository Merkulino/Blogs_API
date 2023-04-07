const { User } = require('../models');

const validExistUser = async (email) => {
  const user = await User.findAll({ where: { email } });
  if (user.length > 0) return { type: 'CONFLICT', message: 'User already registered' };
  return { type: null, message: 'Teste' };
};

module.exports = {
  validExistUser,
};
