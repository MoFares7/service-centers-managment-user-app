import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const addActivitySupervisor = createAsyncThunk(
        'api/PersonApp/join-campaign-as-supervisor',
        async ( formData ) => {
                try {
                        console.log('Sending data to the API:', formData);
                        const response = await axios.post('http://127.0.0.1:8000/api/PersonApp/join-campaign-as-supervisor', formData);
                        console.log('API response:', response.data);
                        return response.data;
                }
                catch (e) {
                        console.error('API request failed:', e);
                        throw e;
                }
        }
);

const sendActivitySupervisor = createSlice({
        name: 'activitySupervisor',
        initialState: {
                status: 'idle',
                data: null,
                error: null,
        },
        reducers: {},
        extraReducers: (builder) => {
                builder
                        .addCase(addActivitySupervisor.pending, (state) => {
                                state.status = 'loading';
                        })
                        .addCase(addActivitySupervisor.fulfilled, (state, action) => {
                                state.status = 'succeeded';
                                state.data = action.payload;
                        })
                        .addCase(addActivitySupervisor.rejected, (state, action) => {
                                state.status = 'failed';
                                state.error = action.error.message;
                        });
        },
});

export default sendActivitySupervisor.reducer;
