/* eslint-disable no-console */
const sendMail = require('../services/nodemailer');

const mainController = {
  submitMail: (req) => {
    sendMail(req.body);
  },
};

module.exports = mainController;
