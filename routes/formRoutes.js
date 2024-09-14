const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

// Render the form (GET request)
router.get('/', formController.renderForm);

// Handle form submission (POST request)
router.post('/submit', formController.submitForm);

module.exports = router;
