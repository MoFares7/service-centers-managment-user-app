// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './logic/authSlice';
import apiReducer from './service/apiSlice';
import registerRaducer from './service/registerSlice';
import centerReducer from './service/centersSliceService';

const store = configureStore({
    reducer: {
        auth: authReducer,
        api: apiReducer,
        register: registerRaducer,
        center: centerReducer,
    },
});

export default store;