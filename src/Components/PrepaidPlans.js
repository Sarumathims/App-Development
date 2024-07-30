// PrepaidPlansPage.js
import React from 'react';
import { Container, Typography, Grid, Box, Card, CardContent, CardMedia, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { plansData } from './PlansData';
import './PrepaidPlans.css'; // Import the CSS file

const PrepaidPlansPage = () => {
  return (
    <Container className="container">
      <Box my={4} p={2} className="header-box">
        <Typography variant="h4">Popular Plans</Typography>
      </Box>
      <Grid container spacing={4}>
        {plansData.map((plan, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <PlanCard plan={plan} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const PlanCard = ({ plan }) => {
  const navigate = useNavigate();

  const handleRecharge = () => {
    navigate('/recharge', { state: { plan } });
  };
  return (

  <Card className="plan-card">
    <CardMedia component="img" alt={plan.title} height="140" image={plan.imageUrl} />
    <CardContent className="plan-card-content">
      <Typography variant="h6" className="plan-title">{plan.title}</Typography>
      <Typography variant="body2" className="plan-detail">Validity: {plan.validity}</Typography>
      <Typography variant="body2" className="plan-detail">Data: {plan.data}</Typography>
      <Typography variant="body2" className="plan-detail">Subscriptions: {plan.subscriptions.join(', ')}</Typography>
      <Typography variant="h6" className="plan-price">{plan.price}</Typography>
      <Button 
          variant="contained" 
          color="primary" 
          className="recharge-button" 
          onClick={handleRecharge}
        >
          Recharge
        </Button>
    </CardContent>

  </Card>
);
};

export default PrepaidPlansPage;
