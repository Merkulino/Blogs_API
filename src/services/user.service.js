const { User } = require('../models');
const { validExistUser } = require('./validations');
const { generateToken } = require('../auth/token');

const NOT_FOUND_OBJ = { type: 'NOT_FOUND', message: 'User does not exist' };

const newUser = async ({ displayName, email, password, image }) => {
  const error = await validExistUser(email);
  if (error.type) return error;

  const user = await User.create({ displayName, email, password, image });
  
  const token = generateToken({ id: user.id, displayName, email, image });

  return { type: null, message: token };
};

const getUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return { type: null, message: users };
};

const getUserByID = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  
  if (user === null) return NOT_FOUND_OBJ;
  return { type: null, message: user };
};

const deleteUser = async (id) => {
  const user = await User.destroy({ where: { id } });
  
  if (user === null) return NOT_FOUND_OBJ;

  return { type: null };
};

module.exports = {
  newUser,
  getUsers,
  getUserByID,
  deleteUser,
};
