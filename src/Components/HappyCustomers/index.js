import { Box, Grid, Typography } from '@mui/material';
import React from 'react';


function HappyCustomers() {
    return (
        <>
            <Box style={{ textAlign: "center", paddingTop: "60px", paddingBottom: "40px", fontFamily: "Poppins',sans-serif", marginLeft: "30px", marginRight: "30px" }}>
            <Typography variant='h4' sx={{ fontWeight: 800, fontSize:"42px" }}>Why We're the Right Choice</Typography>
                <Typography variant='h4' sx={{ fontWeight: 800, mt:2 }}>Over 500 Satisfied Clients</Typography>
                <Typography variant='h5' sx={{ color: "#767676", mt: 2}}>Your Happiness, Our Priority</Typography>
       
            </Box>
        </>
    );
}

export default HappyCustomers;