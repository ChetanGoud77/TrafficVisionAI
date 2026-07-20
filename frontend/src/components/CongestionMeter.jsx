import React from "react";

function CongestionMeter({ congestion }) {

    let color = "#22C55E";
    let text = "LOW";

    if (congestion === "MEDIUM") {
        color = "#FACC15";
        text = "MEDIUM";
    }

    if (congestion === "HIGH") {
        color = "#EF4444";
        text = "HIGH";
    }

    return (

        <div
            style={{
                marginTop: "30px",
                background: "#1E293B",
                padding: "25px",
                borderRadius: "15px",
                textAlign: "center"
            }}
        >

            <h2 style={{ color: "white" }}>
                Live Congestion Status
            </h2>

            <div
                style={{
                    width: "180px",
                    margin: "25px auto",
                    padding: "18px",
                    borderRadius: "12px",
                    background: color,
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "24px"
                }}
            >
                {text}
            </div>

        </div>

    );

}

export default CongestionMeter;