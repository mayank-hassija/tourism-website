import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ToursPage from "./pages/ToursPage";
import TourDetailsPage from "./pages/TourDetailsPage";
import AddTourPage from "./pages/AddTourPage";
import EditTourPage from "./pages/EditTourPage";
import "./App.css";

// ✅ Simple Navbar component (you can later move it to its own file)
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🌍 TourExplorer</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/add-tour">Add Tour</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <Router>
      {/* Show navbar on all pages */}
      <Navbar />

      {/* Main App Container with page routing */}
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
