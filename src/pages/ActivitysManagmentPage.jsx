import { Box, Button, Typography, Grid } from '@mui/material'
import React, { useState } from 'react'
import TextFieldSearch from '../components/TextFiledSearch'
import ActivityCard from '../components/Details/ActivityCard'
import { Modal, Paper } from '@mui/material';
import BottomSheet from '../components/BottomSheet';

const ActivitysManagmentPage = () => {

  return (
    <Box sx={{
      pt: 2,

    }}>
      <TextFieldSearch />
      <Box sx={{
        display: {
          xs: 'block',
          sm: 'block',
          md: 'flex'
        },
      }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <ActivityCard />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <ActivityCard />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <ActivityCard />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <ActivityCard />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default ActivitysManagmentPage
