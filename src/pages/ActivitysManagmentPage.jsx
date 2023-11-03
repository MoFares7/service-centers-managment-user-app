import { Box, Button, Typography, Grid, CircularProgress } from '@mui/material'
import React, { useState, useEffect } from 'react'
import TextFieldSearch from '../components/TextFiledSearch'
import ActivityCard from '../components/Details/ActivityCard'
import PrivateRoute from './../PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActivityCenter } from '../service/activitySlice';
import ErrorData from '../components/ErrorData';
import t from '../assets/images/global.jpg';
import NoData from '../components/NoData';

const ActivitysManagmentPage = () => {
  const dispatch = useDispatch();
  const activityData = useSelector((state) => state.activity.data.data);
  const status = useSelector((state) => state.activity.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchActivityCenter({ center_id: 1 }));
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <CircularProgress />
  } else if (status === 'failed') {
    return <ErrorData />
  } else if (Array.isArray(activityData)) {
    return (
      <Box sx={{
        pt: 2,

      }}>
        <TextFieldSearch />
        <Box sx={{}}>
          <Grid container spacing={2}>
            {activityData.map((activity) => (
              <Grid item key={activity.id} xs={12} sm={6} md={6}>
                <ActivityCard
                  image={t}
                  activityName={activity.name_en}
                  activitySupervisors={activity.number_supervisors}
                  activityVolunteer={activity.number_students}
                  startDate={activity.start_date}
                  endDate={activity.end_date}
                />
              </Grid>
            ))}
          </Grid>
        </Box>


      </Box>
    )
  }

}

export default ActivitysManagmentPage
