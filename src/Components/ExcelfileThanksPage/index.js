import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import { Box, Card, Typography } from '@mui/material';


const ExcelfileThanksPage = ()=>{

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
        <Typography  sx={{mt:5,fontFamily:"lato",fontSize:"42px",fontWeight:"bold",color:"green"}}>Thank You for Submitting Your Excel File</Typography>
        <Typography  sx={{mt:2,fontFamily:"lato",fontSize:"22px"}}>Thank you for submitting your Excel file for our Excel to Tally integration demonstration. Our team of experts will review your file and contact you shortly to schedule a personalised demonstration at your convenience.</Typography>
        <Typography  sx={{mt:2,fontFamily:"lato",fontSize:"22px"}}>During the demonstration, we will show you how our solution seamlessly imports data from Excel into Tally ERP, saving you time and reducing errors in your accounting processes. We look forward to showing you how our solution can benefit your business.</Typography>
        <Typography  sx={{mt:2,fontFamily:"lato",fontSize:"22px"}}>In the meantime, we invite you to check out our blog and resources section for more tips and insights on accounting and business management.</Typography>
        <Typography  sx={{mt:2,fontFamily:"lato",fontSize:"22px"}}>Thank you again for considering our Excel to Tally integration solution. We look forward to working with you and showing you how it can help streamline your accounting processes.</Typography>
        </Box>
        </Card>

        </>
    )
} 

export default ExcelfileThanksPage;