const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET || 'secretJWT';

const jwtConfig = {
  expiresIn: '5d',
  algorithm: 'HS256',
};

const generateToken = (payload) => jwt.sign(payload, secretKey, jwtConfig);

const verifyToken = (token) => {
  try {
    const decode = jwt.verify(token, secretKey);
    return decode;
    // return decode;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  generateToken,
  verifyToken,
};
