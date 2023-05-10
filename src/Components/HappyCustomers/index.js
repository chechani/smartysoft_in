import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
// import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
// import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen';
// import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function HappyCustomers() {
    return (
        <>
            <Box style={{ textAlign: "center", paddingTop: "60px", paddingBottom: "40px", fontFamily: "Poppins',sans-serif", marginLeft: "30px", marginRight: "30px" }}>
            <Typography variant='h4' sx={{ fontWeight: 800, fontFamily: "lato",fontSize:"42px" }}>Why We're the Right Choice</Typography>
                <Typography variant='h4' sx={{ fontWeight: 800, fontFamily: "lato",mt:2 }}>Over 500 Satisfied Clients</Typography>
                <Typography variant='h5' sx={{ color: "#767676", mt: 2, fontFamily: "lato" }}>Your Happiness, Our Priority</Typography>
       
            </Box>
        </>
    );
}

export default HappyCustomers;