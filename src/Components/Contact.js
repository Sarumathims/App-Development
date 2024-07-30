// src/Components/Contact.js

import React from 'react';
import { Typography, Link } from '@mui/material';
import { Phone, MailOutline, LocationOn, Facebook, Twitter } from '@mui/icons-material';
import './Contact.css'; // Ensure this path is correct

const Contact = () => {
  return (
    <div className="contact-container">
      <Typography variant="h3" component="h1" className="contact-header">
        MobiXcharge Systems Limited
      </Typography>
      
      <section className="contact-section">
        <Typography variant="h5" component="h2" className="contact-subheader">
          Customer Care
        </Typography>
        <Typography variant="body1" className="contact-text">
          We stay by the phone to help you through all your doubts and queries. For any assistance or clarification, please contact MobiXcharge helpline number:
        </Typography>
        <Typography variant="body1" className="contact-text">
          <Phone /> 080-69808320 (Monday to Saturday 9:00 am to 8:00 pm)
        </Typography>
      </section>

      <section className="contact-section">
        <Typography variant="h5" component="h2" className="contact-subheader">
          Mail Us
        </Typography>
        <Typography variant="body1" className="contact-text">
          We hate to see you in confusion. We ensure 24*7 customer support so that you are never in trouble. For any query, write to us at
          <Link href="mailto:info@mobixcharge.com" target="_blank" rel="noopener" className="contact-link">
            info@mobixcharge.com
          </Link>.
        </Typography>
      </section>

      <section className="contact-section">
        <Typography variant="h5" component="h2" className="contact-subheader">
          Social Media Support
        </Typography>
        <Typography variant="body1" className="contact-text">
          We are just a text away. For any support, reach out to us through our Twitter handle 
          <Link href="https://twitter.com/MobixchargeSWAT" target="_blank" rel="noopener" className="contact-link">
            @mobixcharge
          </Link> or the 
          <Link href="https://www.facebook.com/Mobixcharge" target="_blank" rel="noopener" className="contact-link">
            Mobixcharge Facebook Page
          </Link>.
        </Typography>
      </section>

      <section className="contact-section">
        <Typography variant="h5" component="h2" className="contact-subheader">
          Business Alliances And Inquiries
        </Typography>
        <Typography variant="body1" className="contact-text">
          <MailOutline /> partners@mobixcharge.com
        </Typography>
      </section>

      <section className="contact-section">
        <Typography variant="h5" component="h2" className="contact-subheader">
          Address
        </Typography>
        <Typography variant="body1" className="contact-text">
          <LocationOn /> Unit No. 102, 1st Floor, Block-B, Pegasus One,
        </Typography>
        <Typography variant="body1" className="contact-text">
          Golf Course Road,
        </Typography>
        <Typography variant="body1" className="contact-text">
          Sector-53, Coimbatore,
        </Typography>
        <Typography variant="body1" className="contact-text">
          Tamil Nadu, India
        </Typography>
      </section>

      <section className="contact-section">
        <Typography variant="h5" component="h2" className="contact-subheader">
          Download our App
        </Typography>
        <Typography variant="body1" className="contact-text">
          Stay connected on the go! Download our app for a seamless recharge experience.
        </Typography>
        {/* You can add buttons or links to app stores here */}
      </section>
    </div>
  );
};

export default Contact;
