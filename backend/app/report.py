from fastapi import APIRouter, Depends
from fastapi.responses import FileResponse
from sqlalchemy.orm import Session

from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas

from app.database import get_db
from app.models import Detection

import os

router = APIRouter()


@router.get("/download-report")
def download_report(db: Session = Depends(get_db)):

    latest = (
        db.query(Detection)
        .order_by(Detection.id.desc())
        .first()
    )

    pdf_path = "traffic_report.pdf"

    c = canvas.Canvas(pdf_path, pagesize=letter)

    c.setFont("Helvetica-Bold", 18)
    c.drawString(180, 760, "TrafficVision AI Report")

    c.setFont("Helvetica", 12)

    if latest:

        c.drawString(50,720,f"Camera : {latest.camera_name}")
        c.drawString(50,700,f"Cars : {latest.car_count}")
        c.drawString(50,680,f"Buses : {latest.bus_count}")
        c.drawString(50,660,f"Trucks : {latest.truck_count}")
        c.drawString(50,640,f"Motorcycles : {latest.motorcycle_count}")
        c.drawString(50,620,f"Total Vehicles : {latest.total_vehicles}")
        c.drawString(50,600,f"Congestion : {latest.congestion_level}")
        c.drawString(50,580,f"Detection Time : {latest.detection_time}")

    else:

        c.drawString(50,700,"No Detection Data Found")

    c.save()

    return FileResponse(
        pdf_path,
        media_type="application/pdf",
        filename="Traffic_Report.pdf"
    )