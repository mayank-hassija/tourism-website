import mongoose from 'mongoose';

const tourSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  location: { type: String },
  price: { type: Number },
  image: { type: String } // <-- added this line
});

const Tour = mongoose.model('Tour', tourSchema);
export default Tour;
