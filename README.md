# 🌍 Tourism Website

A full-stack **Tourism Management Website** built with **React**, **Express.js**, and **MongoDB**.  
Users can view tours, add new tours, edit existing ones, and delete them.

## 🚀 Features
- View list of available tours
- View detailed information of a specific tour
- Add a new tour
- Edit existing tour details
- Delete a tour
- Responsive and clean UI

## 🛠️ Tech Stack
- **Frontend**: React, Axios, React Router
- **Backend**: Express.js, MongoDB, Mongoose
- **Deployment**: (To be added after deployment)

## 📂 Project Structure
```
/frontend
  ├── public/
  ├── src/
      ├── components/
      ├── pages/
      ├── App.jsx
      ├── index.jsx
/backend
  ├── models/
      ├── Tour.js
  ├── routes/
      ├── tourRoutes.js
  ├── server.js
```

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/tourism-website.git
cd tourism-website
```

### 2. Install dependencies

- For **backend**:
  ```bash
  cd backend
  npm install
  ```
- For **frontend**:
  ```bash
  cd frontend
  npm install
  ```

### 3. Configure Environment Variables
Create a `.env` file inside the `backend/` folder:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 4. Run the project locally
- Start backend:
  ```bash
  npm start
  ```
- Start frontend:
  ```bash
  npm run dev
  ```

### 5. Open in Browser
Frontend:  
`http://localhost:5173/`

Backend API:  
`http://localhost:5000/api/tours`

---

## ✨ Future Improvements
- User Authentication (Login/Signup)
- Booking system
- Better UI design
- Admin dashboard for managing tours

---

## 📸 Screenshots

(Add screenshots here after deployment.)

---

## 🧑‍💻 Author
- Mayank Hassija (https://github.com/mayank-hassija)

---
