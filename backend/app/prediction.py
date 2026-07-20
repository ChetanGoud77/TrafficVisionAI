from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from datetime import datetime

from app.database import get_db
from app.models import Detection
from ai.predictor import predict

router = APIRouter()


@router.get("/prediction")
def prediction(db: Session = Depends(get_db)):

    latest = (
        db.query(Detection)
        .order_by(Detection.id.desc())
        .first()
    )

    if latest is None:

        return {
            "message": "No detection data available"
        }

    now = datetime.now()

    data = {

        "temp": 288.0,
        "rain_1h": 0.0,
        "snow_1h": 0.0,
        "clouds_all": 40,

        "hour": now.hour,
        "day": now.day,
        "month": now.month,
        "year": now.year,
        "weekday": now.weekday(),

        "holiday_None": True,

        "weather_main_Clear": True,
        "weather_main_Clouds": False,
        "weather_main_Drizzle": False,
        "weather_main_Fog": False,
        "weather_main_Haze": False,
        "weather_main_Mist": False,
        "weather_main_Rain": False,
        "weather_main_Smoke": False,
        "weather_main_Snow": False,
        "weather_main_Squall": False,
        "weather_main_Thunderstorm": False

    }

    predicted_volume = predict(data)

    if predicted_volume < 2000:
        congestion = "LOW"

    elif predicted_volume < 4000:
        congestion = "MEDIUM"

    else:
        congestion = "HIGH"

    return {

        "current_vehicles": latest.total_vehicles,

        "predicted_traffic": predicted_volume,

        "predicted_congestion": congestion,

        "camera": latest.camera_name,

        "time": latest.detection_time

    }