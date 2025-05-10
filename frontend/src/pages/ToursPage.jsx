import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css"; // Global styles

function ToursPage() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTours() {
      try {
        const response = await axios.get("https://tourism-website-3g45.onrender.com/api/tours");

        if (Array.isArray(response.data)) {
          setTours(response.data);
        } else {
          console.error("Tours API did not return an array:", response.data);
          setTours([]);
        }
      } catch (error) {
        console.error("Error fetching tours:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchTours();
  }, []);

  const deleteTour = async (id) => {
    if (window.confirm("Are you sure you want to delete this tour?")) {
      try {
        await axios.delete(`https://tourism-website-3g45.onrender.com/api/tours/${id}`);
        setTours((prevTours) => prevTours.filter((tour) => tour._id !== id));
      } catch (error) {
        console.error("Error deleting tour:", error);
      }
    }
  };

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
            <div style={{ textAlign: "center" }}>
              <h2>
<Link
  to={`/tour/${tour._id}`}
  style={{
    color: '#dc3545',  // Red color for the text
    textDecoration: 'none',  // No underline by default
    transition: 'color 0.3s, text-shadow 0.3s'  // Smooth transition for color and shadow
  }}
  onMouseEnter={(e) => {
    e.target.style.color = '#dc3545';  // Keep red on hover
    e.target.style.textShadow = '0 0 8px black, 0 0 10px black';  // Black highlight around the text
  }}
  onMouseLeave={(e) => {
    e.target.style.color = '#dc3545';  // Keep red when mouse leaves
    e.target.style.textShadow = 'none';  // Remove the shadow when mouse leaves
  }}
>
  {tour.title}
</Link>


              </h2>
            </div>

            {tour.image && (
              <img src={tour.image} alt={tour.title} className="tour-image" />
            )}

            <div
              style={{
                marginTop: "10px",
                display: "flex",
                gap: "10px",
                justifyContent: "center"
              }}
            >
              <Link to={`/edit-tour/${tour._id}`}>
                <button
                  style={{
                    backgroundColor: "#5bc0de",
                    color: "white",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "4px",
                    cursor: "pointer"
                  }}
                >
                  <i className="fas fa-pen-to-square" style={{ marginRight: "6px" }}></i>
                  Edit
                </button>
              </Link>

              <button
                onClick={() => deleteTour(tour._id)}
                style={{
                  backgroundColor: "#dc3545",
                  color: "white",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "4px",
                  cursor: "pointer"
                }}
              >
                <i className="fas fa-trash" style={{ marginRight: "6px" }}></i>
                Delete
              </button>
            </div>
          </div>
        ))
      )}

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <Link to="/add-tour">
          <button
            style={{
              backgroundColor: "#00b386",
              color: "#fff",
              padding: "10px 20px",
              fontSize: "16px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            <i className="fas fa-plus-circle" style={{ marginRight: "8px" }}></i>
            Add New Tour
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ToursPage;
