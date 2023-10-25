import { Box } from '@mui/system';
import React from 'react';
import login from '../assets/images/signup.png';
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

const defaultTheme = createTheme();

const SignUpPage = () => {
        const handleSubmit = (event) => {
                event.preventDefault();
                const data = new FormData(event.currentTarget);
                console.log({
                        email: data.get('email'),
                        password: data.get('password'),
                });
        };
        return (
                <Box
                        sx={{
                                display: {
                                        xs: 'block',
                                        sm: 'block',
                                        md: 'flex',
                                        lg: 'flex'

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
                                        justifyContent: 'center'
                                }}
                        >
                                <img src={login} width='100%' />
                        </Box>
                        <Box
                                sx={{
                                        flex: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                }}
                        >



                                <ThemeProvider theme={defaultTheme}>
                                        <Container component="main" maxWidth="xs">
                                                <CssBaseline />
                                                <Box
                                                        sx={{
                                                                marginTop: 8,
                                                                display: 'flex',
                                                                flexDirection: 'column',
                                                                alignItems: 'center',
                                                        }}
                                                >
                                                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                                                <LockOutlinedIcon />
                                                        </Avatar>
                                                        <Typography component="h1" variant="h5">
                                                                Sign up
                                                        </Typography>
                                                        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                                                <Grid container spacing={2}>
                                                                        <Grid item xs={12} sm={6}>
                                                                                <TextField
                                                                                        autoComplete="given-name"
                                                                                        name="firstName"
                                                                                        required
                                                                                        fullWidth
                                                                                        id="firstName"
                                                                                        label="First Name"
                                                                                        autoFocus
                                                                                />
                                                                        </Grid>
                                                                        <Grid item xs={12} sm={6}>
                                                                                <TextField
                                                                                        required
                                                                                        fullWidth
                                                                                        id="lastName"
                                                                                        label="Last Name"
                                                                                        name="lastName"
                                                                                        autoComplete="family-name"
                                                                                />
                                                                        </Grid>
                                                                        <Grid item xs={12}>
                                                                                <TextField
                                                                                        required
                                                                                        fullWidth
                                                                                        id="email"
                                                                                        label="Email Address"
                                                                                        name="email"
                                                                                        autoComplete="email"
                                                                                />
                                                                        </Grid>
                                                                        <Grid item xs={12}>
                                                                                <TextField
                                                                                        required
                                                                                        fullWidth
                                                                                        name="password"
                                                                                        label="Password"
                                                                                        type="password"
                                                                                        id="password"
                                                                                        autoComplete="new-password"
                                                                                />
                                                                        </Grid>

                                                                </Grid>
                                                                <Button
                                                                        type="submit"
                                                                        fullWidth
                                                                        variant="contained"
                                                                        sx={{ mt: 3, mb: 2, backgroundColor: "#9C27B0" }}
                                                                >
                                                                        Create Account
                                                                </Button>
                                                                <Grid container justifyContent="center">
                                                                        <Grid item>
                                                                                <Link href="/login" variant="body2" color='#9C27B0' sx={{
                                                                                        textDecoration: 'none',
                                                                                        justifyContent: 'center',
                                                                                        alignItems: 'center'
                                                                                }}>
                                                                                        {"you have an account? Login"}
                                                                                </Link>
                                                                        </Grid>
                                                                </Grid>
                                                        </Box>
                                                </Box>

                                        </Container>
                                </ThemeProvider>
                        </Box>
                </Box >
        );
};

export default SignUpPage;
