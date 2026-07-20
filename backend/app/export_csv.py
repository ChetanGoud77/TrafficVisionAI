from fastapi import APIRouter, Depends
from fastapi.responses import FileResponse
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import Detection

import csv

router = APIRouter()


@router.get("/export-csv")
def export_csv(db: Session = Depends(get_db)):

    detections = db.query(Detection).all()

    csv_file = "traffic_data.csv"

    with open(csv_file, mode="w", newline="") as file:

        writer = csv.writer(file)

        writer.writerow([
            "ID",
            "Camera",
            "Cars",
            "Buses",
            "Trucks",
            "Motorcycles",
            "Total Vehicles",
            "Congestion",
            "Detection Time"
        ])

        for row in detections:

            writer.writerow([
                row.id,
                row.camera_name,
                row.car_count,
                row.bus_count,
                row.truck_count,
                row.motorcycle_count,
                row.total_vehicles,
                row.congestion_level,
                row.detection_time
            ])

    return FileResponse(
        path=csv_file,
        media_type="text/csv",
        filename="Traffic_Data.csv"
    )