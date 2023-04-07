const { generateToken } = require('../auth/token');
const { loginService } = require('../services');
const mapHttpError = require('../utils/errorMap');

const loginUser = async (req, res) => {
  const userData = req.body;

  const result = await loginService.getByEmailAndPassword(userData);
  if (result.type) return res.status(mapHttpError(result.type)).json({ message: result.message });

  const token = generateToken({ email: userData.email });

  return res.status(200).json({ token });
};

module.exports = {
  loginUser,
};
