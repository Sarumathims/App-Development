import React, { useState } from 'react';
import { Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@mui/material';

// Sample data for payment history (replace with actual data from your API or state management)
const samplePaymentHistory = [
  { id: 1, transactionId: 'TX123456', date: '2024-07-15', amount: '$10', status: 'Success' },
  { id: 2, transactionId: 'TX123457', date: '2024-07-16', amount: '$20', status: 'Failed' },
  // Add more sample data as needed
];

const PaymentHistory = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredHistory = samplePaymentHistory.filter((record) =>
    record.transactionId.toLowerCase().includes(searchQuery.toLowerCase()) ||
    record.date.includes(searchQuery)
  );

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>Payment History</Typography>
        
        {/* Search Bar */}
        <Box mb={4}>
          <TextField
            label="Search by Transaction ID or Date"
            variant="outlined"
            fullWidth
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </Box>

        {/* Payment History Table */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Transaction ID</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredHistory.length > 0 ? (
                filteredHistory.map((record) => (
                  <TableRow key={record.id}>
                    <TableCell>{record.transactionId}</TableCell>
                    <TableCell>{record.date}</TableCell>
                    <TableCell>{record.amount}</TableCell>
                    <TableCell>{record.status}</TableCell>
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

export default PaymentHistory;
