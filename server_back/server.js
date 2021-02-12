/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const router = require('./router');

const app = express();
const PORT = process.env.PORT || 3500;

app.use(router);
app.listen(PORT, () => {
  console.log(`Back server started on port ${PORT}`);
});
