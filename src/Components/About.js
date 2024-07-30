// src/Components/About.js

import React from 'react';
import { Typography, Grid, Card, CardContent } from '@mui/material';
import './About.css'; // Ensure this path is correct

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <Typography variant="h3" component="h1">
          About Us
        </Typography>
        <Typography variant="h5" component="p">
          Discover Our Journey and Values
        </Typography>
      </header>

      <section className="about-section">
        <Typography variant="h4" component="h2">
          Our Company
        </Typography>
        <Typography variant="body1">
          Welcome to [MobiXcharge], your trusted partner for quick and convenient mobile recharge services. Established in [2024], we are dedicated to providing seamless and secure online recharge solutions to our customers. With a user-friendly platform and a wide range of payment options, we ensure that staying connected is easy and hassle-free.
        </Typography>
      </section>

      <section className="about-section">
        <Typography variant="h4" component="h2">
          Our Mission
        </Typography>
        <Typography variant="body1">
          Our mission is to simplify the mobile recharge process, offering a reliable and efficient service that caters to the needs of our diverse customer base. We aim to provide value through exclusive offers and deals, ensuring our customers always get the best out of their mobile plans.
        </Typography>
      </section>

      <section className="about-section">
        <Typography variant="h4" component="h2">
          Our Vision
        </Typography>
        <Typography variant="body1">
          We envision a world where staying connected is effortless and affordable. By leveraging cutting-edge technology and focusing on customer satisfaction, we strive to be the leading provider of online recharge services, continually enhancing our platform to meet the evolving needs of our users.
        </Typography>
      </section>

      <section className="about-section">
        <Typography variant="h4" component="h2">
          Core Values
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h3">
                  Innovation
                </Typography>
                <Typography>
                  We constantly seek innovative solutions to improve our services and offer our customers the best experience possible.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h3">
                  Integrity
                </Typography>
                <Typography>
                  We operate with honesty and transparency, building trust with our customers through reliable and secure services.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h3">
                  Customer Focus
                </Typography>
                <Typography>
                  Our customers are at the heart of everything we do. We prioritize their needs and work tirelessly to exceed their expectations.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </section>

      <section className="about-section">
        <Typography variant="h4" component="h2">
          Meet Our Team
        </Typography>
        <Typography variant="body1">
          Our team is composed of passionate professionals dedicated to delivering exceptional service. From our customer support team to our technical experts, everyone at [Your Service Name] shares a common goal: to make mobile recharging easy and convenient for you.
        </Typography>
        {/* Add team member details or images here if desired */}
      </section>

      <section className="about-section">
        <Typography variant="h4" component="h2">
          Contact Us
        </Typography>
        <Typography variant="body1">
          For any inquiries or support, feel free to reach out to us. We are here to assist you with all your needs and ensure you have a smooth experience with our services.
        </Typography>
        <Typography variant="body1">
          <strong>Email:</strong> support@example.com
        </Typography>
        <Typography variant="body1">
          <strong>Phone:</strong> +123 456 7890
        </Typography>
      </section>
    </div>
  );
};

export default About;
