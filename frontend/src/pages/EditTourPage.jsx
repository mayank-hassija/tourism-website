import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditTourPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tour, setTour] = useState({
    title: "",
    description: "",
    location: "",
    price: "",
  });

  useEffect(() => {
    async function fetchTour() {
      try {
        const response = await axios.get(`https://tourism-website-3g45.onrender.com/api/tours/${id}`);
        setTour(response.data);
      } catch (error) {
        console.error("Error fetching tour:", error);
      }
    }
    fetchTour();
  }, [id]);

  function handleChange(e) {
    const { name, value } = e.target;
    setTour(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.put(`https://tourism-website-3g45.onrender.com/api/tours/${id}`, tour);
      navigate("/");
    } catch (error) {
      console.error("Error updating tour:", error);
    }
  }

  return (
    <div className="container">
      <h1>Edit Tour</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" value={tour.title} onChange={handleChange} placeholder="Title" required />
        <textarea name="description" value={tour.description} onChange={handleChange} placeholder="Description" required />
        <input type="text" name="location" value={tour.location} onChange={handleChange} placeholder="Location" required />
        <input type="number" name="price" value={tour.price} onChange={handleChange} placeholder="Price" required />
        <button type="submit">Update Tour</button>
      </form>
    </div>
  );
}

export default EditTourPage;
