import { Box, Button,Card,Typography} from '@mui/material';
import React from 'react';

function PurchaseConversion() {

  const handleSubmit =()=>{

    window.location.href = "https://einvoicing.co.in"
  }

  return (
    <>

<Box style={{textAlign:"center",paddingTop:"20px",paddingBottom:"60px", fontFamily:"Poppins',sans-serif", display:"flex", justifyContent:"center"}}>
  <Card sx={{width:"auto",p:3,m:5}}>
    <Typography variant='h4' sx={{fontWeight:800,}}>Automated Invoice Posting in Tally</Typography>
    <Typography variant='h5' sx={{mt:2}}>e-Invoicing Bridge to transform your accounting process</Typography>
    <Button variant='contained' color="success" sx={{border:"1px solid black",mt:3,borderRadius:"5px",fontWeight:"bold"}} onClick={handleSubmit}>Explore Now</Button>
  </Card>
</Box>

    </>
  );
}

export default PurchaseConversion;