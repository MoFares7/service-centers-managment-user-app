import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import MainButton from '../Button';

export default function CenterCard({ centerName, centerCity, centerImage }) {
        const theme = useTheme();

        return (
                <Card sx={{
                        display: {
                                xs: 'block',
                                sm: 'block',
                                md: 'block',
                                xl: 'block'
                        },
                        maxWidth: {
                                xs: '200px',
                                sm: '300px',
                                md: '400px',
                                xl: '500px'
                        },
                        maxHeight: {
                                xs: '300px',
                                sm: '400px',
                                md: '500px',
                                xl: '600px'
                        },
                        backgroundColor: '#F5F5F5',
                        margin: '10px'

                }}>
                        <CardMedia
                                component="img"
                                sx={{ width: '100%' }}
                                image={centerImage}
                                alt="center image"
                        />
                        <CardContent sx={{ flex: '1 0 auto', pl: '7px', pr: '7px' }}>
                                <Typography sx={{
                                        fontSize: '17px',
                                        color: '#9C27B0',

                                }}>
                                        Center Name
                                </Typography>
                                <Typography sx={{
                                        fontSize: '15px',
                                        color: '#616161',

                                }}>
                                        {centerName}
                                </Typography>
                                <Typography sx={{
                                        fontSize: '17px',
                                        color: '#9C27B0',

                                }}>
                                        Center City
                                </Typography>
                                <Typography sx={{
                                        fontSize: '15px',
                                        color: '#616161',

                                }}>
                                        {centerCity}
                                </Typography>

                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pb: 1, justifyContent: 'center' }}>
                                <MainButton title='More Details' onclick />

                        </Box>


                </Card>
        );
}
