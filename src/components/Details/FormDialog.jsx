import React, { useState, useRef } from 'react';
import {
        Dialog,
        DialogTitle,
        DialogContent,
        TextField,
        Button,
        Box,
} from '@mui/material';

const FormDialog = ({ open, onClose }) => {
        const [formData, setFormData] = useState({
                f_name: '',
                l_name: '',
                email: '',
                phoneNumber: '',
                certificate: '',
                birthDate: null,
        });

        const handleChange = (e) => {
                setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                });
        };

        const handleSubmit = () => {
                console.log('Form Data:', formData);
                onClose();
        };

        const fileInputRef = useRef(null);
        const [selectedFileName, setSelectedFileName] = useState(null);

        const handleFileClick = () => {
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
                <Dialog open={open} onClose={onClose}>
                        <DialogTitle>Form Dialog</DialogTitle>
                        <DialogContent>
                                <Box component="form" onSubmit={handleSubmit} sx={{
                                        textAlign: 'center',
                                        justifyContent: 'center', mt: 3
                                }}>

                                        <Box sx={{
                                                display: 'flex',
                                                mb: 1
                                        }}>
                                                <TextField
                                                        name="f_name"
                                                        label="First name"
                                                        variant="outlined"
                                                        fullWidth
                                                        value={formData.f_name}
                                                        onChange={handleChange}
                                                        required
                                                        sx={{
                                                                mr: 1
                                                        }}
                                                />
                                                <TextField
                                                        name="l_name"
                                                        label="Last name"
                                                        variant="outlined"
                                                        fullWidth
                                                        value={formData.l_name}
                                                        onChange={handleChange}
                                                        required
                                                />
                                        </Box>

                                        <TextField
                                                name="email"
                                                label="Email"
                                                variant="outlined"
                                                fullWidth
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                sx={{
                                                        mb: 1
                                                }}
                                        />

                                        <TextField
                                                name="phoneNumber"
                                                label="Phone number"
                                                variant="outlined"
                                                fullWidth
                                                value={formData.phoneNumber}
                                                onChange={handleChange}
                                                required
                                                sx={{
                                                        mb: 1
                                                }}
                                        />

                                        <TextField
                                                name="certificate"
                                                label="Certificate degree"
                                                variant="outlined"
                                                fullWidth
                                                value={formData.certificate}
                                                onChange={handleChange}
                                                required
                                                sx={{
                                                        mb: 1
                                                }}
                                        />

                                        <Box sx={{
                                                display: ' flex',
                                                mb: 1
                                        }}>
                                                <Button
                                                        variant="outlined"
                                                        onClick={handleFileClick}
                                                        sx={{
                                                                backgroundColor: '#9C27B0',
                                                                color: 'white',
                                                                border: 'none',
                                                                mr: 1,
                                                                '&:hover': {
                                                                        backgroundColor: '#9C27B0',
                                                                },
                                                        }}
                                                >
                                                        Select File
                                                </Button>
                                                <TextField
                                                        variant="outlined"
                                                        label="Upload your CV"
                                                        fullWidth
                                                        value={selectedFileName || ''}
                                                        onClick={(e) => e.stopPropagation()} // Prevent the click event from propagating to the parent
                                                        required
                                                />
                                                <input
                                                        type="file"
                                                        accept=".pdf, .doc, .docx"
                                                        style={{ display: 'none' }}
                                                        ref={fileInputRef}
                                                        onChange={handleFileSelected}
                                                />
                                        </Box>
                                        <Button type="submit" variant="contained" sx={{
                                                backgroundColor: '#9C27B0',
                                                color: 'white',
                                                border: 'none',
                                                width: '250px',
                                                textAlign: 'center',
                                                justifyContent: 'center',
                                                mr: 1,
                                                '&:hover': {
                                                        backgroundColor: '#9C27B0',
                                                },
                                        }}>
                                                Submit
                                        </Button>
                                </Box>
                        </DialogContent>
                </Dialog>
        );
};

export default FormDialog;
