import React from "react";
import {
  FaCar,
  FaTruck,
  FaRoad,
  FaImages,
  FaTrafficLight
} from "react-icons/fa";

function DashboardCards({ stats }) {

  const cards = [
    {
      title: "Total Vehicles",
      value: stats.vehicles,
      icon: <FaRoad size={35} />,
      color: "#3B82F6"
    },
    {
      title: "Cars",
      value: stats.cars,
      icon: <FaCar size={35} />,
      color: "#10B981"
    },
    {
      title: "Trucks",
      value: stats.trucks,
      icon: <FaTruck size={35} />,
      color: "#F59E0B"
    },
    {
      title: "Images Processed",
      value: stats.images,
      icon: <FaImages size={35} />,
      color: "#8B5CF6"
    },
    {
      title: "Congestion",
      value: stats.congestion || "LOW",
      icon: <FaTrafficLight size={35} />,
      color:
        stats.congestion === "HIGH"
          ? "#EF4444"
          : stats.congestion === "MEDIUM"
          ? "#FACC15"
          : "#22C55E"
    }
  ];

  return (
    <div style={styles.grid}>
      {cards.map((card, index) => (
        <div
          key={index}
          style={{
            ...styles.card,
            borderTop: `5px solid ${card.color}`
          }}
        >
          <div
            style={{
              ...styles.iconBox,
              background: card.color
            }}
          >
            {card.icon}
          </div>

          <h3>{card.title}</h3>

          <h1>{card.value}</h1>
        </div>
      ))}
    </div>
  );
}

const styles = {

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
    gap: "20px",
    marginTop: "25px"
  },

  card: {
    background: "#1E293B",
    borderRadius: "18px",
    padding: "25px",
    color: "white",
    boxShadow: "0px 8px 25px rgba(0,0,0,.4)",
    transition: "0.3s",
    textAlign: "center"
  },

  iconBox: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto 20px auto",
    color: "white"
  }

};

export default DashboardCards;