import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import { Box, Card, Typography } from '@mui/material';


const ThankYou = ()=>{

    return(
        <>
        <Card sx={{textAlign:"center",
            maxWidth: "100%",
            width: "auto",
            mt: 15,
            ml: 5,
            mr: 5,
            pl: 4,
            pr:4,
            pb:4,
            pt:1,
            mb:10,
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.10)",
            borderRadius: "5px",
            height:"650px"}}>
            <Box sx={{mt:5}}>
        <CheckIcon 
            style={{fontSize:"100px",padding:8, color:"green",border:"3px solid green", borderRadius:"100px"}}
        />
        <Typography  sx={{mt:5,fontFamily:"lato",fontSize:"42px",fontWeight:"bold",color:"green"}}>Thank You for Downloading Excel to Tally Integration</Typography>
        <Typography  sx={{mt:2,fontFamily:"lato",fontSize:"22px"}}>We appreciate your interest in our Excel to Tally integration solution. Your download link has been sent to your email, so please check your inbox.</Typography>
        <Typography  sx={{mt:2,fontFamily:"lato",fontSize:"22px"}}>We hope our solution will help streamline your accounting processes and save you time and effort importing data from Excel to Tally ERP. If you have any questions or feedback about our solution, please do not hesitate to contact us.</Typography>
        <Typography  sx={{mt:2,fontFamily:"lato",fontSize:"22px"}}>In the meantime, we invite you to check out our blog and resources section for more tips and insights on accounting and business management.</Typography>
        <Typography  sx={{mt:2,fontFamily:"lato",fontSize:"22px"}}>Thank you again for downloading our Excel to Tally integration solution. We are excited to hear how it has helped your business.</Typography>
        </Box>
        </Card>

        </>
    )
} 

export default ThankYou;