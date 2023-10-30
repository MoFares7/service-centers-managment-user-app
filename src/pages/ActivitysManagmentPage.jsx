import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import TextFieldSearch from '../components/TextFiledSearch'
import ActivityCard from '../components/Details/ActivityCard'

const ActivitysManagmentPage = () => {
  return (
    <Box sx={{
      pt: 2,

    }}>
      <TextFieldSearch />
      <ActivityCard />
    </Box>
  )
}

export default ActivitysManagmentPage
