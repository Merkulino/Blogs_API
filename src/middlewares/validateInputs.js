const { loginInputs, newUserInputs } = require('./joi');

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

module.exports = {
  validateLoginInput,
  validateNewUserInputs,
};