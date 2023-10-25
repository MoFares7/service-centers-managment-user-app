import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FullWidthTextField({ value, onChange }) {
        const [isFocused, setIsFocused] = React.useState(false);

        const handleFocus = () => {
                setIsFocused(true);
        };

        const handleBlur = () => {
                setIsFocused(false);
        };

        return (
                <Box
                        sx={{
                                display: 'flex',
                                padding: '40px',
                                width: 500,
                                maxWidth: '100%',
                                '& .Mui-focused .MuiInputBase-input': {
                                        borderColor: isFocused ? '#FFC107' : '#FFC107', // Change to your desired border color
                                },
                        }}
                >
                        <TextField
                                fullWidth
                                label="send message"
                                id="fullWidth"
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                onChange={onChange}
                                value={value}
                        />
                </Box>
        );
}
