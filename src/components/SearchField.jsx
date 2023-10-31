import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const SearchTextField = () => {
        return (
                <TextField
                        placeholder="Search"
                        InputProps={{
                                sx: {
                                        margin: '0 auto',
                                        width: {
                                                xs: '200px',  // For extra-small screens
                                                sm: '250px',   // For small screens
                                                md: '400px',   // For medium screens
                                                lg: '700px',   // For large screens
                                                xl: '800px',   // For extra-large screens
                                        },
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: '2px solid white',
                                },
                                startAdornment: (
                                        <InputAdornment position="start">
                                                <IconButton>
                                                        <SearchIcon />
                                                </IconButton>
                                        </InputAdornment>
                                ),
                        }}
                />
        );
};

export default SearchTextField;
