const express = require('express');
const router = express.Router();
const Tour = require('../models/Tour');

// GET all tours
router.get('/', async (req, res) => {
  try {
    const tours = await Tour.find();
    res.json(tours);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET a single tour by ID
router.get('/:id', async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    if (!tour) return res.status(404).json({ error: "Tour not found" });
    res.json(tour);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create new tour
router.post('/', async (req, res) => {
  try {
    const newTour = new Tour(req.body);
    const savedTour = await newTour.save();
    res.status(201).json(savedTour);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT update a tour
router.put('/:id', async (req, res) => {
  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedTour) return res.status(404).json({ error: "Tour not found" });
    res.json(updatedTour);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE a tour
router.delete('/:id', async (req, res) => {
  try {
    const deletedTour = await Tour.findByIdAndDelete(req.params.id);
    if (!deletedTour) return res.status(404).json({ error: "Tour not found" });
    res.json({ message: "Tour deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
