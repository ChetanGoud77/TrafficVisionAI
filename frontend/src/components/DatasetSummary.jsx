import React, { useEffect, useState } from "react";
import api from "../services/api";

function DatasetSummary() {

    const [summary, setSummary] = useState(null);

    useEffect(() => {

        loadSummary();

    }, []);

    const loadSummary = async () => {

        try {

            const res = await api.get("/dataset/summary");

            setSummary(res.data);

        }

        catch (err) {

            console.log(err);

        }

    };

    if (!summary)

        return <h2>Loading Dataset...</h2>;

    return (

        <div
            style={{
                display:"flex",
                gap:"20px",
                marginTop:"20px",
                marginBottom:"20px"
            }}
        >

            <div style={card}>
                <h3>Total Records</h3>
                <h1>{summary.total_records}</h1>
            </div>

            <div style={card}>
                <h3>Average Traffic</h3>
                <h1>{summary.average_traffic}</h1>
            </div>

            <div style={card}>
                <h3>Maximum Traffic</h3>
                <h1>{summary.maximum_traffic}</h1>
            </div>

            <div style={card}>
                <h3>Minimum Traffic</h3>
                <h1>{summary.minimum_traffic}</h1>
            </div>

        </div>

    );

}

const card = {

    flex:1,

    background:"#1E293B",

    color:"white",

    padding:"20px",

    borderRadius:"12px",

    textAlign:"center"

};

export default DatasetSummary;