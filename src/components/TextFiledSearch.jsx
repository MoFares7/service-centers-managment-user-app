import React, { useState, useEffect } from 'react';
import { Button, Box, Stack, Typography, TextField } from '@mui/material';

const TextFieldSearch = () => {
        const [search, setSearch] = useState('');

        const handleSearch = async () => {
                if (search) {
                        // You can perform your search logic here
                        // For example, make an API request with the search query
                }
        };

        return (
                <Stack justifyContent="center" p="10px" alignItems="center" mt="40px">
                        <Typography
                                fontWeight={700}
                                sx={{
                                        fontSize: {
                                                lg: '44px',
                                                sm: '30px',
                                                xs: '22px',
                                        },
                                }}
                                mb="30px"
                                textAlign="center"
                        >
                                Awesome Activity You <br /> Should Know
                        </Typography>
                        <Box position="relative" mb="32px">
                                <TextField
                                        sx={{
                                                input: {
                                                        fontWeight: '700',
                                                        border: 'none',
                                                        borderRadius: '4px',
                                                },
                                                width: {
                                                        lg: '1000px',
                                                        md: '700px',
                                                        sm: '550px',
                                                        xs: '400px',
                                                },
                                                background: '#fff',
                                                borderRadius: '40px',
                                        }}
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value.toLowerCase())}
                                        placeholder="Search"
                                        type="text"
                                />
                                <Button
                                        className="search-btn"
                                        onClick={handleSearch}
                                        sx={{
                                                bgcolor: '#9C27B0',
                                                color: '#fff',
                                                textTransform: 'none',
                                                width: {
                                                        lg: '173px',
                                                        xs: '80px',
                                                },
                                                height: '56px',
                                                position: 'absolute',
                                                right: '0px',
                                                fontSize: {
                                                        lg: '20px',
                                                        xs: '14px',
                                                },
                                                '&:hover': {
                                                        backgroundColor: '#9C27B0',
                                                        color: 'white',
                                                },
                                        }}
                                >
                                        Search
                                </Button>
                        </Box>
                </Stack>
        );
};

export default TextFieldSearch;
