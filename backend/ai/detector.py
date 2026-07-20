# backend/ai/detector.py

from ultralytics import YOLO
import cv2
import os

model = YOLO("yolov8n.pt")

VEHICLE_CLASSES = {
    2: "car",
    3: "motorcycle",
    5: "bus",
    7: "truck"
}

OUTPUT_FOLDER = "output/detections"
os.makedirs(OUTPUT_FOLDER, exist_ok=True)


def detect_and_count(image_path):

    image = cv2.imread(image_path)

    results = model(image)

    counts = {
        "car": 0,
        "motorcycle": 0,
        "bus": 0,
        "truck": 0,
        "total": 0
    }

    annotated = image.copy()

    for result in results:

        for box in result.boxes:

            cls = int(box.cls[0])

            if cls not in VEHICLE_CLASSES:
                continue

            label = VEHICLE_CLASSES[cls]

            counts[label] += 1
            counts["total"] += 1

            x1, y1, x2, y2 = map(int, box.xyxy[0])

            cv2.rectangle(
                annotated,
                (x1, y1),
                (x2, y2),
                (0, 255, 0),
                2
            )

            cv2.putText(
                annotated,
                label,
                (x1, y1 - 10),
                cv2.FONT_HERSHEY_SIMPLEX,
                0.6,
                (0, 255, 0),
                2
            )

    filename = os.path.basename(image_path)

    save_path = os.path.join(
        OUTPUT_FOLDER,
        filename
    )

    cv2.imwrite(save_path, annotated)

    return counts, save_path