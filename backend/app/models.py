from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime

from app.database import Base


# ==========================
# User Table
# ==========================
class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    email = Column(String(100), unique=True, nullable=False)
    password = Column(String(255), nullable=False)
    role = Column(String(50), default="operator")


# ==========================
# Traffic Table
# ==========================
class Traffic(Base):
    __tablename__ = "traffic"

    id = Column(Integer, primary_key=True, index=True)
    location = Column(String(100))
    vehicle_count = Column(Integer)
    congestion_level = Column(String(50))
    timestamp = Column(DateTime, default=datetime.utcnow)


# ==========================
# Alerts Table
# ==========================
class Alert(Base):
    __tablename__ = "alerts"

    id = Column(Integer, primary_key=True, index=True)
    message = Column(String(255))
    location = Column(String(100))
    timestamp = Column(DateTime, default=datetime.utcnow)


# ==========================
# Routes Table
# ==========================
class Route(Base):
    __tablename__ = "routes"

    id = Column(Integer, primary_key=True, index=True)
    source = Column(String(100))
    destination = Column(String(100))
    estimated_time = Column(String(50))


# ==========================
# AI Detection Table
# ==========================
class Detection(Base):
    __tablename__ = "detections"

    id = Column(Integer, primary_key=True, index=True)

    image_name = Column(String(255), nullable=False)

    detected_image = Column(String(255))

    camera_name = Column(String(100), nullable=False)

    car_count = Column(Integer, default=0)
    bus_count = Column(Integer, default=0)
    truck_count = Column(Integer, default=0)
    motorcycle_count = Column(Integer, default=0)

    total_vehicles = Column(Integer, default=0)

    congestion_level = Column(String(50))

    detection_time = Column(DateTime, default=datetime.utcnow)