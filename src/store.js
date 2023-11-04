// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './logic/authSlice';
import apiReducer from './service/apiSlice';
import registerRaducer from './service/registerSlice';
import centerReducer from './service/centersSliceService';
import feedbackReducer from './service/feedbackslice';
import activityCenterReducer from './service/activitySlice';
import activitySupervisorReducer from './service/addActivitySupervisor';

const store = configureStore({
    reducer: {
        auth: authReducer,
        api: apiReducer,
        register: registerRaducer,
        center: centerReducer,
        feedback: feedbackReducer,
        activity: activityCenterReducer,
        activitySupervisor: activitySupervisorReducer,
    },
});

export default store;