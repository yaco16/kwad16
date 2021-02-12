const express = require('express');
const router = new express.Router();
const userController = require('./controllers/userController');

router.post('/signUp', userController.create);

module.exports = router;
