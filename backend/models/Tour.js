const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String },  // Add this line for storing image filename or URL
});

module.exports = mongoose.model('Tour', tourSchema);
