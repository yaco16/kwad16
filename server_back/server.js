/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const router = require('./router');
const { HotModuleReplacementPlugin } = require('webpack');

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

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.NODEMAILER_MAIL,
    pass: process.env.NODEMAILER_PASSWORD,
  },
});

app.post('/submitMail', (req, res, next) => {
  // const content = ;

  const mail = {
    // from: req.body.email,
    to: 'yacodev@gmail.com',
    subject: 'New mail from kwad16.fr',
    // message: 'Test nodemailer',
    text: `FROM: ${req.body.name}\nEMAIL: ${req.body.email}\n\nMESSAGE:\n${req.body.message}`,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log('nodemailer : fail');
      res.status(400).json({
        status: 'fail',
      });
    } else {
      console.log('nodemailer : success');
      res.status(200).json({
        status: 'success',
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Back server started on port ${PORT}`);
});
