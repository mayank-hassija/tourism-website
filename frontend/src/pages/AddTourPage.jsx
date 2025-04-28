import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddTourPage() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        location: "",
        price: "",
        image: ""
    });

    const navigate = useNavigate();

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value.trimStart()
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await axios.post("https://tourism-website-3g45.onrender.com/api/tours", formData);
            navigate("/");
        } catch (error) {
            console.error("Error adding tour:", error);
        }
    }

    return (
        <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
            <h1>Add New Tour</h1>
            <form onSubmit={handleSubmit}>
                {["title", "description", "location", "price", "image"].map((field) => (
                    <div key={field} style={{ marginBottom: "10px" }}>
                        {field === "description" ? (
                            <textarea
                                name={field}
                                placeholder={capitalize(field)}
                                value={formData[field]}
                                onChange={handleChange}
                                required={field !== "image"}
                                style={{ width: "100%", padding: "8px", height: "100px" }}
                            />
                        ) : (
                            <input
                                type={field === "price" ? "number" : "text"}
                                name={field}
                                placeholder={
                                    field === "image"
                                        ? "Image URL (optional)"
                                        : capitalize(field)
                                }
                                value={formData[field]}
                                onChange={handleChange}
                                required={field !== "image"}
                                style={{ width: "100%", padding: "8px" }}
                            />
                        )}
                    </div>
                ))}
                <button type="submit" style={{ padding: "10px 20px" }}>
                    Add Tour
                </button>
            </form>
        </div>
    );
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export default AddTourPage;
