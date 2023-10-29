import React from 'react';
import Box from '@mui/material/Box';
import { Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import DetailsCenter from './pages/DetailsCenter';
import AppointmentsMangamentPage from './pages/AppointmentsMangamentPage';
import ActivitysManagmentPage from './pages/ActivitysManagmentPage';

function App() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            {/* <ResponsiveAppBar /> */}

            <Box style={{ flex: 1 }}>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/centerDetails' element={<DetailsCenter />}>
                        <Route path='appointments' element={<AppointmentsMangamentPage />} />
                        <Route path='volunteer' element={<ActivitysManagmentPage />} />
                    </Route>
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/signup' element={<SignUpPage />} />
                </Routes>
            </Box>

            {/* <Footer /> */}
        </div>
    );
}

export default App;
