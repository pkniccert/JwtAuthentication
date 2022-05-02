const express = require('express');
const { signup, signin } = require('../controller/users');

const router = express.Router();

router.post('/login', signin);

router.post('/register', signup);


module.exports = router;