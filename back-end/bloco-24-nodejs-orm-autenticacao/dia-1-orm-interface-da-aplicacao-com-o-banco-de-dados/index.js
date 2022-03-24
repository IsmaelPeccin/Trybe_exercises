require('dotenv').config();

const express = require('express');

const { errorMiddleware } = require('./middlewares');

const app = express();

app.use(express.json());

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
