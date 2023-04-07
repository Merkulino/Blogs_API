const { User } = require('../models');
const { generateToken } = require('../auth/token');

const getByEmailAndPassword = async ({ email, password }) => {
  const users = await User.findAll({ where: { email, password } });
  if (users.length === 0) return { type: 'BAD_REQUEST', message: 'Invalid fields' };
  
  const token = generateToken({ id: users[0].dataValues.id, email });

  return { type: null, message: token };
};

module.exports = {
  getByEmailAndPassword,
};