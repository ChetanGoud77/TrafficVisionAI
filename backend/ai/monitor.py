import time

from ai.watcher import FolderWatcher
from ai.processor import process_image

DATASET = "dataset/traffic_live/camera-01"


def monitor():

    watcher = FolderWatcher(DATASET)

    print("TrafficVision AI Live Monitor Started")

    while True:

        images = watcher.get_new_images()

        for image in images:

            process_image(image)

        time.sleep(2)