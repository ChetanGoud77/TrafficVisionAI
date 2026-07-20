import React, { useEffect, useState } from "react";
import axios from "axios";

function TrafficAlert() {

    const [data, setData] = useState({});

    useEffect(() => {

        load();

        const interval = setInterval(load, 3000);

        return () => clearInterval(interval);

    }, []);

    const load = async () => {

        const res = await axios.get(
            "http://127.0.0.1:8000/prediction"
        );

        setData(res.data);

    };

    let color = "#22C55E";
    let message = "Traffic is Normal";

    if (data.predicted === "MEDIUM") {

        color = "#F59E0B";
        message = "Moderate Traffic Expected";

    }

    if (data.predicted === "HIGH") {

        color = "#EF4444";
        message = "Heavy Traffic Expected";

    }

    return (

        <div
            style={{
                background: color,
                padding: "20px",
                borderRadius: "15px",
                marginTop: "30px",
                color: "white",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "20px"
            }}
        >

            🚨 {message}

        </div>

    );

}

export default TrafficAlert;