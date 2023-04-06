const { User } = require('../models');

const getByEmailAndPassword = async ({ email, password }) => {
  const users = await User.findAll({ where: { email, password } });
  if (users.length === 0) return { type: 'BAD_REQUEST', message: 'Invalid fields' };
  return { type: null, message: users };
};

module.exports = {
  getByEmailAndPassword,
};