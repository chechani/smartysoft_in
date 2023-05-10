import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';



const OurInfo = () => {


    return (
        <Box style={{ paddingTop:"100px",paddingBottom:"100px", textAlign: "center", fontFamily: "Poppins',sans-serif", background: "linear-gradient(	#add8e6,#f5f5f5,#b0c4de)" }}>
         <Carousel variant="dark">
        <Carousel.Item>
          <Grid container spacing={0} sx={{ml:{xs:0,sm:10}}}>
            <Grid item xs={12} md={6}>
              <Box style={{ padding: "15px" }}>
                <Typography
                  sx={{ pb: 3,fontSize:"40px",fontWeight: "bold", fontFamily: "lato" }}
                >
                  It's just easy my work                  
                  <br />
                  by all means
                </Typography>
                <Typography variant='h6' sx={{fontFamily:"lato"}}>Fantastic software and found support team very co-operative<br/> I am using since three years, I recommended it usually.
               </Typography>
               <br />
                <Typography sx={{ fontFamily: "lato", fontWeight: "bold" }}>
                "CA Deepak Banger,Chartered Accountant, Dubai"
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{pr: 20,pl:{xs:5,sm:0}}}>
                <iframe
                  width="auto"
                  height="320px"
                  src="https://www.youtube.com//embed/7vSzvy4sFM0"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                ></iframe>
              </Box>
            </Grid>
          </Grid>
        </Carousel.Item>
        <Carousel.Item>
          <Grid container spacing={0} sx={{ml:{xs:0,sm:10}}}>
            <Grid item xs={12} md={6}>
              <Box style={{ padding: "15px" }}>
                <Typography
                 sx={{ pb: 3,fontSize:"40px",fontWeight: "bold", fontFamily: "lato" }}
                >
                  Time saving Software and More Useful for Data Entry                   
                </Typography>
                <Typography variant='h6' sx={{fontFamily:"lato"}}>We are using Excel to Tally of AccxChange since 5 years</Typography>
                <br />
                <Typography sx={{ fontFamily: "lato", fontWeight: "bold" }}>
                  Mr. Babulal Prajapat, Nirlon Kitchenware Pvt. Ltd.Mumbai
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{pr: 20,pl:{xs:5,sm:0}}}>
                <iframe
                  width="auto"
                  height="320px"
                  src="https://www.youtube.com//embed/ZXSOhuH9d4A"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                ></iframe>
              </Box>
            </Grid>
          </Grid>
        </Carousel.Item>
        <Carousel.Item>
          <Grid container spacing={0} sx={{ml:{xs:0,sm:10}}}>
            <Grid item xs={12} md={6}>
              <Box style={{ padding: "15px" }}>
                <Typography
                  sx={{ pb: 3,fontSize:"40px",fontWeight: "bold", fontFamily: "lato" }}
                >
                  Excellent Support and I a'm Happy!
                  <br />
                
                </Typography>
                <Typography variant='h6' sx={{fontFamily:"lato"}}>We are using since 6-7 years and operating it easily</Typography>
                <Typography sx={{ fontFamily: "lato", fontWeight: "bold",mt:2 }}>
                Mr.Pradeep Patil, Panduranga Consultancy Services
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{pr: 20,pl:{xs:5,sm:0}}}>
                <iframe
                  width="auto"
                  height="320px"
                  src="https://www.youtube.com//embed/TP2ILtltvCg"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                ></iframe>
              </Box>
            </Grid>
          </Grid>
        </Carousel.Item>
        <Carousel.Item>
          <Grid container spacing={0} sx={{ml:{xs:0,sm:10}}}>
            <Grid item xs={12} md={6}>
              <Box style={{ padding: "15px" }}>
                <Typography
                 sx={{ pb: 3,fontSize:"40px",fontWeight: "bold", fontFamily: "lato" }}
                >
                  Uploading 200-300 Invoices<br/> daily basis
                  <br />
                 </Typography>
                <Typography variant='h6' sx={{fontFamily:"lato"}}>I am benefited a lot and saving time with accuracy</Typography>
                <Typography sx={{ fontFamily: "lato", fontWeight: "bold",mt:2 }}>
                 Mr. Deepak Jain, Kamal Enterprises
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{pr: 20,pl:{xs:5,sm:0}}}>
                <iframe
                  width="auto"
                  height="320px"
                  src="https://www.youtube.com//embed/0OqU6CN54Yc"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                ></iframe>
              </Box>
            </Grid>
          </Grid>
        </Carousel.Item>
        <Carousel.Item>
          <Grid container spacing={0} sx={{ml:{xs:0,sm:10}}}>
            <Grid item xs={12} md={6}>
              <Box style={{ padding: "15px" }}>
                <Typography
                  sx={{ pb: 3,fontSize:"40px",fontWeight: "bold", fontFamily: "lato" }}
                >
                  15 Hours work in 3 Hours
                </Typography>
                <Typography variant='h6' sx={{fontFamily:"lato"}}>Helping us in Smooth, Fast and Easy Import</Typography>
                <br />
                <Typography sx={{ fontFamily: "lato", fontWeight: "bold" }}>
                 Mr. Vatsal Agarwal, Vasudev Trading Company , Surat
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{pr: 20,pl:{xs:5,sm:0}}}>
                <iframe
                  width="auto"
                  height="320px"
                  src="https://www.youtube.com//embed/DVNqM5BWZz8"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                ></iframe>
              </Box>
            </Grid>
          </Grid>
        </Carousel.Item>
      </Carousel>
        </Box>
    )
}

export default OurInfo;