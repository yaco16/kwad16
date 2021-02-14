/* eslint-disable no-console */
const mainController = {
  submitMail: (req, res) => {
    res.status(200).json(req.body);
  },
};

module.exports = mainController;
