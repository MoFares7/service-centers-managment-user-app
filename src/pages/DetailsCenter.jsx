import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import DrawerCenterDetails from '../components/Drawer';
import LoginPage from './LoginPage';
import PrivateRoute from './../PrivateRoute';

const DetailsCenter = () => {


        return (
                <Box>
                        <PrivateRoute />
                        <DrawerCenterDetails />
                </Box>
        )
}

export default DetailsCenter
