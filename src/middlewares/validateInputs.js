const { verifyToken } = require('../auth/token');
const { loginInputs, newUserInputs, validName } = require('./joi');

const validateLoginInput = (req, res, next) => {
  const data = req.body;
  const { error } = loginInputs(data);
  if (error) return res.status(400).json({ message: 'Some required fields are missing' });
  next();
};

const validateNewUserInputs = (req, res, next) => {
  const data = req.body;
  const { error } = newUserInputs(data);
  console.log(error);
  if (error) return res.status(400).json({ message: error.message });
  next();
};

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  const { id } = verifyToken(authorization);
  if (id === undefined) return res.status(401).json({ message: 'Expired or invalid token' });

  req.currentUser = id;
  next();
};

const validateNameInput = (req, res, next) => {
  const { name } = req.body;
  const { error } = validName(name);
  if (error) return res.status(400).json({ message: error.message });
  next();
};

module.exports = {
  validateLoginInput,
  validateNewUserInputs,
  validateToken,
  validateNameInput,
};