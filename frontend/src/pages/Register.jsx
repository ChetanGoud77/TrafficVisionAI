import React, { useState } from "react";
import api from "../services/api";
import { Link, useNavigate } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await api.post("/register", form);
      alert("Registration Successful");
      navigate("/");
    } catch (err) {
      alert("Registration Failed");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <FaUserPlus size={60} color="#00E5FF" />

        <h1 style={styles.title}>Create Account</h1>

        <p style={styles.subtitle}>
          Join TrafficVision AI
        </p>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            style={styles.input}
            onChange={handleChange}
            required
          />

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
            Register
          </button>
        </form>

        <p style={{ marginTop: 20 }}>
          Already have an account?{" "}
          <Link to="/">Login Here</Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg,#0f2027,#203a43,#2c5364)"
  },

  card: {
    background: "#1c1c1c",
    padding: "40px",
    borderRadius: "15px",
    width: "420px",
    textAlign: "center",
    boxShadow: "0px 0px 25px rgba(0,229,255,.3)"
  },

  title: {
    color: "#00E5FF",
    marginTop: "10px"
  },

  subtitle: {
    color: "#ccc",
    marginBottom: "30px"
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "none",
    fontSize: "15px"
  },

  button: {
    width: "100%",
    padding: "12px",
    background: "#00E5FF",
    border: "none",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    borderRadius: "8px"
  }
};

export default Register;