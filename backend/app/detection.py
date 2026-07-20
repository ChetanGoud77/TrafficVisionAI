from fastapi import APIRouter, UploadFile, File, Depends
from sqlalchemy.orm import Session
import shutil
import os

from ai.detector import detect_and_count
from app.database import get_db
from app.models import Detection

router = APIRouter()

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@router.post("/detect")
async def detect_vehicle(
    image: UploadFile = File(...),
    db: Session = Depends(get_db)
):

    file_path = os.path.join(UPLOAD_FOLDER, image.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(image.file, buffer)

    counts, output_image = detect_and_count(file_path)

    detection = Detection(
        image_name=image.filename,
        car_count=counts["car"],
        bus_count=counts["bus"],
        truck_count=counts["truck"],
        motorcycle_count=counts["motorcycle"],
        total_vehicles=counts["total"]
    )

    db.add(detection)
    db.commit()
    db.refresh(detection)

    return {
        "status": "success",
        "vehicle_counts": counts,
        "processed_image": output_image,
        "detection_id": detection.id
    }