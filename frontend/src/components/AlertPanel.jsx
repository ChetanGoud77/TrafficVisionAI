import React from "react";
import {
  FaExclamationTriangle,
  FaMapMarkerAlt,
  FaArrowRight
} from "react-icons/fa";

function AlertPanel({ congestion }) {

  let alertTitle = "Traffic Normal";
  let recommendation = "No Action Required";
  let color = "#10B981";

  if (congestion === "MEDIUM") {
    alertTitle = "Moderate Traffic";
    recommendation = "Monitor Traffic Flow";
    color = "#F59E0B";
  }

  if (congestion === "HIGH") {
    alertTitle = "Heavy Traffic Detected";
    recommendation = "Use Alternate Route";
    color = "#EF4444";
  }

  return (

    <div style={styles.container}>

      <div style={styles.header}>

        <FaExclamationTriangle
          size={28}
          color={color}
        />

        <h2>Traffic Alert</h2>

      </div>

      <div
        style={{
          ...styles.alertBox,
          borderLeft:`6px solid ${color}`
        }}
      >

        <h3 style={{color}}>
          {alertTitle}
        </h3>

        <p>
          <FaMapMarkerAlt /> Camera-01
        </p>

        <p>
          Congestion Level :
          <strong> {congestion}</strong>
        </p>

        <p>
          <FaArrowRight />
          {" "}
          Recommendation :
          {" "}
          {recommendation}
        </p>

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

alertBox:{

background:"#111827",

padding:"20px",

borderRadius:"12px"

}

};

export default AlertPanel;