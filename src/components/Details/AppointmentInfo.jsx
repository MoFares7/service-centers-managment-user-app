import React from 'react'
import { Box, Typography } from '@mui/material';

const AppointmentInfo = ({ image, title, description }) => {
        return (
                <Box
                        sx={{
                                borderRadius: '10px',
                                backgroundColor: '#F5F5F5',
                                border: '2px solid #9C27B0',
                                width: '200px',
                                height: "240px",
                                m: 1
                        }}

                >
                        <img src={image} width="100%" height="50%" style={{ borderTopLeftRadius: '9px', borderTopRightRadius: '9px' }} />
                        <Typography sx={{
                                fontSize: '16px',
                                pl: 1
                        }}>
                                {title}
                        </Typography>
                        <Typography sx={{
                                fontSize: '13px',
                                pl: 1,
                                color: '#757575'
                        }}>
                                {description}
                        </Typography>
                </Box>
        )
}

export default AppointmentInfo
