import React from 'react';
import { Container, Typography, Grid, Box, Card, CardContent, CardMedia, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { postpaidPlansData } from './PostpaidPlansData';
import './PostpaidPlans.css'; // Import the CSS file

const PostpaidPlansPage = () => {
  return (
    <Container className="container">
      <Box className="header-box">
        <Typography variant="h4">Postpaid Plans</Typography>
      </Box>
      <Grid container spacing={4} className="plan-list">
        {postpaidPlansData.map((plan, index) => (
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

  const handleGetNow = () => {
    navigate('/get-postpaid-connection', { state: { plan } });
  };

  return (
    <Card className="plan-card">
      <CardMedia component="img" alt={plan.title} height="140" image={plan.imageUrl} />
      <CardContent className="plan-card-content">
        <Typography variant="h6" className="plan-title">{plan.title}</Typography>
        <Typography variant="body2" className="plan-detail">Validity: {plan.validity}</Typography>
        <Typography variant="body2" className="plan-detail">Benefits: {plan.benefits}</Typography>
        <Typography variant="body2" className="plan-detail">Subscriptions: {plan.subscriptions.join(', ')}</Typography>
        <Typography variant="h6" className="plan-price">{plan.price}</Typography>
        <Button 
          variant="contained" 
          color="primary" 
          className="get-now-button" 
          onClick={handleGetNow}
        >
          Get Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default PostpaidPlansPage;
