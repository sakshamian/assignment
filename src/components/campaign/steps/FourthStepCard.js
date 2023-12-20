import React from 'react'
import { Button, Grid, Typography } from "@mui/material";

const FourthStepCard = ({ img, adImg, selected, desc, setSelected, adFooter, index, name }) => {
    console.log(selected);
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{
                border: `2px solid ${selected ? "rgba(15, 110, 255, 1)" : "rgba(223, 223, 223, 1)"
                    }`,
                p: 2,
                borderRadius: "10px",
                backgroundColor: `${selected ? "rgba(231, 240, 255, 0.3)" : "white"}`,
                cursor: 'pointer'
            }}
            xs={2.8}
            onClick={() => {
                setSelected(index)
            }}
        >
            <Grid container gap={1}>
                <Grid item sx={{ width: '20', height: '20' }}>
                    <img src={img} alt="" style={{ width: "100%", height: "100%" }} />
                </Grid>
                <Grid>
                    <Typography fontSize={15} fontWeight={500} sx={{ color: 'rgba(43, 35, 165, 1)'}}>{name}</Typography>
                    <Typography fontSize={12} sx={{  color: 'rgba(118, 118, 118, 1)'}}>Sponsered</Typography>
                </Grid>
            </Grid>
            <Grid item mt={1}>
                <Typography
                    variant="body1"
                    fontSize={12}
                >
                    {desc}
                </Typography>
            </Grid>
            <Grid item mt={1} >
                <img src={adImg} alt="" />
                <Grid container display='flex' sx={{ background: 'rgba(245, 245, 245, 1)'}} justifyContent='space-between' alignItems='center' pt={0.5} p={1}>
                    <Typography fontSize={12} sx={{ color: 'rgba(43, 35, 165, 1)'}}>Mukund Cake Shop</Typography>
                    <img src={adFooter} alt="" />
                </Grid>
            </Grid>
            {
                selected && (
                    <Grid mt={1} container display='flex' justifyContent='space-between'>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "rgba(15, 110, 255, 0.1)",
                                borderRadius: "7px",
                                width: "48%",
                                color: 'rgba(15, 110, 255, 1)',
                                fontSize: '10px',
                                  textTransform: 'none',
                                '&:hover': {
                      background: 'rgba(15, 110, 255, 0.1)',
                    }
                            }}
                            
                        >Change Image</Button>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "rgba(15, 110, 255, 0.1)",
                                borderRadius: "7px",
                                fontSize: '10px',
                                width: "48%",
                                color: 'rgba(15, 110, 255, 1)',
                                  textTransform: 'none',
                                '&:hover': {
                      background: 'rgba(15, 110, 255, 0.1)',
                    }
                            }}
                            
                        >Edit Text</Button>
                    </Grid>
                )
            }
        </Grid>
    )
}

export default FourthStepCard;