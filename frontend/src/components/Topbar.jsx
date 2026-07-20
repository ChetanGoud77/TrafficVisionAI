import React, { useState, useEffect } from "react";
import {
  FaTrafficLight,
  FaBell,
  FaUserCircle
} from "react-icons/fa";

function Topbar() {

  const [time, setTime] = useState("");

  useEffect(() => {

    const interval = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(interval);

  }, []);

  return (

    <div
      style={{
        height: "70px",
        background: "#1E293B",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 30px",
        color: "white",
        borderRadius: "15px",
        marginBottom: "20px"
      }}
    >

      <h2>
        <FaTrafficLight /> TrafficVision AI
      </h2>

      <h3>{time}</h3>

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center"
        }}
      >

        <FaBell size={22} />

        <FaUserCircle size={30} />

      </div>

    </div>

  );

}

export default Topbar;