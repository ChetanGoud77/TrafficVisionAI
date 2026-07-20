from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import Detection

router = APIRouter()


@router.get("/travel-time")
def get_travel_time(db: Session = Depends(get_db)):

    latest = (
        db.query(Detection)
        .order_by(Detection.id.desc())
        .first()
    )

    if latest is None:
        return {
            "current_vehicles": 0,
            "estimated_travel_time": "0 mins",
            "traffic_status": "No Data"
        }

    vehicles = latest.total_vehicles

    if vehicles < 20:
        time = "5 mins"
        status = "Low"
    elif vehicles < 50:
        time = "10 mins"
        status = "Moderate"
    else:
        time = "20 mins"
        status = "Heavy"

    return {
        "current_vehicles": vehicles,
        "estimated_travel_time": time,
        "traffic_status": status
    }