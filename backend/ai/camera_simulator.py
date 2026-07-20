import os
import time

from ai.processor import process_image

# Backend folder
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Camera-01 folder
DATASET = os.path.join(BASE_DIR, "dataset", "traffic_live", "camera-01")


def start_camera():
    print("=" * 50)
    print("TrafficVision AI Live Camera Simulator Started")
    print(f"Dataset Path: {DATASET}")
    print("=" * 50)

    if not os.path.exists(DATASET):
        print("Dataset folder not found!")
        return

    while True:

        images = sorted([
            img for img in os.listdir(DATASET)
            if img.lower().endswith((".jpg", ".jpeg", ".png"))
        ])

        if not images:
            print("No images found in camera-01.")
            return

        for image in images:

            image_path = os.path.join(DATASET, image)

            try:
                process_image(image_path)
                print(f"✅ Processed: {image}")

            except Exception as e:
                print(f"❌ Error processing {image}: {e}")

            # Wait 1 second before processing the next image
            time.sleep(1)


if __name__ == "__main__":
    start_camera()