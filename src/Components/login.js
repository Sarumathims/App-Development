import React, { useState } from "react";
import { TextField, Button, Alert, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./login.css";

const isPhoneNumber = (phone) => /^[0-9]{10}$/.test(phone); // Simple validation for a 10-digit phone number
const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Basic email validation

export default function Login() {
  const [phoneInput, setPhoneInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [formValid, setFormValid] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate();

  const handlePhone = () => {
    setPhoneError(!isPhoneNumber(phoneInput));
  };

  const handleEmail = () => {
    setEmailError(!isEmail(emailInput));
  };

  const handlePassword = () => {
    setPasswordError(passwordInput.length < 6); // Simple validation for password length
  };

  const handleSubmit = () => {
    setSuccess(null);
    handlePhone();
    handleEmail();
    handlePassword();

    if (
      phoneError ||
      !phoneInput ||
      emailError ||
      !emailInput ||
      passwordError ||
      !passwordInput
    ) {
      setFormValid("Please fill out the form correctly.");
      return;
    }
    setFormValid(null);
    console.log("Phone Number:", phoneInput);
    console.log("Email:", emailInput);
    console.log("Password:", passwordInput);
    setSuccess("Form submitted successfully.");

    // Mock user role check (this should be replaced with actual role validation logic)
    const mockUserRole =
      emailInput === "admin@example.com" ? "admin" : "customer";

    setTimeout(() => {
      if (mockUserRole === "admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/customer-dashboard");
      }
    }, 1000);
  };

  return (
    <div className="container">
      <div className="login-content">
        <div className="info-section">
          <h2>The new age way to pay!</h2>
          <p>Make payments, send & receive money instantly & all with a tap!</p>
          <ul>
            <li>Scan any QR</li>
            <li>Send/Receive from any app</li>
            <li>Pay any phone number</li>
          </ul>
          <p>Scan to download our app for a smooth & fast experience.</p>
        </div>
        <div className="form-section">
          <div className="login-box">
            <h1>Welcome back!</h1>
            <p>Please login to access your account.</p>
            <TextField
              label="Phone Number"
              fullWidth
              error={phoneError}
              variant="standard"
              value={phoneInput}
              onBlur={handlePhone}
              onChange={(event) => setPhoneInput(event.target.value)}
              helperText={phoneError ? "Invalid phone number" : ""}
              margin="normal"
            />
            <TextField
              label="Email"
              fullWidth
              error={emailError}
              variant="standard"
              value={emailInput}
              onBlur={handleEmail}
              onChange={(event) => setEmailInput(event.target.value)}
              helperText={emailError ? "Invalid email" : ""}
              margin="normal"
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              error={passwordError}
              variant="standard"
              value={passwordInput}
              onBlur={handlePassword}
              onChange={(event) => setPasswordInput(event.target.value)}
              helperText={
                passwordError ? "Password must be at least 6 characters" : ""
              }
              margin="normal"
            />
            <Button variant="contained" fullWidth onClick={handleSubmit}>
              LOGIN
            </Button>
            {formValid && (
              <Stack sx={{ width: "100%", paddingTop: "10px" }} spacing={2}>
                <Alert severity="error" size="small">
                  {formValid}
                </Alert>
              </Stack>
            )}
            {success && (
              <Stack sx={{ width: "100%", paddingTop: "10px" }} spacing={2}>
                <Alert severity="success" size="small">
                  {success}
                </Alert>
              </Stack>
            )}
            <div
              style={{
                marginTop: "1rem",
                fontSize: "12px",
                textAlign: "center",
              }}
            >
              <Button
                className="link"
                onClick={() => navigate("/ForgotPassword")}
              >
                Forgot Password?
              </Button>
              <br />
              Don't have an account?{" "}
              <Button
                className="link"
                onClick={() => navigate("/signup")} // Navigate to signup page
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
