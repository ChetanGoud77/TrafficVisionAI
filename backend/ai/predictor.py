import joblib
import pandas as pd

model = joblib.load("ai/traffic_model.pkl")

feature_columns = joblib.load("ai/feature_columns.pkl")


def predict(data):

    df = pd.DataFrame([data])

    for column in feature_columns:

        if column not in df.columns:

            df[column] = 0

    df = df[feature_columns]

    prediction = model.predict(df)

    return int(prediction[0])