import React, { useEffect, useState } from "react";
import axios from "axios";

import "../styles/dashboard.css";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import DashboardCards from "../components/DashboardCards";
import AnalyticsChart from "../components/AnalyticsChart";
import LiveCamera from "../components/LiveCamera";
import CongestionMeter from "../components/CongestionMeter";
import AlertPanel from "../components/AlertPanel";
import RouteRecommendation from "../components/RouteRecommendation";
import DetectionHistory from "../components/DetectionHistory";
import AIPrediction from "../components/AIPrediction";
import TrafficMap from "../components/TrafficMap";
import TrafficAlert from "../components/TrafficAlert";
import Footer from "../components/Footer";
import LiveVideo from "../components/LiveVideo";
import DatasetSummary from "../components/DatasetSummary";
import TrafficChart from "../components/TrafficChart";
import TrafficHistory from "../components/TrafficHistory";

function Dashboard() {

    const [stats, setStats] = useState({
        images: 0,
        vehicles: 0,
        cars: 0,
        trucks: 0,
        congestion: "LOW"
    });

    const [travelTime, setTravelTime] = useState({});
    const [bestRoute, setBestRoute] = useState({});

    useEffect(() => {

        loadDashboard();

        const interval = setInterval(() => {
            loadDashboard();
        }, 3000);

        return () => clearInterval(interval);

    }, []);

    const loadDashboard = async () => {

        try {

            const dashboard = await axios.get(
                "http://127.0.0.1:8000/dashboard"
            );

            setStats(dashboard.data);

            const travel = await axios.get(
                "http://127.0.0.1:8000/travel-time"
            );

            setTravelTime(travel.data);

            const route = await axios.get(
                "http://127.0.0.1:8000/best-route"
            );

            setBestRoute(route.data);

        }

        catch (err) {

            console.log(err);

        }

    };

    return (

        <div
            style={{
                display: "flex",
                background: "#0F172A",
                minHeight: "100vh"
            }}
        >

            <Sidebar />

            <div
                style={{
                    flex: 1,
                    marginLeft: "260px"
                }}
            >

                <Topbar />

                <div
                    style={{
                        padding: "30px"
                    }}
                >

                    <DashboardCards stats={stats} />

                    <AnalyticsChart stats={stats} />

                    <DatasetSummary />

                    <TrafficChart />

                    <AIPrediction />

                    <LiveVideo />

                    <TrafficMap />

                    <TrafficHistory />

                    <TrafficAlert />

                    {/* Travel Time + Route */}

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "20px",
                            marginTop: "20px"
                        }}
                    >

                        <div
                            style={{
                                background: "#1E293B",
                                color: "white",
                                padding: "20px",
                                borderRadius: "12px"
                            }}
                        >
                            <h3>🚗 Travel Time</h3>

                            <h2>{travelTime.estimated_travel_time}</h2>

                            <p>
                                Vehicles : {travelTime.current_vehicles}
                            </p>

                            <p>
                                Traffic : {travelTime.traffic_status}
                            </p>

                        </div>

                        <div
                            style={{
                                background: "#1E293B",
                                color: "white",
                                padding: "20px",
                                borderRadius: "12px"
                            }}
                        >

                            <h3>🗺 Best Route</h3>

                            <h2>
                                {bestRoute.recommended_route}
                            </h2>

                            <p>
                                Status : {bestRoute.traffic_status}
                            </p>

                        </div>

                    </div>

                    {/* Download Buttons */}

                    <div
                        style={{
                            marginTop: "30px",
                            display: "flex",
                            gap: "20px"
                        }}
                    >

                        <a
                            href="http://127.0.0.1:8000/download-report"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button
                                style={{
                                    padding: "12px 20px",
                                    background: "#16A34A",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "8px",
                                    cursor: "pointer"
                                }}
                            >
                                📄 Download PDF Report
                            </button>
                        </a>

                        <a
                            href="http://127.0.0.1:8000/export-csv"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button
                                style={{
                                    padding: "12px 20px",
                                    background: "#2563EB",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "8px",
                                    cursor: "pointer"
                                }}
                            >
                                📊 Export CSV
                            </button>
                        </a>

                    </div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "2fr 1fr",
                            gap: "20px",
                            marginTop: "30px"
                        }}
                    >

                        <LiveCamera />

                        <CongestionMeter
                            congestion={stats.congestion}
                        />

                    </div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "20px"
                        }}
                    >

                        <AlertPanel
                            congestion={stats.congestion}
                        />

                        <RouteRecommendation
                            congestion={stats.congestion}
                        />

                    </div>

                    <DetectionHistory />

                    <Footer />

                </div>

            </div>

        </div>

    );

}

export default Dashboard;