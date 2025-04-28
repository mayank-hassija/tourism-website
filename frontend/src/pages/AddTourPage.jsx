import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddTourPage() {
  const navigate = useNavigate();
  const [tour, setTour] = useState({
    title: "",
    description: "",
    location: "",
    price: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setTour(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post("https://tourism-website-3g45.onrender.com/api/tours", tour);
      navigate("/");
    } catch (error) {
      console.error("Error adding tour:", error);
    }
  }

  return (
    <div className="container">
      <h1>Add New Tour</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" value={tour.title} onChange={handleChange} placeholder="Title" required />
        <textarea name="description" value={tour.description} onChange={handleChange} placeholder="Description" required />
        <input type="text" name="location" value={tour.location} onChange={handleChange} placeholder="Location" required />
        <input type="number" name="price" value={tour.price} onChange={handleChange} placeholder="Price" required />
        <button type="submit">Add Tour</button>
      </form>
    </div>
  );
}

export default AddTourPage;
