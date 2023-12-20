import React from 'react';
import { AppBar, Avatar, Grid, Toolbar, Typography } from '@mui/material';
import buyplan from '../images/buy-plan.svg';
import gift from '../images/gift.svg';
import notification from '../images/notification.svg';
import symbol from '../images/symbols.svg';
import avatar from '../images/avatar.svg';
import dropdown from '../images/dropdown.svg';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{
      backgroundColor: 'white',
      color: 'black',
    }}>
      <Toolbar>
        <Grid gap={2.5} container sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <Grid sx={{
            color: 'rgba(0, 0, 0, 0.6)'
          }}>
            Free trail ends in 2 days
          </Grid>
          <Grid>
            <img src={buyplan} alt="" />
          </Grid>
          <Grid>
            <img src={gift} alt="" />
          </Grid>
          <Grid>
            <img src={notification} alt="" />
          </Grid>
          <Grid sx={{ display: 'flex', alignItems: 'center' }} gap={0.5}>
            <Avatar alt="" src={avatar} sx={{ width: 26, height: 26 }} />
            <Typography fontSize={16} pl={1}>Mukund Chowbey</Typography>
            <img src={dropdown} width={10} height={8} alt="" />
          </Grid>
          <Grid>
            <img src={symbol} alt="" />
          </Grid>
        </Grid>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
