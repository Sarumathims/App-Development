// src/Components/Homepage.js

import React from 'react';
import { Button, Grid, Typography, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import './Home.css'; // Ensure this path is correct

const Homepage = () => {
  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <Typography variant="h3" component="h1">
          Welcome to [MOBIXCHARGE]
        </Typography>
        <Typography variant="h5" component="p">
          Fast, Secure, and Convenient Mobile Recharge
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/signup">
          Get Started
        </Button>
      </header>

      <section className="features-section">
        <Typography variant="h4" component="h2">
          Why Choose Us?
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h3">
                  Instant Recharge
                </Typography>
                <Typography>
                  Get your mobile recharged instantly with our quick and reliable service.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h3">
                  Multiple Payment Options
                </Typography>
                <Typography>
                  We support various payment methods, including credit/debit cards, net banking, and popular digital wallets.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h3">
                  Safe & Secure
                </Typography>
                <Typography>
                  Your security is our top priority. All transactions are secured with advanced encryption technology.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h3">
                  Exclusive Offers
                </Typography>
                <Typography>
                  Enjoy exclusive deals and discounts on recharge plans and add-ons.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </section>

      <section className="how-it-works-section">
        <Typography variant="h4" component="h2">
          How It Works
        </Typography>
        <ol>
          <li>Select Your Operator: Choose from a wide range of telecom operators.</li>
          <li>Choose Your Plan: Browse through prepaid and postpaid plans that suit your needs.</li>
          <li>Make Payment: Use your preferred payment method for a hassle-free transaction.</li>
          <li>Recharge Completed: Receive instant confirmation and enjoy uninterrupted service.</li>
        </ol>
      </section>

      <section className="plans-section">
        <Typography variant="h4" component="h2">
          Popular Recharge Plans
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h3">
                  Prepaid Plan A
                </Typography>
                <Typography>Rs.350 - 1.5GB/day for 28 days</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h3">
                  Postpaid Plan C
                </Typography>
                <Typography>Rs.999 - 5GB/month + Unlimited Calls</Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Add more plans as needed */}
        </Grid>
      </section>

      <section className="testimonials-section">
        <Typography variant="h4" component="h2">
          Testimonials
        </Typography>
        <div className="testimonial">
          <Typography variant="body1">
            "Great service! I love the quick recharge process and the variety of plans available." - John D.
          </Typography>
        </div>
        <div className="testimonial">
          <Typography variant="body1">
            "The offers are fantastic and the payment process is smooth. Highly recommend!" - Jane S.
          </Typography>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
