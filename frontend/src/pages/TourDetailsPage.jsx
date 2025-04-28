import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function TourDetailsPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [tour, setTour] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchTour() {
            try {
                const response = await axios.get(`https://tourism-website-3g45.onrender.com/api/tours/${id}`);
                setTour(response.data);
            } catch (error) {
                console.error("Error fetching tour:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchTour();
    }, [id]);

    if (loading) {
        return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading tour details...</p>;
    }

    if (!tour) {
        return <p style={{ textAlign: "center", marginTop: "50px" }}>Tour not found.</p>;
    }

    return (
        <div style={{ padding: "20px", paddingTop: "80px", maxWidth: "800px", margin: "0 auto" }}>
            <h1 style={{ textAlign: "center", marginBottom: "30px" }}>{tour.title}</h1>

            {tour.image && (
                <img
                    src={tour.image}
                    alt={tour.title}
                    style={{
                        width: "100%",
                        height: "400px",
                        objectFit: "cover",
                        borderRadius: "10px",
                        marginBottom: "30px",
                    }}
                />
            )}

            <p style={{ fontSize: "18px", marginBottom: "20px", color: "#555" }}>
                {tour.description}
            </p>

            <div style={{ fontSize: "18px", marginBottom: "10px" }}>
                <strong>Location:</strong> {tour.location}
            </div>

            <div style={{ fontSize: "18px", marginBottom: "30px" }}>
                <strong>Price:</strong> ${tour.price}
            </div>

            {/* Back Button */}
            <div style={{ textAlign: "center" }}>
                <button
                    onClick={() => navigate("/")}
                    style={{
                        padding: "12px 24px",
                        backgroundColor: "#007bff",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        fontSize: "16px",
                        cursor: "pointer",
                    }}
                >
                    Back to Home
                </button>
            </div>
        </div>
    );
}

export default TourDetailsPage;
