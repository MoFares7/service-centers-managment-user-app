import { Box, Typography } from '@mui/material'
import React from 'react'
import error from '../assets/icons/error.svg';

const ErrorData = () => {
        return (
                <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        pt: '200px',
                        maxWidth: '100%'
                }}>
                        <img src={error} width='200px' />
                        <Typography sx={{
                                fontSize: '20px',
                                fontFamily: 'Tajawal'
                        }}>
                                Error loading data. Please try again.
                        </Typography>
                </Box >
        )
}

export default ErrorData
