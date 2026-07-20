import os

DATASET = "dataset/traffic_live/camera-01"


def latest_image():

    files = sorted(os.listdir(DATASET))

    if len(files) == 0:
        return None

    return files[-1]