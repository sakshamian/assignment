import { Box, Button, Checkbox, Grid, IconButton, InputAdornment, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Switch,
  TextField,
  FormControl,
  Select,
  MenuItem,
} from '@mui/material';
import search from '../../images/search-normal.svg';
import { getCampaign, getPlatformName, getStatus } from '../../utils/utils.jsx';
import edit from '../../images/edit.svg';
import deletesvg from '../../images/delete.svg';
import {mockData} from '../../utils/mockData.js';

const Campaign = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [platformFilter, setPlatformFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [dateFilter, setDateFilter] = useState('30');
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const [data, setData] = useState(mockData);

  const filteredData = data.filter((row) => {
    const searchMatch = row.campaignName.name.toLowerCase().includes(searchTerm.toLowerCase());
    const platformMatch = platformFilter === 'All' ? true : row.platform === platformFilter;
    const statusMatch = statusFilter === 'All' ? true : row.status === statusFilter;
    return searchMatch && platformMatch && statusMatch;
  });

  const handleDeleteClick = (id) => {
    setData((prevData) => prevData.filter((row) => row.id !== id));
  };

  const handleSwitchChange = (id) => {
    setData((prevData) =>
      prevData.map((row) => (row.id === id ? { ...row, on: !row.on} : row))
    );
    setData((prevData) =>
      prevData.map((row) => (row.id === id ? { ...row, status: row.status === 'Active' ? 'Paused' : 'Active'} : row))
    );
  };

  const handleCheckboxChange = (id) => {
    setSelectedRows((prevSelectedRows) => {
      if (prevSelectedRows.includes(id)) {
        return prevSelectedRows.filter((selectedId) => selectedId !== id);
      } else {
        return [...prevSelectedRows, id];
      }
    });
  };

  const handleSelectAllClick = (event) => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      setSelectedRows(filteredData.map((row) => row.id));
    } else {
      setSelectedRows([]);
    }
  };

  return (
    <Box mx={5} mt={4}>
      <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Grid>
          <Typography variant='h5' fontWeight={600}>Your campaigns</Typography>
          <Typography sx={{ color: 'rgba(0, 0, 0, 0.5)' }}>Check the list of campigns you created </Typography>
        </Grid>
        <Grid>
          <Button href="/create" disableElevation variant="outlined" sx={{
            padding: '8px 25px', color: 'white', background: '#0F6EFF', borderRadius: '10px', textTransform: 'none', '&:hover': {
              background: '#0F6EFF',
            },
          }} startIcon={<AddCircleOutlineIcon fontSize='small' />}>
            Create new campaign
          </Button>
        </Grid>
      </Grid>
      <Box mt={3}>
        <Paper elevation={2}>
          <Box p={3}>
            <Box sx={{
              marginBottom: 5,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <TextField
                sx={{ width: '30%' }}
                size='small'
                placeholder="Search for the campaign"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={search} alt="" />
                    </InputAdornment>
                  ),
                }}
              />
              <Box sx={{ display: 'flex' }}>
                <Box container sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                  <Typography fontSize={14} sx={{ color: 'rgba(0, 0, 0, 0.5)' }}>Status: </Typography>
                  <FormControl size='small' sx={{ width: '150px', marginLeft: '5px', marginRight: '10px' }} variant="outlined">
                    <Select value={platformFilter} onChange={(e) => setPlatformFilter(e.target.value)} displayEmpty>
                      <MenuItem value="All">All Platform</MenuItem>
                      <MenuItem value="Facebook">Facebook</MenuItem>
                      <MenuItem value="Twitter">Twitter</MenuItem>
                      <MenuItem value="Youtube">Youtube</MenuItem>
                      <MenuItem value="Google">Google</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box container sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography fontSize={14} sx={{ color: 'rgba(0, 0, 0, 0.5)' }}>Platform: </Typography>
                  <FormControl size='small' sx={{ width: '130px', marginLeft: '5px', marginRight: '10px' }} variant="outlined">
                    <Select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} >
                      <MenuItem value="All">All Status</MenuItem>
                      <MenuItem value="Active">Live Now</MenuItem>
                      <MenuItem value="Paused">Paused</MenuItem>
                      <MenuItem value="Exhausted">Exhausted</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <FormControl size='small' sx={{ width: '150px', marginRight: '20px', marginLeft: '5px' }} variant="outlined">
                  <Select value={dateFilter} onChange={(e) => setDateFilter(e.target.value)}>
                    <MenuItem value="30">Last 30 days</MenuItem>
                    <MenuItem value="60">Last 60 days</MenuItem>
                    <MenuItem value="90">Last 90 days</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <TableContainer>
              <Table sx={{ borderCollapse: 'collapse' }}>
                <TableHead sx={{ background: 'rgba(248, 248, 248, 1)', border: '1px solid rgba(234, 234, 234, 1)', borderRadius: '10px' }}>
                  <TableRow>
                    <TableCell>
                      <Checkbox
                        color="primary"
                        checked={selectAll}
                        onChange={handleSelectAllClick}
                      />
                    </TableCell>
                    <TableCell>On/Off</TableCell>
                    <TableCell>Campaign</TableCell>
                    <TableCell>Date Range</TableCell>
                    <TableCell>Clicks</TableCell>
                    <TableCell>Budget</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell>Platform</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredData.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>
                        <Checkbox
                          color="primary"
                          checked={selectedRows.includes(row.id)}
                          onChange={() => handleCheckboxChange(row.id)}
                        />
                      </TableCell>
                      <TableCell>
                        <Switch checked={row.on} color="primary" onChange={() => handleSwitchChange(row.id)} />
                      </TableCell>
                      <TableCell>
                        {getCampaign(row.campaignName)}
                      </TableCell>
                      <TableCell>{row.dateRange}</TableCell>
                      <TableCell>{row.clicks}</TableCell>
                      <TableCell>{row.budget}</TableCell>
                      <TableCell>{row.location}</TableCell>
                      <TableCell>{getPlatformName(row.platform)}</TableCell>
                      <TableCell>{getStatus(row.status)}</TableCell>
                      <TableCell>
                        <IconButton>
                          <img src={edit} alt="" height={20} width={20} />
                        </IconButton>
                        <IconButton onClick={() => handleDeleteClick(row.id)}>
                          <img src={deletesvg} alt="" height={20} width={20} />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Paper>
      </Box>

    </Box>
  )
}

export default Campaign;