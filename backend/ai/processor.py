from ai.detector import detect_and_count
from ai.congestion import calculate_congestion

from app.database import SessionLocal
from app.detection_service import save_detection

import os


def process_image(image_path):

    db = SessionLocal()

    counts, detected_image = detect_and_count(image_path)

    congestion = calculate_congestion(
        counts["total"]
    )

    save_detection(
        db=db,
        image_name=os.path.basename(image_path),
        detected_image=detected_image,
        camera_name="Camera-01",
        counts=counts,
        congestion=congestion
    )

    db.close()

    print(f"Processed: {image_path}")