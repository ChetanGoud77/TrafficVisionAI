import React, { useEffect, useState } from "react";
import api from "../services/api";

function AIPrediction() {

    const [prediction, setPrediction] = useState(null);

    useEffect(() => {

        fetchPrediction();

        const interval = setInterval(fetchPrediction, 5000);

        return () => clearInterval(interval);

    }, []);

    const fetchPrediction = async () => {

        try {

            const res = await api.get("/prediction");

            setPrediction(res.data);

        }

        catch (err) {

            console.log(err);

        }

    };

    if (!prediction)

        return <h3>Loading AI Prediction...</h3>;

    return (

        <div
            style={{
                background: "#1E293B",
                padding: "20px",
                borderRadius: "15px",
                marginTop: "20px",
                color: "white"
            }}
        >

            <h2>🤖 AI Traffic Prediction</h2>

            <hr />

            <h3>
                Current Vehicles :
                {" "}
                {prediction.current_vehicles}
            </h3>

            <h3>
                Predicted Traffic :
                {" "}
                {prediction.predicted_traffic}
            </h3>

            <h3>
                Congestion :
                {" "}
                {prediction.predicted_congestion}
            </h3>

            <h3>
                Camera :
                {" "}
                {prediction.camera}
            </h3>

            <h3>
                Time :
                {" "}
                {prediction.time}
            </h3>

        </div>

    );

}

export default AIPrediction;