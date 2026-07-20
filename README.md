# 🚦 TrafficVision AI
### Smart Traffic Prediction & Congestion Management System

TrafficVision AI is an AI-powered intelligent traffic monitoring system that detects vehicles, predicts traffic congestion, estimates travel time, and recommends optimal routes using Computer Vision and Machine Learning.

---

# 📌 Project Overview

The project simulates a smart traffic management system by processing traffic images from a dataset using YOLOv8. The detected vehicle information is stored in PostgreSQL and visualized through a React dashboard. The system also predicts future traffic conditions and generates reports for analysis.

---

# ✨ Features

### 🔐 Authentication
- User Registration
- User Login
- JWT Authentication

### 🤖 AI Vehicle Detection
- YOLOv8 Vehicle Detection
- Car Detection
- Bus Detection
- Truck Detection
- Motorcycle Detection
- Vehicle Counting

### 🚦 Traffic Analysis
- Congestion Level Detection
- Traffic Volume Prediction
- Travel Time Estimation
- Best Route Recommendation

### 📊 Dashboard
- Live Dashboard Statistics
- Traffic Analytics Charts
- Dataset Summary
- Traffic History
- Live Camera Feed
- Detection History
- Congestion Meter
- Traffic Alerts

### 📄 Reports
- PDF Report Generation
- CSV Export

---

# 🧠 AI Models & Algorithms Used

## Computer Vision
- YOLOv8 (Ultralytics)

## Machine Learning
- Random Forest Regression

## Algorithms
- Vehicle Counting
- Congestion Classification
- Travel Time Estimation
- Route Recommendation

---

# 🛠️ Technology Stack

## Frontend
- React.js
- Axios
- HTML
- CSS
- JavaScript

## Backend
- FastAPI
- Python
- SQLAlchemy
- Pydantic
- Uvicorn

## Database
- PostgreSQL

## AI & Machine Learning
- YOLOv8
- OpenCV
- Scikit-learn
- Pandas
- NumPy

---

# 📂 Project Structure

```
TrafficVision-AI/

├── backend/
│   ├── app/
│   ├── ai/
│   ├── dataset/
│   └── output/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/ChetanGoud77/TrafficVisionAI.git
```

---

## Backend

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

python -m uvicorn app.main:app --reload
```

Backend runs at:

```
http://127.0.0.1:8000
```

Swagger API:

```
http://127.0.0.1:8000/docs
```

---

## Frontend

```bash
cd frontend

npm install

npm start
```

Runs at:

```
http://localhost:3000
```

---

# 🚀 Running the Complete Project

### Terminal 1

```bash
cd backend
venv\Scripts\activate
python -m uvicorn app.main:app --reload
```

### Terminal 2

```bash
cd frontend
npm start
```

### Terminal 3

```bash
cd backend
venv\Scripts\activate
python -m ai.camera_simulator
```

---

# 📊 System Workflow

```
Traffic Images
        │
        ▼
YOLOv8 Vehicle Detection
        │
        ▼
Vehicle Counting
        │
        ▼
Congestion Analysis
        │
        ▼
PostgreSQL Database
        │
        ▼
Random Forest Prediction
        │
        ▼
FastAPI APIs
        │
        ▼
React Dashboard
```

---

# 📈 Current Project Status

✅ Milestone 1 Completed

- Authentication
- FastAPI Backend
- PostgreSQL Integration
- React Frontend
- Dashboard Setup

---

✅ Milestone 2 Completed

- YOLOv8 Vehicle Detection
- Live Camera Simulation
- Vehicle Counting
- Congestion Detection
- AI Prediction
- Travel Time Estimation
- Route Recommendation
- Dashboard Analytics
- Detection History
- PDF Report Generation
- CSV Export
- Professional Dashboard UI

---

# 🔮 Future Enhancements

- Real-time CCTV Camera Integration
- Live GPS-Based Traffic Monitoring
- Google Maps Integration
- WebSocket-Based Live Updates
- Email/SMS Traffic Alerts
- Mobile Application
- Cloud Deployment (AWS/Azure)

---

# 👨‍💻 Developed By

**Chetan Goud**

B.Tech – Computer Science & Engineering (AI & ML)

Passionate about Artificial Intelligence, Machine Learning, Computer Vision, and Full-Stack Development.

---

# ⭐ Support

If you found this project useful, please consider giving it a ⭐ on GitHub.
