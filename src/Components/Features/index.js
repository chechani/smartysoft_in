import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ConstructionIcon from '@mui/icons-material/Construction';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';


function Features() {
  return (
    <>
        <Box sx={{textAlign:"center",marginTop:15,margin:10,fontFamily:"Poppins',sans-serif"}}>
        <Typography variant='h4' sx={{fontWeight:800,mt:2,fontSize:"40px"}}>Features empowering Excel to Tally Data Transfer efficiently</Typography>
        <Grid container spacing={1} sx={{mt:5}}>
        <Grid item xs={12} md={3}>
        <Typography> <AddShoppingCartIcon fontSize='large' color="primary"/></Typography>
        <Box sx={{p:2}}>
            <Typography sx={{color:"black",fontSize:"20px",fontWeight:"bold",mt:2,}}>Direct Import from Excel to Tally</Typography>
            <Box sx={{pl:4,pr:4}}>
                <Typography sx={{fontSize:"18px"}}>Transfer data directly from Excel to Tally without any intermediate steps, making the process faster and efficient.</Typography>
            </Box>
            </Box>
        </Grid>
        <Grid item xs={12} md={3}>
        <Typography> <SentimentSatisfiedAltIcon fontSize='large' color="primary"/></Typography>
        <Box sx={{p:2}}>
            <Typography sx={{color:"black",fontSize:"20px",fontWeight:"bold",mt:2,}}>No XML Required</Typography>
            </Box>
            <Box sx={{pl:4,pr:4}}>
            <Typography sx={{fontSize:"18px"}}>Eliminates the need for XML files, streamlining the data transfer process and reducing the risk of errors.</Typography>
            </Box>
        </Grid>
        <Grid item xs={12} md={3}>
        <Typography> <SettingsIcon fontSize='large' color="primary"/></Typography>
        <Box sx={{p:2}}>
            <Typography sx={{color:"black",fontSize:"20px",fontWeight:"bold",mt:2,}}>Auto Master Creation</Typography>
            <Box sx={{pl:4,pr:4}}>
            <Typography sx={{fontSize:"18px"}}>Automatically Creates masters as needed, ensuring accurate data import and eliminating manual errors.</Typography>
            </Box>
            </Box>
        </Grid>
        <Grid item xs={12} md={3}>
        <Typography> <LocalOfferIcon fontSize='large' color="primary"/></Typography>
        <Box sx={{p:2}}>
        <Typography sx={{color:"black",fontSize:"20px",fontWeight:"bold",mt:2,}}>Data Validation</Typography>
        </Box>
           <Box sx={{pl:4,pr:4}}>
           <Typography sx={{fontSize:"18px"}}>Ensures that data being imported into Tally is accurate and valid, reducing the risk of errors and discrepancies.</Typography>
           </Box>
        </Grid>
        </Grid>
        <Grid container spacing={1}sx={{mt:2}}>
        <Grid item xs={12} md={3}>
        <Typography> <ConstructionIcon fontSize='large' color="primary"/></Typography>
        <Box sx={{p:2}}>
            <Typography sx={{color:"black",fontSize:"20px",fontWeight:"bold",mt:2,}}>Customizable Templates</Typography>
            <Box sx={{pl:4,pr:4}}>
                <Typography sx={{fontSize:"18px"}}>This feature provides users with a wide selection of customizable templates for various purposes, making it easier to create and import data.</Typography>
            </Box>
            </Box>
        </Grid>
        <Grid item xs={12} md={3}>
        <Typography> <FeaturedPlayListIcon fontSize='large' color="primary"/></Typography>
        <Box sx={{p:2}}>
            <Typography sx={{color:"black",fontSize:"20px",fontWeight:"bold",mt:2,}}>Flexible Data Mapping</Typography>
            </Box>
            <Box sx={{pl:4,pr:4}}>
            <Typography sx={{fontSize:"18px"}}>This feature allows users to map Excel data to the appropriate fields in Tally, ensuring that data is accurately imported and mapped.</Typography>
            </Box>
        </Grid>
        <Grid item xs={12} md={3}>
        <Typography> <PersonAddIcon fontSize='large' color="primary"/></Typography>
        <Box sx={{p:2}}>
            <Typography sx={{color:"black",fontSize:"20px",fontWeight:"bold",mt:2,}}>User-Friendly Interface</Typography>
            <Box sx={{pl:4,pr:4}}>
                <Typography sx={{fontSize:"18px"}}>The user-friendly interface makes it easy for users to import data from Excel to Tally, even if they have limited technical expertise.</Typography>
            </Box>
            </Box>
        </Grid>
        <Grid item xs={12} md={3}>
        <Typography> <SettingsApplicationsIcon fontSize='large' color="primary"/></Typography>
        <Box sx={{p:2}}>
        <Typography sx={{color:"black",fontSize:"20px",fontWeight:"bold",mt:2,}}>Customizable Import Settings</Typography>
        </Box>
           <Box sx={{pl:4,pr:4}}>
           <Typography sx={{fontSize:"18px"}}> This feature allows users to customize import settings, ensuring that data is imported according to their specific requirements.</Typography>
           </Box>
        </Grid>
        </Grid>
</Box>
    </>
  );
}

export default Features;