/* eslint-disable no-console */
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.NODEMAILER_MAIL,
    pass: process.env.NODEMAILER_PASSWORD,
  },
});

const sendMail = (receivedMail) => {
  const { name, email, message } = receivedMail;
  const mail = {
    to: process.env.NODEMAILER_MAIL,
    subject: 'New mail from kwad16.fr',
    text: `FROM: ${name}\nEMAIL: ${email}\n\nMESSAGE:\n${message}`,
  };

  transporter.sendMail(mail, (err, data) => {
    console.log(err, data);
  });
};

module.exports = sendMail;
