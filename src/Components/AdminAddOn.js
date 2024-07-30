// src/Components/AdminAddOn.js
import React, { useState } from 'react';
import { Container, Typography, Box, Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// Sample data for add-ons (you can replace this with actual data from your API or state management)
const sampleAddOns = [
  { id: 1, name: 'Data Booster', description: 'Extra 5GB Data', price: 'Rs.400' },
  { id: 2, name: 'Call Booster', description: 'Extra 1000 minutes', price: 'Rs. 240' },
];

const AdminAddOns = () => {
  const [addOns, setAddOns] = useState(sampleAddOns);
  const [newAddOn, setNewAddOn] = useState({ name: '', description: '', price: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAddOn((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddAddOn = () => {
    if (newAddOn.name && newAddOn.description && newAddOn.price) {
      setAddOns((prev) => [
        ...prev,
        { id: prev.length + 1, ...newAddOn }
      ]);
      setNewAddOn({ name: '', description: '', price: '' });
    }
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>Manage Add-ons</Typography>
        
        {/* Add Add-On Form */}
        <Box mb={4}>
          <Typography variant="h6" gutterBottom>Add New Add-on</Typography>
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={newAddOn.name}
            onChange={handleInputChange}
          />
          <TextField
            label="Description"
            name="description"
            variant="outlined"
            fullWidth
            margin="normal"
            value={newAddOn.description}
            onChange={handleInputChange}
          />
          <TextField
            label="Price"
            name="price"
            variant="outlined"
            fullWidth
            margin="normal"
            value={newAddOn.price}
            onChange={handleInputChange}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddAddOn}
            style={{ marginTop: '16px' }}
          >
            Add Add-on
          </Button>
        </Box>

        {/* Add-ons List */}
        <Typography variant="h6" gutterBottom>Existing Add-ons</Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {addOns.map((addOn) => (
                <TableRow key={addOn.id}>
                  <TableCell>{addOn.name}</TableCell>
                  <TableCell>{addOn.description}</TableCell>
                  <TableCell>{addOn.price}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="secondary" style={{ marginRight: '8px' }}>
                      Edit
                    </Button>
                    <Button variant="contained" color="error">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default AdminAddOns;
