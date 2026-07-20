from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import Detection

router = APIRouter()


@router.get("/best-route")
def best_route(db: Session = Depends(get_db)):

    latest = (
        db.query(Detection)
        .order_by(Detection.id.desc())
        .first()
    )

    if latest is None:
        return {
            "recommended_route": "No Route Available",
            "traffic_status": "No Data"
        }

    congestion = latest.congestion_level

    if congestion == "Low":
        route = "Route A"
    elif congestion == "Moderate":
        route = "Route B"
    else:
        route = "Route C"

    return {
        "recommended_route": route,
        "traffic_status": congestion
    }