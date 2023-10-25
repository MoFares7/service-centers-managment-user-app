import React from 'react'
import SearchTextField from './../SearchField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import global from '../../assets/images/global.jpg';

const HeaderScope = () => {
        return (

                <Box
                        sx={{
                                // display: 'flex',
                                height: '450px',
                                flexDirection: 'column',
                                background: `url(${global})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center center",

                        }}
                >
                        <Typography
                                variant="h4"
                                color="#fff"
                                sx={{
                                        paddingTop: '100px',
                                        paddingBottom: '20px',
                                        paddingLeft: '60px',
                                        paddingRight: '60px',
                                        fontWeight: 'bold',
                                        fontSize: '60px',
                                        top: 120,
                                        justifyContent: 'start',

                                }}
                        >
                                TOGETHER
                        </Typography>
                        <Typography
                                variant="h4"
                                color="#fff"
                                sx={{
                                        fontSize: '20px',
                                        paddingTop: '10px',
                                        paddingBottom: '60px',
                                        paddingLeft: '60px',
                                        paddingRight: '60px',

                                }}
                        >
                                Our application was created to help you
                                <br />
                                find the appropriate center and enjoy
                                <br />
                                the features of each center
                        </Typography>
                        <Box
                                sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                }}
                        >
                                <SearchTextField />
                        </Box>

                </Box>
        )
}

export default HeaderScope
