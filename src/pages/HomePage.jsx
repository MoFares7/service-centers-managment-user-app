import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import global from '../assets/images/global.jpg';
import HeaderScope from '../components/Home/HeaderScope';
import FetureCard from './../components/Home/FetureCard';
import CenterCard from '../components/Home/CenterCard';
import Footer from '../components/Footer';

const HomePage = () => {
        return (
                <Box>
                        <HeaderScope />
                        <Box>
                                <Typography sx={{
                                        fontSize: '25px',
                                        fontWeight: 'bold',
                                        color: '#9C27B0',
                                        padding: '20px'
                                }}>
                                        Our Feature
                                </Typography>
                                <FetureCard />
                                <Typography sx={{
                                        fontSize: '25px',
                                        fontWeight: 'bold',
                                        color: '#9C27B0',
                                        padding: '20px'
                                }}>
                                        Our Centers in TOGETHER
                                </Typography>
                                <Box
                                        display={{ lg: 'flex', md: 'flex', sm: 'flex', xs: 'flex' }}
                                        justifyContent="center"
                                        flexWrap="wrap"
                                        sx={{
                                                p: '10px',
                                                '& .center-card': {
                                                        margin: '10px', // Adjust the margin as needed
                                                },
                                        }}
                                >
                                        <CenterCard
                                                className="center-card"
                                                centerName='Sanad'
                                                centerCity='Liverpool'
                                                centerImage={global}
                                        />
                                        <CenterCard
                                                className="center-card"
                                                centerName='Sanad'
                                                centerCity='Liverpool'
                                                centerImage={global}
                                        />
                                        <CenterCard
                                                className="center-card"
                                                centerName='Sanad'
                                                centerCity='Liverpool'
                                                centerImage={global}
                                        />
                                        <CenterCard
                                                className="center-card"
                                                centerName='Sanad'
                                                centerCity='Liverpool'
                                                centerImage={global}
                                        />
                                </Box>

                        </Box>
                   
                </Box >

        );
};

export default HomePage;
