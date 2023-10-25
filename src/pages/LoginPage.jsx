import { Box } from '@mui/system';
import React from 'react';
import login from '../assets/images/login.png';
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

const LoginPage = () => {
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
                                <img src={login} width='50%' />
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
                                                                <Button
                                                                        type="submit"
                                                                        fullWidth
                                                                        variant="contained"

                                                                        sx={{ mt: 3, mb: 2, backgroundColor: "#9C27B0" }}
                                                                >
                                                                        Sign In
                                                                </Button>
                                                                <Grid container justifyContent="center">
                                                                        <Grid item>
                                                                                <Link href="/signup" variant="body2" color='#9C27B0' sx={{
                                                                                        textDecoration: 'none',
                                                                                        justifyContent: 'center',
                                                                                        alignItems: 'center'
                                                                                }}>
                                                                                        {"Don't have an account? Sign Up"}
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

export default LoginPage;
