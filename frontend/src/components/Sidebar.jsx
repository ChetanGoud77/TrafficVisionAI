import React from "react";
import {
  FaTachometerAlt,
  FaCar,
  FaChartBar,
  FaVideo,
  FaBell,
  FaRoute,
  FaCog
} from "react-icons/fa";

function Sidebar() {
  return (
    <div style={styles.sidebar}>

      <div style={styles.logo}>
        🚦
        <h2>TrafficVision AI</h2>
      </div>

      <div style={styles.menu}>

        <div style={styles.item}>
          <FaTachometerAlt />
          <span>Dashboard</span>
        </div>

        <div style={styles.item}>
          <FaCar />
          <span>Vehicle Detection</span>
        </div>

        <div style={styles.item}>
          <FaChartBar />
          <span>Analytics</span>
        </div>

        <div style={styles.item}>
          <FaVideo />
          <span>Live Cameras</span>
        </div>

        <div style={styles.item}>
          <FaBell />
          <span>Alerts</span>
        </div>

        <div style={styles.item}>
          <FaRoute />
          <span>Routes</span>
        </div>

      </div>

      <div style={styles.bottom}>
        <FaCog />
        <span>Settings</span>
      </div>

    </div>
  );
}

const styles = {

  sidebar: {
    width: "260px",
    height: "100vh",
    background: "#111827",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "fixed",
    left: 0,
    top: 0,
    padding: "25px",
    boxSizing: "border-box"
  },

  logo: {
    textAlign: "center"
  },

  menu: {
    marginTop: "30px"
  },

  item: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    padding: "15px",
    borderRadius: "10px",
    cursor: "pointer",
    marginBottom: "10px",
    background: "#1F2937"
  },

  bottom: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    padding: "15px",
    background: "#1F2937",
    borderRadius: "10px"
  }

};

export default Sidebar;