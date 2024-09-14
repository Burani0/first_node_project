const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const formRoutes = require('./routes/formRoutes'); // Importing form routes

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/studentForms')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB', err));

// Set the view engine to Pug
app.set('view engine', 'pug');

// Set the directory for views
app.set('views', path.join(__dirname, 'views'));

// Use body-parser to handle form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files (e.g., CSS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Use form routes
app.use('/', formRoutes); // Use routes defined in formRoutes.js

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
