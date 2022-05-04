const express = require('express');
const auth = require('../middleware/auth');
const { dashboard, profile } = require('../controller/authPage');

const router = express.Router();

router.post('/dashboard', auth, dashboard);

router.post('/profile', auth, profile);


module.exports = router;