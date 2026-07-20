import React from "react";
import { FaRoute, FaMapMarkedAlt, FaClock } from "react-icons/fa";

function RouteRecommendation({ congestion }) {

    let route = "Current Route";
    let time = "0 min";
    let color = "#22C55E";

    if (congestion === "MEDIUM") {
        route = "MG Road";
        time = "3 mins";
        color = "#F59E0B";
    }

    if (congestion === "HIGH") {
        route = "Airport Road";
        time = "8 mins";
        color = "#EF4444";
    }

    return (

        <div style={styles.container}>

            <div style={styles.header}>

                <FaRoute size={28} color="#38BDF8"/>

                <h2>Smart Route Recommendation</h2>

            </div>

            <div style={styles.card}>

                <p>

                    <FaMapMarkedAlt />

                    {"  "}Recommended Route

                </p>

                <h1
                    style={{
                        color: color
                    }}
                >
                    {route}
                </h1>

                <p>

                    <FaClock />

                    {"  "}Estimated Time Saved

                </p>

                <h2>

                    {time}

                </h2>

            </div>

        </div>

    );

}

const styles = {

container:{

background:"#1E293B",

padding:"25px",

marginTop:"30px",

borderRadius:"18px",

color:"white",

boxShadow:"0 8px 25px rgba(0,0,0,.35)"

},

header:{

display:"flex",

alignItems:"center",

gap:"12px",

marginBottom:"20px"

},

card:{

background:"#111827",

padding:"20px",

borderRadius:"15px",

textAlign:"center"

}

};

export default RouteRecommendation;