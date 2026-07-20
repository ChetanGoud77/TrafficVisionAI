from fastapi import APIRouter
from datetime import datetime

from ai.predictor import predict

router = APIRouter()


@router.get("/prediction")
def prediction():

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

        "holiday_None": 1,

        "weather_main_Clear": 1

    }

    volume = predict(data)

    if volume < 2000:

        congestion = "LOW"

    elif volume < 4000:

        congestion = "MEDIUM"

    else:

        congestion = "HIGH"

    return {

        "predicted_volume": volume,

        "predicted_congestion": congestion

    }