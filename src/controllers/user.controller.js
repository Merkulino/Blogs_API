const { userService } = require('../services');
const mapHttpError = require('../utils/errorMap');

const newUser = async (req, res) => { 
  const userData = req.body;

  const result = await userService.newUser(userData);
  if (result.type) return res.status(mapHttpError(result.type)).json({ message: result.message });

  res.status(201).json({ token: result.message });
};

const getUsers = async (req, res) => {
  const { currentUser } = req;
  const result = await userService.getUsers();
  console.log(currentUser);
  res.status(200).json(result.message);
};

module.exports = {
  newUser,
  getUsers,
};
