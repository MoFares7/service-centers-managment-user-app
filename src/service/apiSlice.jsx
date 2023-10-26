// apiSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const register = createAsyncThunk('/api/auth/register-person-user', async (createAccountInfo) => {
        try {
                const response = await axios.post('http://127.0.0.1:8000/api/auth/register-person-user', createAccountInfo);
                return response.data;
        } catch (e) {
                throw e;
        }
});

const apiSliceRegister = createSlice({
        name: 'api',
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

//! ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const login = createAsyncThunk('api/login', async (credentials) => {
        try {
                const response = await axios.post('http://127.0.0.1:8000/api/auth/login', credentials);
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
