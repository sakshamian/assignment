import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import house from '../../images/house.svg';
import logo from '../../images/zocket-logo.svg';
import campaign from '../../images/campaign.svg';
import customers from '../../images/customers.svg';
import products from '../../images/products.svg';
import { Link } from 'react-router-dom';
import Links from './Links';

export default function Menu() {
    const [currLink, setCurrLink] = useState(1);
  return (
    <Box
        component="nav"
        sx={{ 
            width:  80,
            
        }}
    >
        <Drawer
            variant="permanent" 
            sx={{
                display: 'block',
                width: 80,
                '& .MuiDrawer-paper': { background: '#001738', color: 'white', boxSizing: 'border-box', width: 80 },
            }}    
        >
            <Box my={5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <img src={logo} alt="" />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px'}}>
                <Link onClick={() => setCurrLink(1)} to="/" style={{ color: 'white', textDecoration: 'none', width: '100%'  }}>
                    <Links name='Home' selected={currLink===1} image={house} />
                </Link>
                <Link onClick={() => setCurrLink(2)} to="/campaign" style={{ color: 'white', textDecoration: 'none', width: '100%' }}>
                    <Links name='Campaign' selected={currLink===2} image={campaign} />
                </Link>
                <Link onClick={() => setCurrLink(3)} to="/" style={{ color: 'white', textDecoration: 'none', width: '100%'  }}>
                    <Links name='Products' selected={currLink===3} image={products} />
                </Link>
                <Link onClick={() => setCurrLink(4)} to="/" style={{ color: 'white', textDecoration: 'none', width: '100%'  }}>
                    <Links name='Customers' selected={currLink===4} image={customers} />
                </Link>
            </Box>
                
        </Drawer>
    </Box>
  );
}