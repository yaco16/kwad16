const express = require('express');
const router = new express.Router();
const userController = require('./controllers/userController');
const mainController = require('./controllers/mainController');

router.post('/signUp', userController.createUser);
router.post('/login', userController.login);
router.post('/submitMail', mainController.submitMail);

module.exports = router;
