import React, { useState, useRef } from 'react'
import { Box, Button, Typography } from '@mui/material';
import t from '../../assets/images/global.jpg';
import BottomSheet from './../BottomSheet';
import MainButton from '../Button';

const ActivityCard = () => {
        const [bottomSheetOpen, setBottomSheetOpen] = useState(false);

        const openBottomSheet = () => {
                setBottomSheetOpen(true);
        };

        const closeBottomSheet = () => {
                setBottomSheetOpen(false);
        };

        //! section to upload files ////////////////////////////
        const fileInputRef = useRef(null);
        const [selectedFileName, setSelectedFileName] = useState(null);

        const handleButtonClick = () => {
                // Trigger a click event on the hidden file input element
                fileInputRef.current.click();
        };

        const handleFileSelected = (e) => {
                const selectedFile = e.target.files[0];
                if (selectedFile) {
                        setSelectedFileName(selectedFile.name);
                } else {
                        setSelectedFileName(null);
                }
        };
        return (
                <Box sx={{
                        maxWidth: {
                                xs: '270px',
                                sm: '300px',
                                md: '400px',
                                lg: '500px'
                        },
                        backgroundColor: '#F5F5F5'
                }}>
                        <img src={t} width="100%" height='40%' />
                        <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                p: 1
                        }}>
                                <Typography>
                                        Activity name
                                </Typography>
                                <Typography sx={{
                                        color: '#9E9E9E',
                                }}>
                                        Help homeless
                                </Typography>
                        </Box>
                        <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                p: 1
                        }}>
                                <Typography>
                                        Number of supervisors required
                                </Typography>
                                <Typography sx={{
                                        color: '#9E9E9E',
                                }}>
                                        40
                                </Typography>
                        </Box>
                        <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                p: 1
                        }}>
                                <Typography>
                                        Number of volunteers required
                                </Typography>
                                <Typography sx={{
                                        color: '#9E9E9E',
                                }}>
                                        200
                                </Typography>
                        </Box>
                        <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                p: 1
                        }}>
                                <Typography>
                                        Start date of activity
                                </Typography>
                                <Typography sx={{
                                        color: '#9E9E9E',
                                }}>
                                        15/7/2023
                                </Typography>
                        </Box>
                        <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                p: 1
                        }}>
                                <Typography>
                                        End of activity date
                                </Typography>
                                <Typography sx={{
                                        color: '#9E9E9E',
                                }}>
                                        20/12/2023
                                </Typography>
                        </Box>
                        <Box sx={{
                                display: {
                                        xs: 'block',
                                        sm: 'block',
                                        md: 'flex'
                                },
                                justifyContent: 'space-between',
                                textAlign: 'center'
                        }}>

                                <Button
                                        sx={{
                                                justifyContent: 'center',
                                                m: 1,
                                                width: '200px',
                                                height: '50px',
                                                backgroundColor: '#9C27B0',
                                                color: 'white',
                                                fontSize: '14px',
                                                '&:hover': {
                                                        backgroundColor: '#673AB7',
                                                        color: 'white',
                                                },
                                        }}
                                        onClick={openBottomSheet}
                                >
                                        Follow up as Volunteer
                                </Button>
                                <Button
                                        sx={{
                                                m: 1,
                                                width: '200px',
                                                height: '50px',
                                                backgroundColor: '#9C27B0',
                                                color: 'white',
                                                '&:hover': {
                                                        backgroundColor: '#673AB7',
                                                        color: 'white',
                                                },
                                        }}
                                >
                                        Follow up as Supervis
                                </Button>
                        </Box>
                        <BottomSheet open={bottomSheetOpen} onClose={closeBottomSheet}>
                                <Box sx={{
                                        justifyContent: 'center',
                                        textAlign: 'center'
                                }}>
                                        <h2>Please Upload your CV</h2>
                                        <p>Selected file: {selectedFileName}</p>
                                        <Box sx={{
                                                display: 'flex',
                                                p: 1,

                                        }}>

                                                <MainButton
                                                        title='Upload file'
                                                        onClick={handleButtonClick} />
                                                <input
                                                        type="file"
                                                        accept=".pdf, .doc, .docx"  // Specify the allowed file types
                                                        style={{ display: 'none' }}
                                                        ref={fileInputRef}
                                                        onChange={handleFileSelected}
                                                />
                                                <Button
                                                        variant=""
                                                        sx={{
                                                                ml: 1,
                                                                backgroundColor: '#D32F2F',
                                                                color: '#fff',
                                                                '&:hover': {
                                                                        backgroundColor: '#D32F2F',
                                                                },
                                                                width: {
                                                                        sm: '200px',
                                                                        md: '300px',
                                                                        xl: '300px'
                                                                },
                                                        }}
                                                        onClick={closeBottomSheet}
                                                >
                                                        Close
                                                </Button>
                                        </Box>

                                </Box>
                        </BottomSheet>

                </Box >
        )
}

export default ActivityCard
