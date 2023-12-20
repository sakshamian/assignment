import { Box, Divider, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { stepTwoData } from '../../../utils/mockData';
import SecondStepCard from './SecondStepCard';

const StepTwo = () => {
    const [selected, setSelected] = useState(0);
  return (
    <Box sx={{
        p: 2,
        border: "2px solid rgba(243, 243, 243, 1)",
        borderRadius: "10px",
        backgroundColor: "white",
      }}>
        <Grid container pb={2} gap={1} sx={{ display:'flex', alignItems: 'center'}}>
            <Typography fontSize={16} fontWeight={600}>Choose the product</Typography>
            <Typography fontSize={13} sx={{color: 'rgba(0, 0, 0, 0.5)'}}>(Step 2 of 4)</Typography>
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
            {stepTwoData.map((ele, ind) => {
                return (
                    <SecondStepCard index={ind} key={ind} name={ele.name} amount={ele.amount} img={ele.image} setSelected={setSelected} selected={selected===ind} />
                )
            })}
        </Grid>
    </Box>
  )
}

export default StepTwo