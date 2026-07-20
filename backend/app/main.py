from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from app.database import engine
from app import models

from app.auth import router as auth_router
from app.detection import router as detection_router
from app.dashboard import router as dashboard_router
from app.live import router as live_router

from app.video_stream import router as video_router

from app.prediction import router as prediction_router

from app.dataset_api import router as dataset_router

from app.travel import router as travel_router

from app.route import router as route_router

from app.report import router as report_router

from app.export_csv import router as export_csv_router

# Create Database Tables
models.Base.metadata.create_all(bind=engine)

# Create FastAPI App
app = FastAPI(
    title="TrafficVision AI",
    description="Smart Traffic Prediction & Congestion Management System",
    version="1.0"
)


app.include_router(
    video_router,
    tags=["Video Stream"]
)

app.include_router(
    dataset_router,
    tags=["Dataset"]
)

app.include_router(
    travel_router,
    tags=["Travel Time"]
)
# ==========================
# Static Files
# ==========================

# app.mount(
#     "/dataset",
#     StaticFiles(directory="dataset/traffic_live"),
#     name="dataset"
# )

app.mount(
    "/output",
    StaticFiles(directory="output"),
    name="output"
)

# ==========================
# CORS
# ==========================

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ==========================
# Routers
# ==========================

app.include_router(
    auth_router,
    tags=["Authentication"]
)

app.include_router(
    detection_router,
    tags=["AI Detection"]
)

app.include_router(
    dashboard_router,
    tags=["Dashboard"]
)

app.include_router(
    live_router,
    tags=["Live Camera"]
)

app.include_router(
    prediction_router,
    tags=["Prediction"]
)

app.include_router(
    route_router,
    tags=["Route Optimization"]
)

app.include_router(
    report_router,
    tags=["PDF Report"]
)

app.include_router(
    export_csv_router,
    tags=["CSV Export"]
)

# ==========================
# Home API
# ==========================

@app.get("/")
def home():

    return {

        "message": "Welcome to TrafficVision AI 🚦",

        "status": "Backend Connected Successfully",

        "database": "PostgreSQL Connected"

    }