import React, { useState } from 'react'
import { Box, Divider, Grid, Typography } from '@mui/material';
import { stepFourData } from '../../../utils/mockData';
import FourthStepCard from './FourthStepCard';

const StepFour = () => {
  const [selected, setSelected]= useState(0);

  return (
    <Box sx={{
        p: 2,
        border: "2px solid rgba(243, 243, 243, 1)",
        borderRadius: "10px",
        backgroundColor: "white",
      }}>
        <Grid container pb={2} gap={1} sx={{ display:'flex', alignItems: 'center'}}>
            <Typography fontSize={16} fontWeight={600}>Ready to go</Typography>
            <Typography fontSize={13} sx={{color: 'rgba(0, 0, 0, 0.5)'}}>(Step 4 of 4)</Typography>
        </Grid>
        <Divider my={1} />
        <Grid container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            gap={1}
            p={1}
            pt={2}
        >
            {stepFourData.map((ele, ind) => {
                return (
                  <FourthStepCard index={ind} key={ind} name={ele.name} desc={ele.description} adFooter={ele.adFooter} img={ele.image} setSelected={setSelected}  adImg={ele.adImage} selected={selected===ind} />
                )
            })}
        </Grid>
    </Box>
  )
}

export default StepFour