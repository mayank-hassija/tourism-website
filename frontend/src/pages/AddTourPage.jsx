// frontend/src/pages/AddTourPage.jsx

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";

// Backend API base URL from environment variable
const API_URL = process.env.REACT_APP_API_URL;

function AddTourPage() {
  // Form state for the new tour
  const [tour, setTour] = useState({
    title: "",
    description: "",
    location: "",
    price: "",
    image: "",
  });

  const navigate = useNavigate();

  // Handle form submission
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/api/tours`, tour);
      navigate("/"); // Navigate back to tours list after success
    } catch (error) {
      console.error("Error adding tour:", error);
    }
  }

  // Handle input changes
  function handleChange(e) {
    setTour({ ...tour, [e.target.name]: e.target.value });
  }

  return (
    <div className="container">
      <h1>Add New Tour</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={tour.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={tour.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={tour.location}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={tour.price}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={tour.image}
          onChange={handleChange}
        />
        <button type="submit">Add Tour</button>
      </form>
    </div>
  );
}

export default AddTourPage;
