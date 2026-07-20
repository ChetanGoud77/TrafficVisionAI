from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import User
from app.schemas import UserCreate, UserResponse, UserLogin, Token
from app.utils import hash_password, verify_password
from app.security import create_access_token

router = APIRouter()


@router.post("/register", response_model=UserResponse)
def register(user: UserCreate, db: Session = Depends(get_db)):

    existing_user = db.query(User).filter(User.email == user.email).first()

    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="Email already registered"
        )

    hashed_password = hash_password(user.password)

    new_user = User(
        name=user.name,
        email=user.email,
        password=hashed_password,
        role="operator"
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user


@router.post("/login", response_model=Token)
def login(user: UserLogin, db: Session = Depends(get_db)):
    try:
        db_user = db.query(User).filter(User.email == user.email).first()

        if not db_user:
            return {"access_token": "EMAIL_NOT_FOUND", "token_type": "debug"}

        valid = verify_password(user.password, db_user.password)

        if not valid:
            return {"access_token": "PASSWORD_NOT_MATCH", "token_type": "debug"}

        token = create_access_token({"sub": db_user.email})

        return {
            "access_token": token,
            "token_type": "bearer"
        }

    except Exception as e:
        return {
            "access_token": str(e),
            "token_type": "ERROR"
        }