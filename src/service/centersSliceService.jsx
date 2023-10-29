// api.js
import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCenters = async () => {
        try {
                const response = await axios.get('http://127.0.0.1:8000/api/PersonApp/all-centers-custom');
                return response.data;
        } catch (error) {
                throw error;
        }
};


export const fetchCentersAsync = createAsyncThunk('center/fetchCenters', async () => {
        const data = await fetchCenters();
        return data;
});
const centerSlice = createSlice({
        name: 'center',
        initialState: {
                data: [], // Initialize data as an empty array
                status: 'idle',
                error: null,
        },
        reducers: {},
        extraReducers: (builder) => {
                builder
                        .addCase(fetchCentersAsync.pending, (state) => {
                                state.status = 'loading';
                        })
                        .addCase(fetchCentersAsync.fulfilled, (state, action) => {
                                state.status = 'succeeded';
                                state.data = action.payload.data; // Set data to the array within the response
                        })
                        .addCase(fetchCentersAsync.rejected, (state, action) => {
                                state.status = 'failed';
                                state.error = action.error.message;
                        });
        },
});


export default centerSlice.reducer;
