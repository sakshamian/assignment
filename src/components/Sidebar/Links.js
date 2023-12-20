import { Grid, Typography } from '@mui/material'
import React from 'react'

const Links = ({ name, image, selected }) => {
    // borderLeft: selected ? "4px solid #1977F3" : "0px",

    return (
        <Grid container sx={{ flexDirection: 'column', alignItems: 'center', padding: '0px', borderLeft: selected ? "4px solid #1977F3" : "0px", }}>
            <img src={image} alt="" />
            <Typography variant='caption'>{name}</Typography>
        </Grid>
    )
}

export default Links