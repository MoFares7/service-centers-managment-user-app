import React, { useState } from 'react';
import { Box } from '@mui/material';
import FeedbackField from '../components/TextField';
import { useDispatch } from 'react-redux';
import { sendFeedback } from '../service/feedbackslice';

const FeedbackPage = () => {
  const [messages, setMessages] = useState([]);
  const dispatch = useDispatch();

  const addMessage = (message) => {
    // Add the new message to the beginning of the messages array
    setMessages([message, ...messages]);

    // Dispatch the sendFeedback action with the necessary data
    dispatch(sendFeedback({ token: localStorage.getItem('token'), center_id: 1, feedback_value: message }));
  };
  console.log(localStorage.getItem('token'));
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
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <span>
            {messages.map((message, index) => (
            <div key={index} style={{  wordWrap: 'break-word' }}>
              <div style={{ fontSize: '14px', padding: '8px', backgroundColor: '#9C27B0', color: 'white', borderRadius: '10px', marginBottom: '5px', display: 'block' }}>
                {message}
              </div>
            </div>
          ))}</span>
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
