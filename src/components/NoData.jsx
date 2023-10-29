import React from 'react'
import data from '../assets/icons/No-data.svg';
import { Box, Typography } from '@mui/material';

const NoData = () => {
        return (
                <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        pt: '200px',
                        maxWidth: '100%'
                }}>
                        <img src={data} width='250px' />
                        <Typography sx={{
                                fontSize: '20px',
                                fontFamily: 'Tajawal'
                        }}>
                                No Data Founded.
                        </Typography>
                </Box >
        )
}

export default NoData
