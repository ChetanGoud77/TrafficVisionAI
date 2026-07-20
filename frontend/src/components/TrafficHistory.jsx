import React, { useEffect, useState } from "react";
import api from "../services/api";

function TrafficHistory() {

    const [history, setHistory] = useState([]);

    useEffect(() => {

        loadHistory();

    }, []);

    const loadHistory = async () => {

        try {

            const res = await api.get("/dataset/history");

            setHistory(res.data);

        }

        catch (err) {

            console.log(err);

        }

    };

    return (

        <div
            style={{
                marginTop:30,
                background:"#1E293B",
                padding:20,
                borderRadius:15,
                color:"white"
            }}
        >

            <h2>Historical Traffic Dataset</h2>

            <table
                style={{
                    width:"100%",
                    borderCollapse:"collapse"
                }}
            >

                <thead>

                    <tr>

                        <th>Date & Time</th>

                        <th>Traffic</th>

                        <th>Temperature</th>

                        <th>Weather</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        history.map((row,index)=>(

                            <tr key={index}>

                                <td>{row.date_time}</td>

                                <td>{row.traffic_volume}</td>

                                <td>{row.temp}</td>

                                <td>{row.weather_main}</td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default TrafficHistory;