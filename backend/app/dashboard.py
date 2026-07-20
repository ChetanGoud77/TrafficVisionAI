from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import func

from app.database import get_db
from app.models import Detection

router = APIRouter()


@router.get("/dashboard")
def dashboard(db: Session = Depends(get_db)):

    latest = db.query(Detection).order_by(Detection.id.desc()).first()

    return {

        "images": db.query(Detection).count(),

        "vehicles": db.query(
            func.sum(Detection.total_vehicles)
        ).scalar() or 0,

        "cars": db.query(
            func.sum(Detection.car_count)
        ).scalar() or 0,

        "trucks": db.query(
            func.sum(Detection.truck_count)
        ).scalar() or 0,

        "bus": db.query(
            func.sum(Detection.bus_count)
        ).scalar() or 0,

        "motorcycle": db.query(
            func.sum(Detection.motorcycle_count)
        ).scalar() or 0,

        "congestion": latest.congestion_level if latest else "LOW",

        "latest_image": latest.detected_image if latest else None

    }


@router.get("/history")
def history(db: Session = Depends(get_db)):

    detections = (
        db.query(Detection)
        .order_by(Detection.id.desc())
        .limit(20)
        .all()
    )

    result = []

    for row in detections:

        result.append({

            "id": row.id,
            "image": row.image_name,
            "camera": row.camera_name,
            "vehicles": row.total_vehicles,
            "cars": row.car_count,
            "trucks": row.truck_count,
            "bus": row.bus_count,
            "motorcycle": row.motorcycle_count,
            "congestion": row.congestion_level,
            "time": row.detection_time

        })

    return result