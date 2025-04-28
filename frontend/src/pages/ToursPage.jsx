import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css"; // Make sure to import styling

function ToursPage() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTours() {
      try {
        const response = await axios.get("https://tourism-website-3g45.onrender.com/api/tours");
        setTours(response.data);
      } catch (error) {
        console.error("Error fetching tours:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchTours();
  }, []);

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
            <h2>
              <Link to={`/tour/${tour._id}`} style={{ color: "#007bff" }}>
                {tour.title}
              </Link>
            </h2>
            <p>{tour.description.length > 100 ? tour.description.slice(0, 100) + "..." : tour.description}</p>
            <p><strong>Location:</strong> {tour.location}</p>
            <p><strong>Price:</strong> ${tour.price}</p>

            <div style={{ marginTop: "10px" }}>
              <Link to={`/edit-tour/${tour._id}`} style={{ marginRight: "15px", color: "green" }}>
                Edit
              </Link>
              <button
                onClick={async () => {
                  if (window.confirm("Are you sure you want to delete this tour?")) {
                    try {
                      await axios.delete(`https://tourism-website-3g45.onrender.com/api/tours/${tour._id}`);
                      setTours(tours.filter((t) => t._id !== tour._id));
                    } catch (error) {
                      console.error("Error deleting tour:", error);
                    }
                  }
                }}
                style={{ backgroundColor: "#dc3545" }}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}

      {/* Add Tour Link at bottom */}
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <Link to="/add-tour">
          <button>Add New Tour</button>
        </Link>
      </div>
    </div>
  );
}

export default ToursPage;
