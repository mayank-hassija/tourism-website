## 🌍 Tourism Website

A full-stack **Tourism Management Website** built with **React**, **Express.js**, and **MongoDB**.  
Users can view, add, edit, and delete tours.

---

### 🚀 Features
- 🧭 Browse all available tours  
- 🔍 View detailed information on each tour  
- ➕ Add a new tour  
- ✏️ Edit existing tour details  
- ❌ Delete a tour  
- 📱 Responsive and clean UI  

---

### 🛠️ Tech Stack
- **Frontend**: React, Vite, Axios, React Router DOM  
- **Backend**: Express.js, MongoDB, Mongoose  
- **Deployment**: [Render.com](https://render.com) (Frontend & Backend)

---

### 🌐 Live Demo

- **Frontend**: https://frontend-dvwq.onrender.com/
- **Backend API**: https://tourism-website-3g45.onrender.com/

---

### 📂 Project Structure
```
/frontend
  ├── public/
  ├── src/
      ├── pages/
      ├── App.jsx
      ├── main.jsx
/backend
  ├── models/
      ├── Tour.js
  ├── routes/
      ├── tourRoutes.js
  ├── server.js
```

---

### ⚙️ Setup Instructions

#### 1. Clone the repository
```bash
git clone https://github.com/yourusername/tourism-website.git
cd tourism-website
```

#### 2. Install dependencies

Backend:
```bash
cd backend
npm install
```

Frontend:
```bash
cd ../frontend
npm install
```

#### 3. Configure Environment Variables

In `backend/.env`:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

In `frontend/.env` (optional if you want to use env vars for API URL):
```
VITE_API_URL=https://your-backend.onrender.com/api
```

#### 4. Run locally

Backend:
```bash
npm start
```

Frontend:
```bash
npm run dev
```

---

### ✨ Future Improvements
- 🔐 User Authentication
- 📅 Tour Booking System
- 🧑‍💼 Admin Dashboard
- 🎨 Enhanced UI/UX

---

### 📸 Screenshots

![image](https://github.com/user-attachments/assets/307d68ce-2146-42e5-90cb-c455b2ca3bea)

---

### 👨‍💻 Author
- **Mayank Hassija**  
  [GitHub: mayank-hassija](https://github.com/mayank-hassija)

---
