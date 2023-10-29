import React, { useEffect } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { fetchCentersAsync } from '../service/centersSliceService';
import CenterCard from '../components/Home/CenterCard';
import HeaderScope from '../components/Home/HeaderScope';
import ErrorData from '../components/ErrorData';
import FetureCard from '../components/Home/FetureCard';
import DrawerCenterDetails from '../components/Drawer';
import NoData from '../components/NoData';

const HomePage = () => {
        const dispatch = useDispatch();
        const centers = useSelector((state) => state.center.data);
        const status = useSelector((state) => state.center.status);
        const navigate = useNavigate(); // Initialize navigate

        useEffect(() => {
                if (status === 'idle') {
                        dispatch(fetchCentersAsync());
                }
        }, [status, dispatch]);

        // Debugging output
        console.log('status:', status);
        console.log('centers:', centers);

        // Handle click on CenterCard to navigate
        const handleCenterCardClick = (centerId) => {
                // Use navigate to go to the DetailsCenter route with the centerId as a parameter
                navigate(`/centerDetails/${centerId}`);
        };

        // Conditional rendering
        if (status === 'loading') {
                return <CircularProgress />;
        } else if (status === 'failed') {
                return <ErrorData />;
        } else if (Array.isArray(centers)) {
                return (
                        <Box>
                                <HeaderScope />
                                <Typography
                                        sx={{ fontSize: '25px', fontWeight: 'bold', color: '#9C27B0', padding: '20px' }}
                                >
                                        Our Service in TOGETHER
                                </Typography>
                                <FetureCard />
                                <Typography
                                        sx={{ fontSize: '25px', fontWeight: 'bold', color: '#9C27B0', padding: '20px' }}
                                >
                                        Our Centers in TOGETHER
                                </Typography>
                                <Box
                                        display={{ lg: 'flex', md: 'flex', sm: 'flex', xs: 'flex' }}
                                        justifyContent="center"
                                        flexWrap="wrap"
                                        sx={{
                                                p: '10px',
                                                '& .center-card': {
                                                        margin: '10px',
                                                },
                                        }}
                                >
                                        {centers.length === 0 ? (
                                                <NoData />
                                        ) : (
                                                centers.map((center) => (
                                                        <CenterCard
                                                                centerName={center.name_en}
                                                                centerCity={center.en_city_name}
                                                                centerImage={center.logo}
                                                                onClick={() => handleCenterCardClick(center.id)}
                                                                key={center.id}
                                                                to={`/centerDetails/${center.id}`}
                                                        />
                                                ))
                                        )}
                                </Box>
                        </Box>
                );
        }

        return null;
};

export default HomePage;
