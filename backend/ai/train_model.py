import pandas as pd
import joblib

from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error

DATASET = "dataset/processed_dataset.csv"

df = pd.read_csv(DATASET)

X = df.drop(columns=["traffic_volume"])

y = df["traffic_volume"]

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

model = RandomForestRegressor(
    n_estimators=100,
    random_state=42,
    n_jobs=-1
)

model.fit(X_train, y_train)

prediction = model.predict(X_test)

mae = mean_absolute_error(y_test, prediction)

print()

print("Mean Absolute Error :", mae)

joblib.dump(
    model,
    "ai/traffic_model.pkl"
)

print()

print("Model Saved Successfully")