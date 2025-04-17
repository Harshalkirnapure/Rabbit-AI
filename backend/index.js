const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const otpStore = new Map();

function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

app.post("/send-otp", async (req, res) => {
  const { email } = req.body;
  const otp = generateOtp();
  otpStore.set(email, otp);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  transporter.verify((error, success) => {
    if (error) {
      console.error("Transporter verification failed:", error);
    } else {
      console.log("✅ Transporter ready");
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your Rabbit AI OTP",
    text: `Your OTP is: ${otp}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`✅ OTP sent to ${email}: ${otp}`);
    res.status(200).json({ success: true, message: "OTP sent successfully" });
  } catch (error) {
    console.error("❌ Email error:", error);
    res.status(500).json({ success: false, message: "Failed to send OTP" });
  }
});

app.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;
  const storedOtp = otpStore.get(email);

  if (!storedOtp) {
    return res.status(400).json({ success: false, message: "OTP expired or not found" });
  }

  if (otp.trim() === storedOtp.trim()) {
    otpStore.delete(email);
    return res.status(200).json({ success: true, message: "OTP verified successfully" });
  }

  return res.status(400).json({ success: false, message: "Invalid OTP" });
});

app.listen(5000, () => {
  console.log("✅ Server running on http://localhost:5000");
});
