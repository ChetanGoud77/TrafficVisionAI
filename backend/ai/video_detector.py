import cv2
from ultralytics import YOLO

model = YOLO("yolov8n.pt")

video = cv2.VideoCapture("videos/traffic.mp4")

while True:

    success, frame = video.read()

    if not success:
        break

    results = model(frame)

    annotated = results[0].plot()

    cv2.imshow("TrafficVision AI Live Detection", annotated)

    if cv2.waitKey(1) & 0xFF == ord("q"):
        break

video.release()
cv2.destroyAllWindows()