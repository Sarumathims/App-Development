import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Checkbox, FormControlLabel } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import './PostpaidConnection.css'; // Import the CSS file

const PostpaidConnection = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { plan } = state || {};

  const [formData, setFormData] = useState({
    mobileNumber: '',
    name: '',
    alternateNumber: '',
    email: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    setFormData((prevData) => ({ ...prevData, agree: e.target.checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.agree) {
      // Handle form submission
      console.log(formData, plan);
    } else {
      alert('You must agree to the terms to proceed.');
    }
  };

  return (
    <Container className="postpaid-container">
      <Box className="postpaid-header">
        <Typography variant="h4">Get Airtel Postpaid Connection</Typography>
        <Typography variant="h6">Enjoy a stronger network with Postpaid</Typography>
      </Box>
      <form onSubmit={handleSubmit} className="postpaid-form">
        <Typography variant="h6">STEP 1: Pick a connection type</Typography>
        <Typography variant="body1">Prepaid to Postpaid</Typography>
        
        <Typography variant="h6">STEP 2: Add contact details</Typography>
        <TextField
          label="Mobile number"
          name="mobileNumber"
          variant="outlined"
          fullWidth
          required
          value={formData.mobileNumber}
          onChange={handleChange}
          className="form-field"
          placeholder="Enter airtel prepaid number"
        />
        <TextField
          label="Name"
          name="name"
          variant="outlined"
          fullWidth
          required
          value={formData.name}
          onChange={handleChange}
          className="form-field"
          placeholder="Enter your full name"
        />
        <TextField
          label="Alternate number"
          name="alternateNumber"
          variant="outlined"
          fullWidth
          required
          value={formData.alternateNumber}
          onChange={handleChange}
          className="form-field"
          placeholder="Enter alternate number"
        />
        <TextField
          label="E-mail address"
          name="email"
          variant="outlined"
          fullWidth
          required
          value={formData.email}
          onChange={handleChange}
          className="form-field"
          placeholder="example@example.com"
        />
        
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.agree}
              onChange={handleCheckboxChange}
              name="agree"
            />
          }
          label="I understand that upon proceeding:
                 1. I will be switched to Postpaid instantly.
                 2. I cannot move back to Prepaid for 90 days."
        />
        
        <Button variant="contained" color="primary" type="submit" className="submit-button">
          Get Postpaid
        </Button>
      </form>
    </Container>
  );
};

export default PostpaidConnection;
