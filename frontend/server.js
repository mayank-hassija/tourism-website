// frontend/server.js
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 10000;

// Serve static files from Vite's dist folder
app.use(express.static(path.join(__dirname, "dist")));

// Fallback for SPA routing
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Frontend server running on port ${port}`);
});
