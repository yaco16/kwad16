/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./router');

const app = express();
const PORT = process.env.PORT || 3500;

app.use(
  cors({
    origin: '*',
  }),
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`Back server started on port ${PORT}`);
});
