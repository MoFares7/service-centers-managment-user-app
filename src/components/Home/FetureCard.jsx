import React from 'react';
import { Box, } from '@mui/material';
import { Container, Typography } from '@mui/material';

const CardExerciseDB = ({ color, borderColor, headerText, bodyText }) => {
        return (
                <div style={{ padding: '10px' }} >
                        <Container
                                sx={{
                                        border: `2px solid ${borderColor || 'blue'}`,
                                        backgroundColor: color || 'blue',
                                        maxWidth: {
                                                sm: '200px',
                                                xs: '300px',
                                                lg: '400px',
                                        },
                                        maxHeight: {
                                                xs: '200px',  // For extra-small screens
                                                sm: '230px',   // For small screens
                                                md: '300px',   // For medium screens
                                                lg: '400px',   // For large screens
                                                xl: '450px',
                                        },

                                }}
                        >
                                <Typography
                                        sx={{
                                                color: '#FFFF',
                                                textAlign: 'center',
                                                fontWeight: 'bold',
                                                fontSize: '20px',
                                                lineHeight: '35px',
                                                width: '100%',
                                        }}
                                >
                                        {headerText || 'No Title.'}
                                </Typography>
                        </Container>
                        <Container
                                sx={{
                                        border: `2px solid ${borderColor || 'blue'}`,
                                        backgroundColor: '#FFF',
                                        maxWidth: {
                                                sm: '200px',
                                                xs: '300px',
                                                lg: '400px',
                                        },
                                        maxHeight: {
                                                xs: '200px',  // For extra-small screens
                                                sm: '230px',   // For small screens
                                                md: '300px',   // For medium screens
                                                lg: '400px',   // For large screens
                                                xl: '450px',
                                        }

                                }}
                        >
                                <Typography
                                        sx={{
                                                color: '#757575',
                                                textAlign: 'center',
                                                paddingTop: '15px',
                                                paddingBottom: '15px',
                                                fontWeight: 'medium',
                                                fontSize: '15px',
                                                lineHeight: '25px',
                                                width: '100%',
                                        }}
                                >
                                        {bodyText || 'What ExerciseDB comes with.'}
                                </Typography>
                        </Container>
                </div>
        );
}

const FetureCard = () => {
        return (
                <Box
                        display={{ lg: 'flex', md: 'flex', sm: 'flex', xs: 'block' }}
                        justifyContent="center"
                        flexWrap="wrap"
                // width={{ lg: '1500px', xs: '1800px', sm: '800px' }}
                >
                        <CardExerciseDB
                                color="#1976D2"
                                borderColor="#1976D2"
                                headerText="Managment to your Appointment"
                                bodyText="Our system enables you to add and delete an appointment in the centers available on our platform."
                        />
                        <CardExerciseDB
                                color="#E64A19"
                                borderColor="#E64A19"
                                headerText="Managment to your Activity"
                                bodyText="Our system enables you to join the activity of stopping specific conditions in the centers available on our platform."
                        />
                        <CardExerciseDB
                                color="#7B1FA2"
                                borderColor="#7B1FA2"
                                headerText="Managment to your Rating"
                                bodyText="Our system enables you to evaluate the available centers that you have previously dealt with and that is very good to check from verfication."
                        />

                </Box>
        );
}

export default FetureCard;
