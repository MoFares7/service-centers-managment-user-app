import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import myappointment from '../assets/images/myappointment.webp';

const ShowMyAppointment = () => {
        return (
                <div style={{
                        display: 'flex',
                        justifyContent: 'center', // Center horizontally
                        alignItems: 'center', // Center vertically
                        minHeight: '100vh', // Set a minimum height to center vertically on the page
                }}>


                        <Box sx={{


                                maxWidth: {
                                        xs: '350px',
                                        sm: '450px',
                                        md: '550px',
                                        lg: '650px'
                                },
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                backgroundColor: '#F5F5F5',
                                borderRadius: '10px'
                        }}>
                                <img src={myappointment} style={{
                                        borderTopLeftRadius: '10px',
                                        borderTopRightRadius: '10px',
                                }} width='100%' height='40%' />
                                <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        p: 1
                                }}>

                                        <Typography>
                                                Appointment Center
                                        </Typography>

                                        <Typography sx={{
                                                color: '#9E9E9E',
                                        }}>
                                                Sanad Team
                                        </Typography>
                                </Box>
                                <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        p: 1
                                }}>
                                        <Typography>
                                                Appointment Time
                                        </Typography>

                                        <Typography sx={{
                                                color: '#9E9E9E',
                                        }}>
                                                20:00
                                        </Typography>
                                </Box>
                                <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        p: 1
                                }}>
                                        <Typography>
                                                Appointment Date
                                        </Typography>

                                        <Typography sx={{
                                                color: '#9E9E9E',
                                        }}>
                                                20/9/2023
                                        </Typography>

                                </Box>
                                <Box sx={{
                                        display: {
                                                xs: 'block',
                                                sm: 'block',
                                                md: 'flex',

                                        },
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                }}>
                                        <Button sx={{
                                                width: '200px',
                                                height: '40px',
                                                backgroundColor: '#F44336',
                                                color: 'white',

                                                mb: 1,
                                                '&:hover': {
                                                        backgroundColor: '#D32F2F',
                                                        color: 'white',
                                                },
                                        }}>
                                                Delete Appointment
                                        </Button>
                                </Box>
                        </Box>
                </div>
        )
}

export default ShowMyAppointment
