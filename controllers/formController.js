const Form = require('../models/Form');

// Render the form
exports.renderForm = (req, res) => {
  res.render('index');
};

exports.submitForm = async (req, res) => {
  try {
    const formData = new Form(req.body);
    await formData.save();
    
    // Redirect the user back to the form page after successful submission
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error submitting the form.');
  }
};

