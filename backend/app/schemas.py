from pydantic import BaseModel, EmailStr


# Request schema for user registration
class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str


# Response schema
class UserResponse(BaseModel):
    id: int
    name: str
    email: EmailStr
    role: str

    class Config:
        from_attributes = True


# Login schema
class UserLogin(BaseModel):
    email: EmailStr
    password: str


# JWT Token schema
class Token(BaseModel):
    access_token: str
    token_type: str


# Detection Response Schema
class DetectionResponse(BaseModel):
    id: int
    image_name: str
    car_count: int
    bus_count: int
    truck_count: int
    motorcycle_count: int
    total_vehicles: int

    class Config:
        from_attributes = True