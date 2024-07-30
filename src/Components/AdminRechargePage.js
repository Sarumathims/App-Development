// src/Components/AdminRechargeHistory.js
import React, { useState } from 'react';
import { Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button } from '@mui/material';

// Sample data for recharge history (replace with actual data from your API or state management)
const sampleRechargeHistory = [
  { id: 1, user: 'John Doe', plan: 'Prepaid Plan A', amount: '$10', date: '2024-07-15' },
  { id: 2, user: 'Jane Smith', plan: 'Postpaid Plan B', amount: '$20', date: '2024-07-16' },
  // Add more sample data as needed
];

const AdminRechargeHistory = () => {
  const [rechargeHistory, setRechargeHistory] = useState(sampleRechargeHistory);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredHistory = rechargeHistory.filter((record) =>
    record.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
    record.plan.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>Admin - Recharge History</Typography>
        
        {/* Search Bar */}
        <Box mb={4}>
          <TextField
            label="Search by User or Plan"
            variant="outlined"
            fullWidth
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </Box>

        {/* Recharge History Table */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>User</TableCell>
                <TableCell>Plan</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredHistory.length > 0 ? (
                filteredHistory.map((record) => (
                  <TableRow key={record.id}>
                    <TableCell>{record.user}</TableCell>
                    <TableCell>{record.plan}</TableCell>
                    <TableCell>{record.amount}</TableCell>
                    <TableCell>{record.date}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} align="center">No records found</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default AdminRechargeHistory;
