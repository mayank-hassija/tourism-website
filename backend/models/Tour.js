import mongoose from 'mongoose';

const tourSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  price: {
    type: Number,
    required: true
  }
});

const Tour = mongoose.model('Tour', tourSchema);

export default Tour;
