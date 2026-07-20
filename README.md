#TRAFFIC VISION-AI
# 🚦 TrafficVision AI

## Smart Traffic Prediction & Congestion Management System

TrafficVision AI is an AI-powered web application designed to monitor traffic conditions, manage congestion, and provide intelligent traffic insights. The system uses a React frontend, FastAPI backend, and PostgreSQL database to provide a secure and scalable platform.

---

## 📌 Project Overview

The objective of TrafficVision AI is to improve urban traffic management by providing a centralized dashboard for monitoring traffic conditions. Users can securely register, log in, and access a dashboard that displays traffic statistics and congestion information.

This project is being developed as a Final Year B.Tech Mini Project.

---

## 🚀 Features Implemented (Milestone 1)

- User Registration
- User Login
- JWT Authentication
- Secure Password Hashing (Argon2)
- Protected Dashboard
- Logout Functionality
- PostgreSQL Database Integration
- FastAPI REST APIs
- React Frontend
- Responsive User Interface

---

## 🛠 Technologies Used

### Frontend
- React.js
- React Router
- Axios
- React Icons

### Backend
- FastAPI
- Python
- SQLAlchemy
- Pydantic
- pwdlib (Argon2)

### Database
- PostgreSQL

### Tools
- VS Code
- Git
- GitHub
- Swagger UI
- pgAdmin

---

## 📂 Project Structure

```
TrafficVision-AI
│
├── backend
│   ├── app
│   ├── venv
│   ├── requirements.txt
│   └── main.py
│
├── frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── node_modules
│
└── README.md
```

---

## ⚙ Installation

### Clone Repository

```bash
git clone https://github.com/ChetanGoud77/TrafficVisionAI.git
```

---

### Backend

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

---

### Frontend

```bash
cd frontend

npm install

npm start
```

---

## Database

Create a PostgreSQL database named

```
trafficvision_db
```

Update the database credentials in

```
backend/app/database.py
```

---

## API Testing

Open Swagger UI

```
http://127.0.0.1:8000/docs
```

Available APIs

- Register User
- Login User

---

## Milestone 1 Completed

✔ GitHub Setup

✔ React Setup

✔ FastAPI Setup

✔ PostgreSQL Integration

✔ Registration API

✔ Login API

✔ JWT Authentication

✔ Protected Dashboard

✔ React–Backend Integration

✔ Professional User Interface

---

## Future Enhancements (Milestone 2)

- Live Traffic Prediction
- Google Maps Integration
- Traffic Analytics Dashboard
- AI-Based Congestion Detection
- Machine Learning Prediction Model
- Live Camera Feed
- Emergency Alert System

---

## Developed By

**Chetan Goud**

B.Tech CSE (AI & ML)
