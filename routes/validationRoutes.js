const express = require('express');
const { validateData } = require('../controllers/validationController');

const router = express.Router();

router.post('/validate', validateData);

module.exports = router;
