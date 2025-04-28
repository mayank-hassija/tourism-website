import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";

const API_URL = process.env.REACT_APP_API_URL;

function ToursPage() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTours() {
      try {
        const response = await axios.get(`${API_URL}/api/tours`);
        setTours(response.data);
      } catch (error) {
        console.error("Error fetching tours:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchTours();
  }, []);

  async function handleDelete(id) {
    if (window.confirm("Are you sure you want to delete this tour?")) {
      try {
        await axios.delete(`${API_URL}/api/tours/${id}`);
        setTours(tours.filter((tour) => tour._id !== id));
      } catch (error) {
        console.error("Error deleting tour:", error);
      }
    }
  }

  if (loading) {
    return <p className="loading">Loading tours...</p>;
  }

  return (
    <div className="container">
      <h1>Available Tours</h1>
      {tours.length === 0 ? (
        <p className="no-data">No tours found.</p>
      ) : (
        tours.map((tour) => (
          <div key={tour._id} className="tour-card">
            {tour.image && (
    <img
      src={tour.image}
      alt={tour.title}
      style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }}
    />
  )}
            <h2>
              <Link to={`/tour/${tour._id}`} style={{ color: "#007bff" }}>
                {tour.title}
              </Link>
            </h2>
            <p>{tour.description.length > 100 ? `${tour.description.slice(0, 100)}...` : tour.description}</p>
            <p><strong>Location:</strong> {tour.location}</p>
            <p><strong>Price:</strong> ${tour.price}</p>

            <div style={{ marginTop: "10px" }}>
              <Link to={`/edit-tour/${tour._id}`} style={{ marginRight: "15px", color: "green" }}>
                Edit
              </Link>
              <button
                onClick={() => handleDelete(tour._id)}
                style={{ backgroundColor: "#dc3545", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" }}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <Link to="/add-tour">
          <button style={{ padding: "10px 20px", fontSize: "16px" }}>Add New Tour</button>
        </Link>
      </div>
    </div>
  );
}

export default ToursPage;
