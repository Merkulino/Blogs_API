const express = require('express');

const app = express();
const { loginRoute, categoriesRoute, postRoute, userRoute } = require('./routes');

app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/login', loginRoute);
app.use('/user', userRoute);
app.use('/categories', categoriesRoute);
app.use('/post', postRoute);

module.exports = app;
