// apiSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setToken } from '../logic/authSlice';
import { useDispatch } from 'react-redux';

//! ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const login = createAsyncThunk('api/auth/login', async (credentials) => {
        try {
                const response = await axios.post('http://127.0.0.1:8000/api/auth/login', credentials);
                console.log(response.data);
                localStorage.setItem('token', response.data.access_token);
               
                return response.data;
        } catch (error) {
                throw error;
        }
});

const apiSlice = createSlice({
        name: 'api',
        initialState: {
                status: 'idle', // idle | loading | succeeded | failed
                data: null,
                error: null,
        },
        reducers: {},
        extraReducers: (builder) => {
                builder
                        .addCase(login.pending, (state) => {
                                state.status = 'loading';
                        })
                        .addCase(login.fulfilled, (state, action) => {
                                state.status = 'succeeded';
                                state.data = action.payload;
                        })
                        .addCase(login.rejected, (state, action) => {
                                state.status = 'failed';
                                state.error = action.error.message;
                        });
        },
});

export default apiSlice.reducer;
