var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController')

router.post('/register', usersController.create);
router.post('/login', usersController.auth);
router.post('/verify', usersController.verify);

module.exports = router;
