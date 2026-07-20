from app.models import Detection


def save_detection(
    db,
    image_name,
    detected_image,
    camera_name,
    counts,
    congestion
):

    detection = Detection(

        image_name=image_name,

        detected_image=detected_image,

        camera_name=camera_name,

        car_count=counts["car"],

        motorcycle_count=counts["motorcycle"],

        bus_count=counts["bus"],

        truck_count=counts["truck"],

        total_vehicles=counts["total"],

        congestion_level=congestion

    )

    db.add(detection)

    db.commit()

    db.refresh(detection)

    return detection