import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

const PrivateRoute = () => {
        const token = localStorage.getItem('token');
        if (!token) {
                { return <LoginPage /> }
        }
        return <Outlet />;
};

export default PrivateRoute;
