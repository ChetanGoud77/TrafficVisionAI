def calculate_congestion(total_vehicles):

    if total_vehicles <= 10:
        return "LOW"

    elif total_vehicles <= 20:
        return "MEDIUM"

    else:
        return "HIGH"