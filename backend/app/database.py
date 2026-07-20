from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import declarative_base

# PostgreSQL Database URL
DATABASE_URL = "postgresql://postgres:root@localhost:5432/trafficvision_db"

# Create Database Engine
engine = create_engine(DATABASE_URL)

# Create Session
SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)

# Base Class
Base = declarative_base()


# Dependency to get database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()