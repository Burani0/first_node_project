const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  course: { type: String, required: true },
  entryScheme: { type: String, required: true },
  intake: { type: String, required: true },
  sponsorship: { type: String, required: true },
  gender: { type: String, required: true },
  dob: { type: String, required: true },
  residence: { type: String, required: true }
});

const Form = mongoose.model('Form', formSchema);
module.exports = Form;
