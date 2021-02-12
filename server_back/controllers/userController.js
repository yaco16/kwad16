/* eslint-disable no-console */
const userController = {
  create: (req, res) => {
    console.log('je suis dans userController');
    res.status(200).json('API connected');
  },
};

module.exports = userController;
