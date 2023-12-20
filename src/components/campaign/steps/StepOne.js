import { Box, Divider, Grid, Typography } from '@mui/material'
import React, { useState } from 'react';
import FirstStepCard from './FirstStepCard';
import { firstStepData } from '../../../utils/mockData';


const StepOne = ({first, setFirst}) => {
    const [selected, setSelected] = useState(0);

  return (
    <Box sx={{
        p: 2,
        border: "2px solid rgba(243, 243, 243, 1)",
        borderRadius: "10px",
        backgroundColor: "white",
      }}>
        <Grid container pb={2} gap={1} sx={{ display:'flex', alignItems: 'center'}}>
            <Typography fontSize={16} fontWeight={600}>What you want to do?</Typography>
            <Typography fontSize={13} sx={{color: 'rgba(0, 0, 0, 0.5)'}}>(Step 1 of 4)</Typography>
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
            {firstStepData.map((ele, ind) => {
                return (
                    <FirstStepCard handleClick={setFirst} index={ind} key={ind} title={ele.title} desc={ele.description} img={ele.img} setSelected={setSelected} selected={selected===ind} />
                )
            })}
        </Grid>
    </Box>
  )
}

export default StepOne