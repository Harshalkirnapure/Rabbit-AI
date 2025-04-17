import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles.css"


const Signup = () => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Candidate");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSendOtp = async () => {
    if (!email) {
      setError("Please enter your email address."); // ✅ Set error message
      return;
    }
       // Regex to validate email format
       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

       // Validate the email format
       if (!emailRegex.test(email)) {
         setError("Please enter a valid email address.");
         return;
       }
    try {
      await axios.post("http://localhost:5000/send-otp", { email });
      localStorage.setItem("email", email);
      setError("");
      navigate("/verify");
    } catch (err) {
      setError("Failed to send OTP. Please try again.");;
    }
  };

  const handleCheckboxChange = (selectedRole) => {
    // If the checkbox is already selected, uncheck it, otherwise check it
    setRole(role === selectedRole ? "" : selectedRole);
  };
  return (
    <div className="container">
      <div className="logo">
      <img className="rlogo" src="./Logo/RabitAI.png" alt="logo"/>
      </div>
      
      <h1>First of all, enter your email address</h1>
      <p>Signup as a</p>
      <div className="roles">
        {["Candidate", "Recruiter", "Admin"].map((r) => (
          <label key={r}>
            <input
              type="checkbox"
              // name="role"
              value={r}
              checked={role === r}
              onChange={() => handleCheckboxChange(r)}
            />
            {r}
          </label>
        ))}
      </div>
      <input
        type="email"
        placeholder="Email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {error && (
        <p style={{ color: "red", fontSize: "14px", marginTop: "8px" }}>{error}</p>
      )}
      
      <button onClick={handleSendOtp}>Continue</button>
      <br />
      <br />
      <button className="google">
        <img style={{marginLeft:60}} src="./Logo/google.png"></img></button>
      <p className="footer">
        Already using Rabbit AI? <a href="#">Sign in</a>
      </p>
      <a href="#" className="sign">Sign in to existing account</a>
    </div>
  );
};

export default Signup;
