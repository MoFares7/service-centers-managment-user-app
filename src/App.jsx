import React from 'react';
import Box from '@mui/material/Box';
import { Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import DetailsCenter from './pages/DetailsCenter';
import ShowMyAppointment from './pages/ShowMyAppointment';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import PrivateRoute from './PrivateRoute';
import AccelerationComponent from './utils/AccelrationTest';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Box style={{ flex: 1 }}>
                    <PrivateRoute />
                    <Routes>
                        <Route path='/login' element={<LoginPage />} />
                        <Route path='/signup' element={<SignUpPage />} />
                        <Route path='/' element={<HomePage />} />
                        <Route
                            path='/centerDetails/:centerId'
                            element={<DetailsCenter />}
                        />
                        <Route
                            path='/centerDetails/:centerId/myAppointment'
                            element={<ShowMyAppointment />}
                        />
                    </Routes>
                </Box>
            </div>
        </ThemeProvider>
    );
}

export default App;
