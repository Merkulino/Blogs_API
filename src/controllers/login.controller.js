const { generateToken } = require('../auth/token');
const { getByEmailAndPassword } = require('../services/login.service');
const mapHttpError = require('../utils/errorMap');

const loginUser = async (req, res) => {
  const userData = req.body;

  const result = await getByEmailAndPassword(userData);
  if (result.type) return res.status(mapHttpError(result.type)).json({ message: result.message });

  const token = generateToken({ email: userData.email });

  return res.status(200).json({ token });
};

module.exports = {
  loginUser,
};
