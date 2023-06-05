import React from 'react';
import {
  Button,
  Container,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem,
} from '@mui/material';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDemo = () => {
    navigate('/keyfeatures');
    handleMenuClose();
  };

  const handleBenefits = () => {
    navigate('/benefits');
    handleMenuClose();
  };

  const handleFeature = () => {
    navigate('/aboutus');
    handleMenuClose();
  };

  const handlePricing = () => {
    navigate('/pricing');
    handleMenuClose();
  };

  const handleClick = () => {
    navigate('/registration');
    handleMenuClose();
  };

  const handleScheduleDemo = () => {
    navigate('/technologies');
    handleMenuClose();
  };

  const HandleLogo = () => {
    navigate('/');
  };

  return (
    <AppBar position="fixed" style={{ backgroundColor: 'whitesmoke' }}>
      <Container maxWidth="xl">
        <Toolbar>
          {(isMobile || isTablet) && (
            <IconButton edge="start" color="primary" aria-label="menu" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
          )}
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
          {isMobile || isTablet ? (
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleFeature}>About Us</MenuItem>
              <MenuItem onClick={handleBenefits}>Why Us</MenuItem>
              <MenuItem onClick={handleScheduleDemo}>Technologies</MenuItem>
              <MenuItem onClick={handlePricing}>Success Story</MenuItem>
            </Menu>
          ) : (
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
                <Typography variant="subtitle1" onClick={handleFeature}>
                  About Us
                </Typography>
                <Typography variant="subtitle1" onClick={handleBenefits}>
                  Why Us
                </Typography>
                {/* <Typography variant="subtitle1" onClick={handleDemo}>
                  Technologies
                </Typography> */}
                {/* <Typography variant="subtitle1" onClick={handlePricing}>
                  Success Story
                </Typography> */}
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
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
