import React, { useEffect, useState } from "react";
import axios from "axios";

import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend
} from "recharts";

function AnalyticsChart() {

    const [data, setData] = useState([]);

    useEffect(() => {

        load();

        const interval = setInterval(load, 3000);

        return () => clearInterval(interval);

    }, []);

    const load = async () => {

        const res = await axios.get(
            "http://127.0.0.1:8000/dashboard"
        );

        setData([

            {
                name: "Cars",
                value: res.data.cars
            },

            {
                name: "Trucks",
                value: res.data.trucks
            },

            {
                name: "Bus",
                value: res.data.bus
            },

            {
                name: "Motorcycle",
                value: res.data.motorcycle
            }

        ]);

    };

    const COLORS = [

        "#3B82F6",

        "#F97316",

        "#10B981",

        "#FACC15"

    ];

    return (

        <div
        style={{
            background:"#1E293B",
            borderRadius:"15px",
            padding:"20px",
            marginTop:"30px"
        }}
        >

        <h2
        style={{
            color:"white"
        }}
        >
            Vehicle Distribution
        </h2>

        <ResponsiveContainer
        width="100%"
        height={350}
        >

        <PieChart>

        <Pie

        data={data}

        dataKey="value"

        outerRadius={120}

        label

        >

        {

        data.map((entry,index)=>(

        <Cell

        key={index}

        fill={COLORS[index%COLORS.length]}

        />

        ))

        }

        </Pie>

        <Tooltip/>

        <Legend/>

        </PieChart>

        </ResponsiveContainer>

        </div>

    );

}

export default AnalyticsChart;