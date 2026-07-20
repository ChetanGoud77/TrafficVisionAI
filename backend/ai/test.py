import cv2
from ai.detector import detect_and_count

image_path = "ai/images/traffic.jpg"

counts, image = detect_and_count(image_path)

print("Vehicle Counts")
print("----------------")

for vehicle, count in counts.items():
    print(f"{vehicle}: {count}")

cv2.imwrite("ai/output/detected_traffic.jpg", image)

print("\nImage saved successfully!")