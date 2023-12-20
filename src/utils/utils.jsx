import { Box, Grid } from '@mui/material';
import facebook from '../images/facebook.svg';
import google from '../images/google.svg';
import youtube from '../images/youtube.svg';

const getPlatformName = (name) => {
    if(name==='Facebook') return <img src={facebook} alt="" style={{marginLeft: '10px'}} />
    else if(name==='Google') return <img src={google} alt="" style={{marginLeft: '10px'}} />
    else if(name==='Youtube') return <img src={youtube} alt="" style={{marginLeft: '10px'}} />
    else return <img src="" alt="no-img" style={{marginLeft: '10px'}} />
}

const getStatus = (name) => {
    if(name==='Active'){ 
        return <Box sx={{
            background: 'rgba(225, 255, 224, 1)',
            color: 'rgba(49, 124, 46, 1)',
            textAlign: 'center',
            width: '100px',
            padding: '5px',
            borderRadius: '15px',
            fontWeight: 500,
        }}>
            Live Now
        </Box>
    }
    else if(name==='Paused'){
        return <Box sx={{
            background: 'rgba(255, 248, 224, 1)',
            color: 'rgba(209, 163, 7, 1)',
            textAlign: 'center',
            width: '100px',
            padding: '5px',
            borderRadius: '15px',
            fontWeight: 500,
        }}>
            Paused
        </Box>
    }
    else if(name==='Exhausted'){
        return <Box sx={{
            background: 'rgba(255, 222, 222, 1)',
            color: 'rgba(252, 63, 63, 1)',
            textAlign: 'center',
            width: '100px',
            padding: '5px',
            borderRadius: '15px',
            fontWeight: 500,
        }}>
            Exhausted
        </Box>
    } 
    else {
        return <Box>
            NO STATUS
        </Box>
    } 
}

const getCampaign = (data) => {
    return <Grid container gap={1}>
        <Grid>
            <img src={data.image} alt="" width={50} />
        </Grid>
        <Grid gap={1}>
            <Grid sx={{fontWeight: 500}}>{data.name}</Grid>
            <Grid sx={{ color: 'rgba(0, 0, 0, 0.6)'}}>Created on {data.date}</Grid>
        </Grid>
    </Grid>
}

export { getPlatformName, getStatus, getCampaign };