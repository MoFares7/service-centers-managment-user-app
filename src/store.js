// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './logic/authSlice';
import apiReducer from './service/apiSlice';
import registerRaducer from './service/registerSlice';
import centerReducer from './service/centersSliceService';
import feedbackReducer from './service/feedbackslice';
import activityCenterReducer from './service/activitySlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        api: apiReducer,
        register: registerRaducer,
        center: centerReducer,
        feedback: feedbackReducer,
        activity: activityCenterReducer,
    },
});

export default store;