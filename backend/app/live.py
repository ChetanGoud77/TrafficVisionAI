from fastapi import APIRouter

from sqlalchemy.orm import Session

from app.database import SessionLocal
from app.models import Detection

router = APIRouter()


@router.get("/live")

def live():

    db: Session = SessionLocal()

    latest = (

        db.query(Detection)

        .order_by(Detection.id.desc())

        .first()

    )

    db.close()

    if latest is None:

        return {

            "image": None

        }

    return {

        "image": latest.detected_image.replace("\\", "/")

    }