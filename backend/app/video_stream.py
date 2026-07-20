from fastapi import APIRouter
from fastapi.responses import StreamingResponse
import cv2
from ultralytics import YOLO

router = APIRouter()

model = YOLO("yolov8n.pt")

VIDEO = "videos/traffic.mp4"


def generate():

    cap = cv2.VideoCapture(VIDEO)

    while True:

        success, frame = cap.read()

        if not success:
            cap.set(cv2.CAP_PROP_POS_FRAMES, 0)
            continue

        results = model(frame)

        annotated = results[0].plot()

        _, buffer = cv2.imencode(".jpg", annotated)

        frame = buffer.tobytes()

        yield (
            b'--frame\r\n'
            b'Content-Type: image/jpeg\r\n\r\n' +
            frame +
            b'\r\n'
        )


@router.get("/video_feed")
def video_feed():

    return StreamingResponse(
        generate(),
        media_type="multipart/x-mixed-replace; boundary=frame"
    )