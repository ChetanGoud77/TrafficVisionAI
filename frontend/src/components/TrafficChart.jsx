import React, { useEffect, useState } from "react";
import api from "../services/api";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function TrafficChart() {

    const [chartData, setChartData] = useState(null);

    useEffect(() => {

        loadData();

    }, []);

    const loadData = async () => {

        const res = await api.get("/dataset/history");

        const labels = res.data.map((item, index) => index + 1);

        const traffic = res.data.map(item => item.traffic_volume);

        setChartData({

            labels,

            datasets: [

                {

                    label: "Traffic Volume",

                    data: traffic,

                    borderColor: "#00E5FF",

                    backgroundColor: "#00E5FF"

                }

            ]

        });

    };

    if (!chartData)

        return <h2>Loading Chart...</h2>;

    return (

        <div
            style={{
                background:"#1E293B",
                padding:"20px",
                borderRadius:"15px",
                marginTop:"20px"
            }}
        >

            <h2 style={{color:"white"}}>

                Traffic Volume Trend

            </h2>

            <Line data={chartData} />

        </div>

    );

}

export default TrafficChart;