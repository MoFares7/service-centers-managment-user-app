import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { Send } from '@mui/icons-material';

export default function FeedbackField({ onMessageSubmit }) {
        const [message, setMessage] = React.useState(''); // State for the message

        const handleSubmit = () => {
                // Check if the message is not empty before submitting
                if (message.trim() !== '') {
                        onMessageSubmit(message); // Call the onMessageSubmit function with the message
                        setMessage(''); // Clear the message input
                }
        };
        return (
                <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, borderColor: '#9C27B0', justifyContent: 'center' }}
                >
                        <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Send Feedback"
                                inputProps={{ 'aria-label': 'search google maps' }}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                        />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleSubmit}>
                                <Send />
                        </IconButton>
                </Paper>
        );
}
