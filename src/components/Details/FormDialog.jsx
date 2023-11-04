import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addActivitySupervisor } from './../../service/addActivitySupervisor';
import {
        Dialog,
        DialogTitle,
        DialogContent,
        TextField,
        Button,
        Box,
} from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const token = localStorage.getItem('token');

const FormDialog = ({ open, onClose }) => {
        const [formData, setFormData] = useState({
                token: token,
                campaign_id: 4,
                first_name: '',
                last_name: '',
                email: '',
                phone_number: '',
                undergraduate_degree: '',
                years_experience: '', // Add the years_experience field
                birth_date: '', // Corrected the field name
                undergraduate_info_file: null,
        });

        const handleChange = (e) => {
                setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                });
        };

        const dispatch = useDispatch();

        const handleSubmit = (e) => {
                e.preventDefault();

                const formDataToSend = new FormData(); // Create a new FormData object

                // Append the fields to the FormData object
                formDataToSend.append('token', token);
                formDataToSend.append('campaign_id', 4); // Replace with the correct campaign_id
                formDataToSend.append('first_name', formData.first_name);
                formDataToSend.append('last_name', formData.last_name);
                formDataToSend.append('email', formData.email);
                formDataToSend.append('phone_number', formData.phone_number);
                formDataToSend.append('undergraduate_degree', formData.undergraduate_degree);
                formDataToSend.append('years_experience', formData.years_experience); // Append years_experience

                // Convert the selectedDate to the desired format and append it
                if (selectedDate) {
                        const formattedDate = `${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-${selectedDate.getDate()}`;
                        formDataToSend.append('birth_date', formattedDate);
                }

                // Append the selected file to the FormData object
                if (formData.undergraduate_info_file) {
                        formDataToSend.append('undergraduate_info_file', formData.undergraduate_info_file);
                }

                // Dispatch the Redux action to send data to the API
                dispatch(addActivitySupervisor(formDataToSend));

                console.log('Form Data:', formDataToSend);
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

                        // Set the file in the form data
                        setFormData({
                                ...formData,
                                undergraduate_info_file: selectedFile,
                        });
                } else {
                        setSelectedFileName(null);

                        // Clear the file in the form data
                        setFormData({
                                ...formData,
                                undergraduate_info_file: null,
                        });
                }
        };

        const [selectedDate, setSelectedDate] = useState(null);
        const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

        const handleDateChange = (date) => {
                setSelectedDate(date);
                setFormData({
                        ...formData,
                        birth_date: date,
                });
        };

        const handleTextFieldClick = () => {
                setIsDatePickerOpen(!isDatePickerOpen);
        };

        return (
                <Dialog open={open} onClose={onClose}>
                        <DialogTitle>Form Dialog</DialogTitle>
                        <DialogContent>
                                <Box
                                        component="form"
                                        onSubmit={handleSubmit}
                                        sx={{ textAlign: 'center', justifyContent: 'center', mt: 3 }}
                                >
                                        <Box sx={{ display: 'flex', mb: 1 }}>
                                                <TextField
                                                        name="first_name"
                                                        label="First name"
                                                        variant="outlined"
                                                        fullWidth
                                                        value={formData.first_name}
                                                        onChange={handleChange}
                                                        required
                                                        sx={{ mr: 1 }}
                                                />
                                                <TextField
                                                        name="last_name"
                                                        label="Last name"
                                                        variant="outlined"
                                                        fullWidth
                                                        value={formData.last_name}
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
                                                sx={{ mb: 1 }}
                                        />
                                        <TextField
                                                name="phone_number"
                                                label="Phone number"
                                                variant="outlined"
                                                fullWidth
                                                value={formData.phone_number}
                                                onChange={handleChange}
                                                required
                                                sx={{ mb: 1 }}
                                        />
                                        <div>
                                                <TextField
                                                        name="birth_date"
                                                        label="Birth Date"
                                                        variant="outlined"
                                                        fullWidth
                                                        value={selectedDate ? selectedDate.toDateString() : ''}
                                                        onClick={handleTextFieldClick}
                                                        required
                                                        sx={{ mb: 1 }}
                                                />
                                                {isDatePickerOpen && (
                                                        <DatePicker
                                                                selected={selectedDate}
                                                                onChange={handleDateChange}
                                                                dateFormat="dd/MM/yyyy"
                                                                placeholderText="Select a date"
                                                                inline
                                                        />
                                                )}
                                        </div>
                                        <TextField
                                                name="undergraduate_degree"
                                                label="Certificate degree"
                                                variant="outlined"
                                                fullWidth
                                                value={formData.undergraduate_degree}
                                                onChange={handleChange}
                                                required
                                                sx={{ mb: 1 }}
                                        />
                                        <TextField
                                                name="years_experience"
                                                label="Years Experience"
                                                variant="outlined"
                                                fullWidth
                                                value={formData.years_experience}
                                                onChange={handleChange}
                                                required
                                                sx={{ mb: 1 }}
                                        />

                                        <Box sx={{ display: 'flex', mb: 1 }}>
                                                <Button
                                                        variant="outlined"
                                                        onClick={handleFileClick}
                                                        sx={{
                                                                backgroundColor: '#9C27B0',
                                                                color: 'white',
                                                                border: 'none',
                                                                mr: 1,
                                                                '&:hover': { backgroundColor: '#9C27B0' },
                                                        }}
                                                >
                                                        Select File
                                                </Button>
                                                <TextField
                                                        variant="outlined"
                                                        label="Upload your CV"
                                                        fullWidth
                                                        value={selectedFileName || ''}
                                                        onClick={(e) => e.stopPropagation()}
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
                                        <Button
                                                type="submit"
                                                variant="contained"
                                                sx={{
                                                        backgroundColor: '#9C27B0',
                                                        color: 'white',
                                                        border: 'none',
                                                        width: '250px',
                                                        textAlign: 'center',
                                                        justifyContent: 'center',
                                                        mr: 1,
                                                        '&:hover': { backgroundColor: '#9C27B0' },
                                                }}
                                        >
                                                Submit
                                        </Button>
                                </Box>
                        </DialogContent>
                </Dialog>
        );
};

export default FormDialog;