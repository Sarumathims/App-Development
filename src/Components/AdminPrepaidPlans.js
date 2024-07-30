import React, { useState } from 'react';
import { Container, Typography, Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const AdminPrepaidPlans = () => {
  const [plans, setPlans] = useState([
    { id: 1, title: 'Plan 1', validity: '28 days', data: '1.5GB/day', price: '₹199', subscriptions: ['Netflix', 'Amazon Prime'] },
    // Add more plan objects as needed
  ]);

  const handleAddPlan = () => {
    // Logic to add a new plan
  };

  const handleEditPlan = (id) => {
    // Logic to edit an existing plan
  };

  const handleDeletePlan = (id) => {
    setPlans(plans.filter(plan => plan.id !== id));
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4">Admin - Prepaid Plans</Typography>
      </Box>
      <Button variant="contained" color="primary" onClick={handleAddPlan}>Add New Plan</Button>
      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Validity</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Subscriptions</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {plans.map((plan) => (
              <TableRow key={plan.id}>
                <TableCell>{plan.title}</TableCell>
                <TableCell>{plan.validity}</TableCell>
                <TableCell>{plan.data}</TableCell>
                <TableCell>{plan.price}</TableCell>
                <TableCell>{plan.subscriptions.join(', ')}</TableCell>
                <TableCell>
                  <Button variant="contained" color="secondary" onClick={() => handleEditPlan(plan.id)}>Edit</Button>
                  <Button variant="contained" color="error" onClick={() => handleDeletePlan(plan.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default AdminPrepaidPlans;
