const { User } = require('../models');
const { validExistUser } = require('./validations');
const { generateToken } = require('../auth/token');

const newUser = async ({ displayName, email, password, image }) => {
  const error = await validExistUser(email);
  if (error.type) return error;

  await User.create({ displayName, email, password, image });
  
  const token = generateToken({ displayName, email, image });

  return { type: null, message: token };
};

module.exports = {
  newUser,
};
