// backend/models/Tour.js

import mongoose from 'mongoose';

// Define the schema for a Tour
const tourSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true        // Tour must have a title
  },
  description: {
    type: String          // Optional tour description
  },
  location: {
    type: String          // Optional tour location
  },
  price: {
    type: Number          // Optional price field
  },
  image: {
    type: String          // Optional image URL
  }
}, {
  timestamps: true         // Automatically adds createdAt and updatedAt fields
});

// Create and export the model
const Tour = mongoose.model('Tour', tourSchema);
export default Tour;
