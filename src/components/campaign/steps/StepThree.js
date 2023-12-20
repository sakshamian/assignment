import React, { useState } from 'react'
import { Box, Button, Divider, Grid, IconButton, InputAdornment, InputLabel, Slider, TextField, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import indiaFlag from '../../../images/India.svg';
import locationIcon from '../../../images/gps.svg';

const StepThree = () => {
  const [areaType, setAreaType] = useState('Location');

  const budget = [
    {
      value: 100,
      label: '100',
    },
    {
      value: 100000,
      label: '1,00,000',
    },
  ];

  const radius = [
    {
      value: 1,
      label: '1',
    },
    {
      value: 30,
      label: '30'
    }
  ];

  return (
    <Box sx={{
      p: 3,
      px: 5,
      border: "2px solid rgba(243, 243, 243, 1)",
      borderRadius: "10px",
      backgroundColor: "white",
      width: '75%'
    }}>
      <Grid container pb={2} gap={1} sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography fontSize={16} fontWeight={600}>Campaign Settings</Typography>
        <Typography fontSize={13} sx={{ color: 'rgba(0, 0, 0, 0.5)' }}>(Step 3 of 4)</Typography>
      </Grid>
      <Divider />
      <Box mt={3} sx={{ width: '100%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Box width={10} sx={{
            borderRadius: '50%',
            background: 'rgba(15, 110, 255, 1)',
            height: '20px',
            color: 'white',
            width: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '14px'
          }}>1</Box>
          <Box sx={{ width: '95%' }}>
            <InputLabel>
              <Typography fontWeight={500} sx={{ textDecoration: 'underline' }}>Budget and dates info</Typography>

            </InputLabel>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column'
            }}>
              <Box mt={3} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ width: '48%' }}>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Start Date
                  </InputLabel>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker sx={{ width: '100%' }} />
                  </LocalizationProvider>
                </Box>
                <Box sx={{ width: '48%' }}>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    End Date
                  </InputLabel>
                  <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DatePicker sx={{ width: '100%' }} />
                  </LocalizationProvider>
                </Box>
              </Box>
              <Box mt={4}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <InputLabel>Enter Campaign Budget</InputLabel>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src={indiaFlag} alt="" width={20} height={20} />
                    <Typography fontWeight={500} pl={0.5}>INR</Typography>
                  </Box>

                </Box>
                <Slider
                  defaultValue={3000}
                  step={10}
                  min={100}
                  max={100000}
                  marks={budget}
                  valueLabelDisplay="auto"
                />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box mt={3} sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Box width={10} sx={{
            borderRadius: '50%',
            background: 'rgba(15, 110, 255, 1)',
            height: '20px',
            color: 'white',
            width: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '14px'
          }}>2</Box>
          <Box sx={{ width: '95%' }}>
            <InputLabel
            >
              <Typography fontWeight={500} sx={{ textDecoration: 'underline' }}>Location Info</Typography>
            </InputLabel>
            <Box mt={3}>
              <InputLabel>Location Type</InputLabel>
              <Box mt={1} sx={{
                background: 'rgba(240, 240, 240, 1)',
                width: 'fit-content',
                borderRadius: '47px'
              }}>
                <Button
                  onClick={() => setAreaType('Location')}
                  sx={{
                    color: areaType === 'Location' ? 'white' : 'rgba(153, 153, 153, 1)',
                    background: areaType === 'Location' ? '#0F6EFF' : 'rgba(240, 240, 240, 1)',
                    padding: '8px 25px',
                    borderRadius: '47px',
                    textTransform: 'none',
                    '&:hover': {
                      background: areaType === 'Location' ? '#0F6EFF' : 'rgba(240, 240, 240, 1)',
                    }
                  }}>Location</Button>
                <Button onClick={() => setAreaType('Radius')}
                  sx={{
                    color: areaType === 'Radius' ? 'white' : 'rgba(153, 153, 153, 1)',
                    background: areaType === 'Radius' ? '#0F6EFF' : 'rgba(240, 240, 240, 1)',
                    padding: '8px 25px',
                    borderRadius: '47px',
                    textTransform: 'none',
                    '&:hover': {
                      background: areaType === 'Radius' ? '#0F6EFF' : 'rgba(240, 240, 240, 1)',
                    }
                  }}>Radius</Button>
              </Box>
            </Box>

            {
              areaType === 'Location' ? (
                <Box sx={{ height: '80px' }} mt={3}>
                  <InputLabel>Select Location</InputLabel>
                  <TextField sx={{ width: '100%', marginTop: '5px' }} size='small' placeholder='Select a place name, address or coordinates' InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton>
                          <img src={locationIcon} alt="" />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }} />
                </Box>
              ) : (
                <Box sx={{ height: '80px' }} mt={3}>
                  <InputLabel>Select Radius</InputLabel>
                  <Slider sx={{ marginTop: '5px' }} min={1} max={30} marks={radius} />
                </Box>
              )
            }
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default StepThree