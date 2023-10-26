// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './logic/authSlice';
import apiReducer from './service/apiSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        api: apiReducer,
    },
});

export default store;