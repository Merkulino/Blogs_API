const { loginService } = require('../services');
const mapHttpError = require('../utils/errorMap');

const loginUser = async (req, res) => {
  const userData = req.body;

  const result = await loginService.getByEmailAndPassword(userData);
  if (result.type) return res.status(mapHttpError(result.type)).json({ message: result.message });

  return res.status(200).json({ token: result.message });
};

module.exports = {
  loginUser,
};
