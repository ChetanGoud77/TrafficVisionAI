import os
import time

from detector import detect_and_count

# Dataset Folder
TRAIN_FOLDER = "dataset/archive/train/images"

# Time between two frames (seconds)
FRAME_DELAY = 2


def get_images():

    images = []

    for file in os.listdir(TRAIN_FOLDER):

        if file.lower().endswith((".jpg", ".jpeg", ".png")):
            images.append(file)

    images.sort()

    return images


def start_monitor():

    images = get_images()

    print("=" * 50)
    print("TrafficVision AI - Live Traffic Monitoring")
    print("=" * 50)

    while True:

        for image in images:

            image_path = os.path.join(TRAIN_FOLDER, image)

            print(f"\nProcessing : {image}")

            counts, output_image = detect_and_count(image_path)

            print("----------------------------")
            print("Vehicle Count")
            print("----------------------------")

            for vehicle, count in counts.items():
                print(f"{vehicle.upper()} : {count}")

            print("----------------------------")

            time.sleep(FRAME_DELAY)


if __name__ == "__main__":
    start_monitor()