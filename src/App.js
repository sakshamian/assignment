import { Box } from '@mui/material';
import './App.css';
import Menu from './components/Sidebar/Sidebar';
import {
  Route,
  Routes,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Campaign from './components/campaign/Campaign';
import CreateCampaign from './components/campaign/index';

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Menu />
      <Box sx={{ width: '100%' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/campaign" element={<Campaign />} />
          <Route path="/create" element={<CreateCampaign />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
