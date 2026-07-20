import os
import time

SUPPORTED = (".jpg", ".jpeg", ".png")


class FolderWatcher:

    def __init__(self, folder):

        self.folder = folder

        self.processed = set()

    def get_new_images(self):

        new_files = []

        for file in sorted(os.listdir(self.folder)):

            if not file.lower().endswith(SUPPORTED):
                continue

            path = os.path.join(self.folder, file)

            if path not in self.processed:

                self.processed.add(path)

                new_files.append(path)

        return new_files