// feedbackSlice.js
import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const sendFeedback = createAsyncThunk(
        'api/PersonApp/send-feedback-to-center',
        async ({ token, center_id, feedback_value }) => {
                try {
                        const response = await axios.post('http://127.0.0.1:8000/api/PersonApp/send-feedback-to-center', null, {
                                params: {
                                        token,
                                        center_id,
                                        feedback_value,
                                },
                        });
                        console.log("this token " + response)
                        return response.data;
                } catch (error) {
                        throw error;
                }
        }
);

const sendFeedbackSlice = createSlice({
        name: 'feedback',
        initialState: {
                status: 'idle', // idle | loading | succeeded | failed
                data: null,
                error: null,
        },
        reducers: {},
        extraReducers: (builder) => {
                builder
                        .addCase(sendFeedback.pending, (state) => {
                                state.status = 'loading';
                        })
                        .addCase(sendFeedback.fulfilled, (state, action) => {
                                state.status = 'succeeded';
                                state.data = action.payload;
                        })
                        .addCase(sendFeedback.rejected, (state, action) => {
                                state.status = 'failed';
                                state.error = action.error.message;
                        });
        },
});

export default sendFeedbackSlice.reducer;
