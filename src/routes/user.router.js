const express = require('express');

const route = express.Router();

route.get('/', (req, res) => {
  res.status(200).json({ message: 'user it works!' });
});

module.exports = route;