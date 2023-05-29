import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

function Technologies() {
    return (
        <>
            <Box style={{ textAlign: "center",paddingTop:"100px",paddingBottom:"70px", fontFamily: "Poppins',sans-serif"}}>
                <Typography variant='h4' sx={{ fontWeight: 700,fontSize:"42px"}}>We are proficient in Technologies</Typography>

                <Grid container spacing={2} sx={{ mt: 5 }}>
                    <Grid item xs={12} md={3}>
                        <Typography>
                            <img src="./company_images/parleg.svg" style={{height:"50px",width:"100px"}}/>
                        </Typography>
                        <Typography>
                        <img src="./company_images/Dabur.png" style={{height:"50px",width:"100px",marginTop:"20px"}}/>
                        </Typography>
                        <Typography>
                        <img src="./company_images/Abbott.png" style={{height:"50px",width:"100px",marginTop:"20px"}}/>
                        </Typography>
                      
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography>
                        <img src="./company_images/Amul.png" style={{height:"50px",width:"100px"}}/>
                        </Typography>
                        <Typography>
                        <img src="./company_images/pg.png" style={{height:"50px",width:"100px",marginTop:"20px"}}/>
                        </Typography>
                        <Typography>
                        <img src="./company_images/Nutricia.png" style={{height:"50px",width:"100px",marginTop:"20px"}}/> 
                        </Typography>
             
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography>
                        <img src="./company_images/uniliver.jpg" style={{height:"50px",width:"100px"}}/>
                        </Typography>
                        <Typography>
                        <img src="./company_images/godrej.png" style={{height:"50px",width:"100px",marginTop:"20px"}}/>
                        </Typography>
                        <Typography>
                        <img src="./company_images/nivea.png" style={{height:"50px",width:"100px",marginTop:"20px"}}/>
                        </Typography>
                  
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography>
                        <img src="./company_images/nestle.jpg" style={{height:"50px",width:"100px"}}/>
                        </Typography>
                        <Typography>
                        <img src="./company_images/bajaj.png" style={{height:"50px",width:"150px",marginTop:"20px"}}/>
                        </Typography>
                        <Typography>
                        <img src="./company_images/WildStone.png" style={{height:"50px",width:"100px",marginTop:"20px"}}/>
                        </Typography>
           
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default Technologies;