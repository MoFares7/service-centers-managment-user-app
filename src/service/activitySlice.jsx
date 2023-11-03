import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchActivityCenter = createAsyncThunk(
        'api/PersonApp/all-center-campaigns',
        async ({ center_id }) => {
                try {
                        const response = await axios.get('http://127.0.0.1:8000/api/PersonApp/all-center-campaigns', {
                                params: {
                                        center_id
                                },
                        });

                        console.log(response.data)
                        return response.data;
                } catch (e) {
                        throw e;
                }
        }
);

const getActivitySlice = createSlice({
        name: 'activityCenter',
        initialState: {
                status: 'idle',
                data: [],
                error: null,
        },
        reducers: {},
        extraReducers: (builder) => {
                builder
                        .addCase(fetchActivityCenter.pending, (state) => {
                                state.status = 'loading';
                        })
                        .addCase(fetchActivityCenter.fulfilled, (state, action) => {
                                state.status = 'succeeded';
                                state.data = action.payload;
                        })
                        .addCase(fetchActivityCenter.rejected, (state, action) => {
                                state.status = 'failed';
                                state.error = action.error.message;
                        });
        },
});

export default getActivitySlice.reducer;