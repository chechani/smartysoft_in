import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

function DmsOtherTemplates() {
    return (
        <>
            <Box style={{ textAlign: "center",paddingTop:"100px",paddingBottom:"70px", fontFamily: "Poppins',sans-serif" }}>
                <Typography variant='h4' sx={{ fontWeight: 700,fontFamily:"lato",fontSize:"40px" }}>Simplify Import of E-Commerce Templates</Typography>

                <Grid container spacing={2} sx={{mt:6}}>
                    <Grid item xs={12} md={3}>
                        <Typography>
                            <img src="./company_images/Amazon.png" style={{height:"50px",width:"100px"}}/>
                        </Typography>
                    </Grid> 
                    <Grid item xs={12} md={3}>
                        <Typography>
                        <img src="./company_images/tatanew.png" style={{height:"80px",width:"130px"}}/>
                        </Typography>
                    </Grid>       
                    <Grid item xs={12} md={3}>
                        <Typography>
                        <img src="./company_images/cerd.svg" style={{height:"70px",width:"120px"}}/>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography>
                        <img src="./company_images/flipkart.jpg" style={{borderRadius:"10px", height:"50px",width:"100px"}}/>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{mt:6}}>
                    <Grid item xs={12} md={3}>
                        <Typography>
                            <img src="./company_images/bigbasket.png" style={{height:"70px",width:"120px"}}/>
                        </Typography>
                    </Grid>                        
                    <Grid item xs={12} md={3}>
                        <Typography>
                        <img src="./company_images/Ajio.png" style={{height:"60px",width:"120px"}}/>
                        </Typography>
                    </Grid>  
                    <Grid item xs={12} md={3}>
                        <Typography>
                        <img src="./company_images/Blinkit.svg" style={{borderRadius:"10px", height:"40px",width:"100px"}}/>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography>
                        <img src="./company_images/myntra.png" style={{height:"50px",width:"100px"}}/>
                        </Typography>
                    </Grid> 
                </Grid>
            </Box>
        </>
    );
}

export default DmsOtherTemplates;