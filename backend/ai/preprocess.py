import pandas as pd
import joblib

DATASET = "dataset/Metro_Interstate_Traffic_Volume.csv"


def preprocess():

    df = pd.read_csv(DATASET)

    df["date_time"] = pd.to_datetime(df["date_time"])

    df["hour"] = df["date_time"].dt.hour
    df["day"] = df["date_time"].dt.day
    df["month"] = df["date_time"].dt.month
    df["year"] = df["date_time"].dt.year
    df["weekday"] = df["date_time"].dt.weekday

    df.drop(
        columns=[
            "date_time",
            "weather_description"
        ],
        inplace=True
    )

    df = pd.get_dummies(df)

    feature_columns = list(df.columns)

    feature_columns.remove("traffic_volume")

    joblib.dump(
        feature_columns,
        "ai/feature_columns.pkl"
    )

    df.to_csv(
        "dataset/processed_dataset.csv",
        index=False
    )

    print("Dataset Processed Successfully")

    print(df.head())

    return df


if __name__ == "__main__":

    preprocess()