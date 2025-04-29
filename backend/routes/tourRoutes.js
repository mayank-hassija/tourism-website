// backend/routes/tourRoutes.js

import express from 'express';
import Tour from '../models/Tour.js';

const router = express.Router();

/**
 * @route   GET /api/tours
 * @desc    Fetch all tours
 * @access  Public
 */
router.get('/', async (req, res) => {
  try {
    const tours = await Tour.find();
    res.json(tours);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
});

/**
 * @route   POST /api/tours
 * @desc    Create a new tour
 * @access  Public
 */
router.post('/', async (req, res) => {
  try {
    const newTour = new Tour(req.body);
    await newTour.save();
    res.status(201).json(newTour);
  } catch (err) {
    res.status(400).json({ message: 'Invalid data', error: err.message });
  }
});

/**
 * @route   DELETE /api/tours/:id
 * @desc    Delete a tour by ID
 * @access  Public
 */
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Tour.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Tour not found' });
    }
    res.json({ message: 'Tour deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
});

export default router;
