import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function TrafficMap() {
  return (
    <div
      style={{
        background: "#1E293B",
        padding: "20px",
        borderRadius: "15px",
        marginTop: "30px",
      }}
    >
      <h2 style={{ color: "white" }}>🗺 Live Traffic Map</h2>

      <MapContainer
        center={[17.3850, 78.4867]}
        zoom={12}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          attribution="OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[17.3850, 78.4867]}>
          <Popup>
            Camera-01 <br />
            Congestion : LOW
          </Popup>
        </Marker>

        <Marker position={[17.4100, 78.4700]}>
          <Popup>
            Camera-02 <br />
            Congestion : MEDIUM
          </Popup>
        </Marker>

        <Marker position={[17.4300, 78.5000]}>
          <Popup>
            Camera-03 <br />
            Congestion : HIGH
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default TrafficMap;