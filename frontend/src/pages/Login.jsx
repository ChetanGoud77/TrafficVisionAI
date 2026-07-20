import React, { useState } from "react";
import api from "../services/api";
import { useNavigate, Link } from "react-router-dom";
import { FaTrafficLight } from "react-icons/fa";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/login", form);

      localStorage.setItem("token", res.data.access_token);

      alert("Login Successful");

      navigate("/dashboard");
    } catch (err) {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>

        <FaTrafficLight size={60} color="#00E5FF" />

        <h1 style={styles.title}>TrafficVision AI</h1>

        <p style={styles.subtitle}>
          Smart Traffic Prediction & Congestion Management
        </p>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            style={styles.input}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            style={styles.input}
            onChange={handleChange}
            required
          />

          <button style={styles.button}>
            Login
          </button>

        </form>

        <p style={{marginTop:20}}>
          New User?{" "}
          <Link to="/register">
            Register Here
          </Link>
        </p>

      </div>
    </div>
  );
}

const styles = {

container:{
height:"100vh",
display:"flex",
justifyContent:"center",
alignItems:"center",
background:"linear-gradient(135deg,#0f2027,#203a43,#2c5364)"
},

card:{
background:"#1c1c1c",
padding:"40px",
borderRadius:"15px",
width:"400px",
textAlign:"center",
boxShadow:"0px 0px 25px rgba(0,229,255,.3)"
},

title:{
color:"#00E5FF",
marginTop:"10px"
},

subtitle:{
color:"#ccc",
marginBottom:"30px"
},

input:{
width:"100%",
padding:"12px",
marginBottom:"15px",
borderRadius:"8px",
border:"none",
fontSize:"15px"
},

button:{
width:"100%",
padding:"12px",
background:"#00E5FF",
border:"none",
fontSize:"16px",
fontWeight:"bold",
cursor:"pointer",
borderRadius:"8px"
}

};

export default Login;