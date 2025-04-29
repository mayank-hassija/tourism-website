// frontend/src/App.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ToursPage from "./pages/ToursPage";
import TourDetailsPage from "./pages/TourDetailsPage";
import AddTourPage from "./pages/AddTourPage";
import EditTourPage from "./pages/EditTourPage";
import "./App.css";

function App() {
  return (
    <Router>
      {/* Main App Container with page routing */}
      <div style={{ padding: "20px", paddingTop: "20px" }}>
        <Routes>
          {/* Home - list of all tours */}
          <Route path="/" element={<ToursPage />} />

          {/* View a specific tour's details */}
          <Route path="/tour/:id" element={<TourDetailsPage />} />

          {/* Add a new tour */}
          <Route path="/add-tour" element={<AddTourPage />} />

          {/* Edit an existing tour */}
          <Route path="/edit-tour/:id" element={<EditTourPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
