// backend/server.js

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import tourRoutes from './routes/tourRoutes.js';

// Load environment variables from .env
dotenv.config();

const app = express();

// === Middleware ===
app.use(cors());              // Enable Cross-Origin Resource Sharing
app.use(express.json());      // Parse incoming JSON requests

// === Routes ===
app.use('/api/tours', tourRoutes);

// === MongoDB Connection ===
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://mayankhassija:mh050504@cluster0.asdfg.mongodb.net/tourDB?retryWrites=true&w=majority';

if (!MONGO_URI) {
  console.error('❌ MONGO_URI not set in environment variables.');
  process.exit(1);
}

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  });

// === Default Route (Health Check) ===
app.get('/', (req, res) => {
  res.send('🌍 Tourism API is running...');
});

// === Start Server ===
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
