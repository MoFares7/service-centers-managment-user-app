import React, { useState } from 'react';
import { Box } from '@mui/material';
import FeedbackField from '../components/TextField';

const FeedbackPage = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    // Add the new message to the beginning of the messages array
    setMessages([message, ...messages]);
  };

  return (
    <Box
      sx={{
        pt: 8,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        height: '90vh',
      }}
    >
      <Box sx={{
        // alignItems: 'center',
      }}>
        <div style={{ overflowY: 'auto' }}>
          {messages.map((message, index) => (
            <div key={index} style={{ textAlign: 'start', fontSize: '14px', padding: 1, backgroundColor: '#9C27B0', color: 'white', borderRadius: '10px', marginBottom: '5px' }}>
              {message}
            </div>
          ))}
        </div>
      </Box>

      <Box
        sx={{
          pt: 8,
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        <FeedbackField onMessageSubmit={addMessage} />
      </Box>

    </Box>
  );
};

export default FeedbackPage;
