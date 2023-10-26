import { Box, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import loginImage from '../assets/images/login.png';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { login } from '../service/apiSlice';
import { setToken } from '../logic/authSlice';
import { toast, ToastContainer } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Apply toast styles
import { useHistory } from 'react-router-dom';

const defaultTheme = createTheme();

const LoginPage = () => {
        const dispatch = useDispatch();
        const [loading, setLoading] = useState(false);

        const handleSubmit = async (event) => {
                event.preventDefault();
                setLoading(true);
                const data = new FormData(event.currentTarget);
                const credentials = {
                        email: data.get('email'),
                        password: data.get('password'),
                        role_id: 3,
                };

                try {
                        const resultAction = await dispatch(login(credentials));
                        if (login.fulfilled.match(resultAction)) {
                                const token = resultAction.payload.token;
                                dispatch(setToken(token));
                                // Handle a successful login, e.g., redirect to another page.
                                window.location.href = '/';
                        } else if (login.rejected.match(resultAction)) {
                                toast.error('Email and Password not matched.');
                        }
                } catch (error) {
                        toast.error('An error occurred during login.');
                } finally {
                        setLoading(false);
                }
        };

        return (
                <Box
                        sx={{
                                display: {
                                        xs: 'block',
                                        sm: 'block',
                                        md: 'flex',
                                        lg: 'flex',
                                },
                                height: '100vh',
                        }}
                >
                        <Box
                                sx={{
                                        flex: 1,
                                        backgroundColor: '#9C27B0',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                }}
                        >
                                <img src={loginImage} width="50%" alt="Login" />
                        </Box>
                        <Box
                                sx={{
                                        flex: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                }}
                        >
                                <ThemeProvider theme={defaultTheme}>
                                        <Container component="main" maxWidth="xs">
                                                <CssBaseline />
                                                <Box
                                                        sx={{
                                                                marginTop: 2,
                                                                display: 'flex',
                                                                flexDirection: 'column',
                                                                alignItems: 'center',
                                                        }}
                                                >
                                                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                                                <LockOutlinedIcon />
                                                        </Avatar>
                                                        <Typography component="h1" variant="h5">
                                                                Login in TOGETHER
                                                        </Typography>
                                                        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                                                <TextField
                                                                        margin="normal"
                                                                        required
                                                                        fullWidth
                                                                        id="email"
                                                                        label="Email Address"
                                                                        name="email"
                                                                        autoComplete="email"
                                                                        autoFocus
                                                                />
                                                                <TextField
                                                                        margin="normal"
                                                                        required
                                                                        fullWidth
                                                                        name="password"
                                                                        label="Password"
                                                                        type="password"
                                                                        id="password"
                                                                        autoComplete="current-password"
                                                                />
                                                                <FormControlLabel
                                                                        control={<Checkbox value="remember" color="primary" />}
                                                                        label="Remember me"
                                                                />
                                                                {loading ? (
                                                                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                                                <CircularProgress />
                                                                        </Box>
                                                                ) : (
                                                                        <Button
                                                                                type="submit"
                                                                                fullWidth
                                                                                variant="contained"
                                                                                sx={{ mt: 3, mb: 2, backgroundColor: '#9C27B0' }}
                                                                        >
                                                                                Sign In
                                                                        </Button>
                                                                )}
                                                                <Grid container justifyContent="center">
                                                                        <Grid item>
                                                                                <Link
                                                                                        href="/signup"
                                                                                        variant="body2"
                                                                                        color="#9C27B0"
                                                                                        sx={{
                                                                                                textDecoration: 'none',
                                                                                                justifyContent: 'center',
                                                                                                alignItems: 'center',
                                                                                        }}
                                                                                >
                                                                                        {"Don't have an account? Sign Up"}
                                                                                </Link>
                                                                        </Grid>
                                                                </Grid>
                                                        </Box>
                                                </Box>
                                        </Container>
                                </ThemeProvider>
                        </Box>
                        <ToastContainer />
                </Box>
        );
};

export default LoginPage;
