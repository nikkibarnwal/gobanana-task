import React from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ searchTerm, onSearchChange }) => (
  <TextField
    label="Search"
    variant="outlined"
    fullWidth
    value={searchTerm}
    onChange={(e) => onSearchChange(e.target.value)}
    margin="normal"
  />
);

export default SearchBar;
