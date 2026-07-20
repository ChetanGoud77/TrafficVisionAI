import React from "react";

function StatCard({ title, value, color }) {
  return (
    <div
      className="card"
      style={{ borderTop: `5px solid ${color}` }}
    >
      <h3>{title}</h3>
      <h1>{value}</h1>
    </div>
  );
}

export default StatCard;