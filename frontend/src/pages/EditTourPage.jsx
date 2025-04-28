import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditTourPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        location: "",
        price: "",
        image: ""
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchTour() {
            try {
                const response = await axios.get(`http://localhost:5000/api/tours/${id}`);
                setFormData(response.data);
            } catch (error) {
                console.error("Error fetching tour:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchTour();
    }, [id]);

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/api/tours/${id}`, formData);
            navigate(`/tour/${id}`);
        } catch (error) {
            console.error("Error updating tour:", error);
        }
    }

    if (loading) {
        return <p>Loading tour details...</p>;
    }

    return (
        <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
            <h1>Edit Tour</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "10px" }}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "8px" }}
                    />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "8px", height: "100px" }}
                    />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "8px" }}
                    />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "8px" }}
                    />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <input
                        type="text"
                        name="image"
                        placeholder="Image URL (optional)"
                        value={formData.image}
                        onChange={handleChange}
                        style={{ width: "100%", padding: "8px" }}
                    />
                </div>
                <button type="submit" style={{ padding: "10px 20px" }}>
                    Update Tour
                </button>
            </form>
        </div>
    );
}

export default EditTourPage;
