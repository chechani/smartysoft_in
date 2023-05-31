import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleDemo = () => {
    navigate('/happycustomers');
  };

  const handleBenefits = () => {
    navigate('/benefits');
  };

  const handleFeature = () => {
    navigate('/features');
  };

  const handlePricing = () => {
    navigate('/pricing');
  };

  const handleClick = () => {
    navigate('/registration');
  };

  const handleScheduleDemo = () => {
    navigate('/scheduledemo');
  };

  const HandleLogo = () => {
    navigate('/');
  };

  return (
    <AppBar position="fixed" style={{ backgroundColor: 'whitesmoke' }}>
      <Container maxWidth="xl">
        <Toolbar>
          <Box flexGrow={1} onClick={HandleLogo}>
            <img
              src="/smarty_logo.png"
              alt="logo"
              style={{
                fontWeight: 'bold',
                marginLeft: '20px',
                width: '120px',
                height: '40px',
                borderRadius: '10px',
                cursor: 'pointer',
              }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <Box
              component={Typography}
              variant="subtitle1"
              sx={{
                display: 'flex',
                alignItems: 'center',
                '& > *': {
                  paddingRight: '30px',
                  color: 'black',
                  textDecoration: 'none',
                  cursor: 'pointer',
                },
              }}
            >
              <Typography variant="subtitle1" onClick={handleDemo}>
                Solutions
              </Typography>
              <Typography variant="subtitle1" onClick={handleDemo}>
                Services
              </Typography>
              <Typography variant="subtitle1" onClick={handleFeature}>
                About Us
              </Typography>
              <Typography variant="subtitle1" onClick={handleBenefits}>
                Why We
              </Typography>
              <Typography variant="subtitle1" onClick={handleDemo}>
                Technologies
              </Typography>
              <Typography variant="subtitle1" onClick={handlePricing}>
                Success Story
              </Typography>
            </Box>
            <Button
              variant="contained"
              color="success"
              sx={{
                fontWeight: 'bold',
                marginLeft: '20px',
              }}
              onClick={handleClick}
            >
              Schedule Meeting
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
