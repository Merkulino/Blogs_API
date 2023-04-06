const { loginInputs } = require('./joi');

const validateLoginInput = (req, res, next) => {
  const data = req.body;
  const { error } = loginInputs(data);
  if (error) return res.status(400).json({ message: 'Some required fields are missing' });
  next();
};

module.exports = {
  validateLoginInput,
};