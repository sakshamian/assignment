import React from 'react'
import { Grid, Typography } from "@mui/material";

const FirstStepCard = ({img, title, selected, desc, setSelected, index, handleClick}) => {
    console.log(selected);
  return (
    <Grid
      container
      sx={{
        border: `2px solid ${
          selected ? "rgba(15, 110, 255, 1)" : "rgba(223, 223, 223, 1)"
        }`,
        px: 3,
        py: 2,
        borderRadius: "10px",
        backgroundColor: `${selected ? "rgba(231, 240, 255, 0.3)" : "white"}`,
        cursor: 'pointer'
      }}
      gap={1}
      lg={3.9}
      md={5.9}
      sm={12}
      onClick={() => {
        setSelected(index)
        handleClick({title: title})
    }}
    >
      <Grid item sx={{ width: '20', height: '20' }}>
        <img src={img} alt="" style={{ width: "100%", height: "100%" }} />
      </Grid>
      <Grid item sx={{ ml: 1 }}>
        <Typography variant="body1">{title}</Typography>
        <Typography
          variant="body1"
          fontSize={12}
          sx={{ color: "rgba(183, 183, 183, 1)" }}
        >
          {desc}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default FirstStepCard;