import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import AppointmentInfo from '../components/Details/AppointmentInfo'
import add from '../assets/images/add-appo.jpg';
import delete1 from '../assets/images/delete-appo.avif';
import edit from '../assets/images/edit-appo.avif';
import addappointmen from '../assets/images/add-appointment.avif';
import deleteappointment from '../assets/images/deleteAppointmen.avif';
import appointment from '../assets/images/appointment.jpg';
import showap from '../assets/images/showap.avif';

const AppointmentsMangamentPage = () => {

  return (
    <Box sx={{
      display: {
        xs: 'block',
        sm: 'block',
        md: 'block',
        lg: 'flex'
      }
    }}>
      <Box sx={{
        pt: 8
      }}>
        <Typography
          sx={{
            fontSize: '18px',
            color: '#9C27B0',

          }}
        >
          Info about Appointment
        </Typography>
        <Box sx={{
          display: {
            xs: 'block',
            sm: 'flex',
            md: 'flex',
            lg: 'flex'
          },
          m: 2
        }}>
          <AppointmentInfo
            image={edit}
            title='Appointment operation'
            description='The reservation system in the centers is a daily booking for the following day only.'
          />
          <AppointmentInfo
            image={add}
            title='Add Appointment'
            description='Booking at this center will be added for tomorrow only'
          />
          <AppointmentInfo
            image={delete1}
            title='Delete Appointment'
            description='Booking cannot be cancelled more than twice in our system'
          />
        </Box>
        <Box sx={{
          display: {
            xs: 'block',
            sm: 'block',
            md: 'flex',
            lg: 'flex'
          },
          p: 2,
        }}>

          <Box sx={{
            display: 'block',
            width: '200px',

          }}>
            <img src={addappointmen} width='100%' height='58%' />
            <Button sx={{
              width: '200px',
              height: '60px',
              backgroundColor: '#536DFE',
              color: 'white',
              '&:hover': {
                backgroundColor: '#1976D2',
                color: 'white',
              },
            }}>
              Add Appointment
            </Button>
          </Box>

          <Box sx={{
            display: 'block',
            width: '200px',
            ml: 2,
            mr: 2
          }}>
            <img src={deleteappointment} width='100%' height='58%' />
            <Button sx={{
              width: '200px',
              height: '60px',
              backgroundColor: '#F44336',
              color: 'white',
              '&:hover': {
                backgroundColor: '#D32F2F',
                color: 'white',
              },
            }}>
              Delete Appointment
            </Button>
          </Box>
          <Box sx={{
            display: 'block',
            width: '200px',
            ml: 2,
            mr: 2
          }}>
            <img src={showap} width='100%' height='58%' />
            <Button sx={{
              width: '200px',
              height: '60px',
              backgroundColor: '#9C27B0',
              color: 'white',
              '&:hover': {
                backgroundColor: '#673AB7',
                color: 'white',
              },
            }}>
              Show Appointment
            </Button>
          </Box>
        </Box>

      </Box>
      <img src={appointment} width='45%' height='100%' style={{ paddingTop: 40, }} />
    </Box>
  )
}

export default AppointmentsMangamentPage
