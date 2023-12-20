import { Grid, Typography, Checkbox } from '@mui/material'
import React from 'react'

const SecondStepCard = ({ index, setSelected, selected, img, name, amount }) => {
    console.log(selected);
    return (
        <Grid container gap={1}
            lg={3.9}
            md={5.9}
            sm={12}
            sx={{
                border: `2px solid ${selected ? "rgba(15, 110, 255, 1)" : "rgba(223, 223, 223, 1)"
                    }`,
                px: 2,
                py: 1,
                borderRadius: "10px",
                backgroundColor: `${selected ? "rgba(231, 240, 255, 0.3)" : "white"}`,
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between'
            }}
            onClick={() => setSelected(index)}
        >
            <Grid container xs={10} gap={1}>
                <Grid>
                    <img src={img} alt="" width={60} height={60} />
                </Grid>
                <Grid width='75%'>
                    <Typography fontSize={14} fontWeight={500}>{name}</Typography>
                    <Typography fontSize={12} sx={{ color: 'rgba(0, 0, 0, 0.6)' }}>Rs. {amount}</Typography>
                </Grid>
            </Grid >
            <Grid xs={1} container>
                <Checkbox checked={selected} />
            </Grid>
        </Grid>
    )
}

export default SecondStepCard