const express = require('express');
const router = new express.Router();
const userController = require('./controllers/userController');

router.post('/signUp', userController.createUser);
router.post('/login', userController.login);
router.post('/submitMail', userController.submitMail);

module.exports = router;
