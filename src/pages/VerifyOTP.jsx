import React, { useRef, useState } from "react";
import axios from "axios";
import "./VerifyOTP.css"; // optional: for extra styling
import { useNavigate } from "react-router-dom";

/*Created by harshal Kirnapure */

const VerifyOTP = () => {
  const email = localStorage.getItem("email");
  const navigate = useNavigate();
  const [otpArray, setOtpArray] = useState(["", "", "", "", "", ""]);
  const [errorMessage, setErrorMessage] = useState(""); // For error message
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/, ""); // allow only digits
  
    const newOtp = [...otpArray];
    newOtp[index] = value;
    setOtpArray(newOtp);
  
    // Move to next input if value entered
    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otpArray];
  
      if (otpArray[index]) {
        // Just clear current if it has a value
        newOtp[index] = "";
        setOtpArray(newOtp);
      } else if (index > 0) {
        // Move back and clear
        newOtp[index - 1] = "";
        setOtpArray(newOtp);
        inputsRef.current[index - 1]?.focus();
      }
    }
  
    // Optional: allow left/right arrow navigation
    if (e.key === "ArrowLeft" && index > 0) {
      inputsRef.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleVerify = async () => {
    const otp = otpArray.join("");
    try {
      await axios.post("http://localhost:5000/verify-otp", { email, otp });
      alert("Login Successful!");
      setErrorMessage(""); // Clear any previous error on successful login
      navigate("/profile");
    } catch (err) {
      setErrorMessage("Please enter valid code ! Resend ."); // Set error message
      setOtpArray(["", "", "", "", "", ""]); // Optionally reset OTP inputs
      inputsRef.current[0]?.focus(); // Focus on the first input
    }
  };

  return (
    <div className="container">
      <div className="logo">
        <img className="rlogo" src="./Logo/RabitAI.png" alt="logo" />
      </div>
      <div className="ptext">
        <p>Enter magic code sent to your email address</p>
      </div>

      <p>Account verification</p>
      <div className="magic">
        <img src="./Logo/mdi_tick-circle.svg" alt="tick icon" />
        <p>Magic code sent to the given email id</p>
      </div>
      <br />
       <text>Enter OTP</text>
      <div className="otp-box">
        {otpArray.map((digit, i) => (
          <input
            key={i}
            type="password"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            ref={(ref) => (inputsRef.current[i] = ref)}
            className="otp-input"
          />
        ))}
      </div>

      {/* Display error message if OTP is invalid */}
      {errorMessage && (
        <p style={{ color: "red", fontSize: "14px", marginTop: "10px" }}>
          {errorMessage}
        </p>
      )}

      <p>
        Not received OTP? <a className="sign" href="#">Resend code</a>
      </p>

      <button onClick={handleVerify}>Submit</button>
      <button className="google">Continue with Google</button>

      <p className="footer">
        Already using Rabbit AI? 
      </p>

      <a href="#" className="sign">
        Sign in to existing account
      </a>
    </div>
  );
};

export default VerifyOTP;
