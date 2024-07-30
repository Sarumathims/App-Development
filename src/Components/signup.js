import React, { useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Input,
  Button,
  Alert,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./signup.css";// Update the path as needed

const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isPhoneNumber = (phone) => /^[0-9]{10}$/.test(phone);

export default function SignupPage() {
  const [phoneInput, setPhoneInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [formValid, setFormValid] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate();

  const handlePhone = () => setPhoneError(!isPhoneNumber(phoneInput));
  const handleEmail = () => setEmailError(!isEmail(emailInput));
  const handlePassword = () => setPasswordError(!passwordInput || passwordInput.length < 5 || passwordInput.length > 20);
  const handleConfirmPassword = () => setConfirmPasswordError(passwordInput !== confirmPasswordInput);

  const handleSubmit = () => {
    setSuccess(null);
    handlePhone();
    handleEmail();
    handlePassword();
    handleConfirmPassword();

    if (phoneError || !phoneInput) {
      setFormValid("Phone number is invalid. Please re-enter.");
      return;
    }
    if (emailError || !emailInput) {
      setFormValid("Email is invalid. Please re-enter.");
      return;
    }
    if (passwordError || !passwordInput) {
      setFormValid("Password must be between 5 and 20 characters. Please re-enter.");
      return;
    }
    if (confirmPasswordError || !confirmPasswordInput) {
      setFormValid("Passwords do not match. Please re-enter.");
      return;
    }
    setFormValid(null);
    console.log("Phone:", phoneInput);
    console.log("Email:", emailInput);
    console.log("Password:", passwordInput);
    setSuccess("Registration successful.");

    setTimeout(() => navigate("/login"), 1000);
  };

  return (
    <div className="signup-container">
      <div className="signup-image">
      </div>
      <div className="signup-box">
        <center><h1>SIGN UP</h1></center>
        <div className="input-field">
          <TextField
            label="Phone Number"
            fullWidth
            error={phoneError}
            variant="standard"
            value={phoneInput}
            onBlur={handlePhone}
            onChange={(event) => setPhoneInput(event.target.value)}
            helperText={phoneError ? "Invalid phone number (must be 10 digits)" : ""}
          />
        </div>
        <div className="input-field">
          <TextField
            label="Email"
            fullWidth
            error={emailError}
            variant="standard"
            value={emailInput}
            onBlur={handleEmail}
            onChange={(event) => setEmailInput(event.target.value)}
            helperText={emailError ? "Invalid email address" : ""}
          />
        </div>
        <div className="input-field">
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="standard-adornment-password" error={passwordError}>
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type="password"
              value={passwordInput}
              onChange={(event) => setPasswordInput(event.target.value)}
              onBlur={handlePassword}
              error={passwordError}
            />
            {passwordError && (
              <div className="error-text">
                Password must be between 5 and 20 characters
              </div>
            )}
          </FormControl>
        </div>
        <div className="input-field">
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="standard-adornment-confirm-password" error={confirmPasswordError}>
              Confirm Password
            </InputLabel>
            <Input
              id="standard-adornment-confirm-password"
              type="password"
              value={confirmPasswordInput}
              onChange={(event) => setConfirmPasswordInput(event.target.value)}
              onBlur={handleConfirmPassword}
              error={confirmPasswordError}
            />
            {confirmPasswordError && (
              <div className="error-text">
                Passwords do not match
              </div>
            )}
          </FormControl>
        </div>
        <Button variant="contained" fullWidth onClick={handleSubmit}>
          SIGN UP
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
        <div className="login-link">
          Already have an account?{" "}
          <Button className="link" onClick={() => navigate("/login")}>
            Log In
          </Button>
        </div>
      </div>
    </div>
  );
}
