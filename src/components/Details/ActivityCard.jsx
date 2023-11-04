import React, { useState, useRef } from 'react'
import { Box, Button, Typography } from '@mui/material';
import t from '../../assets/images/global.jpg';
import BottomSheet from './../BottomSheet';
import MainButton from '../Button';
import FormDialog from './FormDialog';
import { useDispatch } from 'react-redux';

const ActivityCard = ({ image, activityName, activitySupervisors, activityVolunteer, startDate, endDate }) => {
        const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
        const dispatch = useDispatch();

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
        //! section for form dialog ////////////////////////////
        const [open, setOpen] = useState(false);

        const handleOpen = () => {
                setOpen(true);
        };

        const handleClose = () => {
                setOpen(false);
        };

        return (
                <Box sx={{
                        maxWidth: {
                                xs: '270px',
                                sm: '300px',
                                md: '400px',
                                lg: '500px'
                        },
                        backgroundColor: '#F5F5F5',
                        m: 1
                }}>
                        <img src={image} width="100%" height='40%' />
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
                                        {activityName}
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
                                        {activitySupervisors}
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
                                        {activityVolunteer}
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
                                        {startDate}
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
                                        {endDate}
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
                                        onClick={handleOpen}
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
                                <FormDialog open={open} onClose={handleClose} />
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
                                                <Button
                                                        variant=""
                                                        sx={{
                                                                ml: 1,
                                                                backgroundColor: '#4CAF50',
                                                                color: '#fff',
                                                                '&:hover': {
                                                                        backgroundColor: '#4CAF50',
                                                                },
                                                                width: {
                                                                        sm: '200px',
                                                                        md: '300px',
                                                                        xl: '300px'
                                                                },
                                                        }}
                                                        onClick={closeBottomSheet}
                                                >
                                                        Upload
                                                </Button>
                                                <Button
                                                        variant=""
                                                        sx={{
                                                                ml: 1,
                                                                backgroundColor: '#9C27B0',
                                                                color: '#fff',
                                                                '&:hover': {
                                                                        backgroundColor: '#9C27B0',
                                                                },
                                                                width: {
                                                                        sm: '350px',
                                                                        md: '450px',
                                                                        xl: '550px'
                                                                },
                                                        }}
                                                        onClick={handleButtonClick}
                                                >
                                                        Select file
                                                </Button>
                                              
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
