from fastapi import APIRouter
import pandas as pd

router = APIRouter()

RAW_DATASET = "dataset/Metro_Interstate_Traffic_Volume.csv"


@router.get("/dataset/summary")
def dataset_summary():

    df = pd.read_csv(RAW_DATASET)

    return {
        "total_records": len(df),
        "average_traffic": round(df["traffic_volume"].mean(), 2),
        "maximum_traffic": int(df["traffic_volume"].max()),
        "minimum_traffic": int(df["traffic_volume"].min())
    }


@router.get("/dataset/history")
def dataset_history():

    df = pd.read_csv(RAW_DATASET)

    df["date_time"] = pd.to_datetime(df["date_time"])

    history = df.sort_values("date_time").tail(50)

    return history[
        [
            "date_time",
            "traffic_volume",
            "temp",
            "weather_main"
        ]
    ].to_dict(orient="records")