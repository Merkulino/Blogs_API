const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET || 'secretJWT';

const jwtConfig = {
  expiresIn: '5d',
  algorithm: 'HS256',
};

const generateToken = (payload) => jwt.sign(payload, secretKey, jwtConfig);

module.exports = {
  generateToken,
};
