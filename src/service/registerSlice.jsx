import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const register = createAsyncThunk('api/auth/register-person-user', async (registerInfo) => {
        try {
                const response = await axios.post('http://127.0.0.1:8000/api/auth/register-person-user', registerInfo);
                return response.data;
        } catch (error) {
                throw error;
        }
}); 

const registerSlice = createSlice({
        name: 'register',
        initialState: {
                status: 'idle', // idle | loading | succeeded | failed
                data: null,
                error: null,
        },
        reducers: {},
        extraReducers: (builder) => {
                builder
                        .addCase(register.pending, (state) => {
                                state.status = 'loading';
                        })
                        .addCase(register.fulfilled, (state, action) => {
                                state.status = 'succeeded';
                                state.data = action.payload;
                        })
                        .addCase(register.rejected, (state, action) => {
                                state.status = 'failed';
                                state.error = action.error.message;
                        });
        },
});

export default registerSlice.reducer;
