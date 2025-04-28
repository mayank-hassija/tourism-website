import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ToursPage from "./pages/ToursPage";
import TourDetailsPage from "./pages/TourDetailsPage";
import AddTourPage from "./pages/AddTourPage";
import EditTourPage from "./pages/EditTourPage";
import "./App.css";

function App() {
  return (
    <Router>
      {/* No Navbar here */}

      <div style={{ padding: "20px", paddingTop: "20px" }}>
        <Routes>
          <Route path="/" element={<ToursPage />} />
          <Route path="/tour/:id" element={<TourDetailsPage />} />
          <Route path="/add-tour" element={<AddTourPage />} />
          <Route path="/edit-tour/:id" element={<EditTourPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
