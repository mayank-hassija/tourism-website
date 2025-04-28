import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import tourRoutes from './routes/tourRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/tours', tourRoutes);

// MongoDB Connection
const MONGO_URI = process.env.MONGODB_URI || 'mongodb+srv://mayankhassija:mh050504@cluster0.1d9idks.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start Server
const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
  res.send('API is running...');
});
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));
