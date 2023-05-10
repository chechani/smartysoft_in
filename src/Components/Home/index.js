import { Button,Typography, Box } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

function Home() {


  return (
    <>
      <Box style={{ paddingTop: "170px", textAlign: "center", paddingBottom: "50px", fontFamily: "lato", background: "linear-gradient(	#add8e6,#f5f5f5,#b0c4de)", height: "auto" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box>
              <iframe
                width="80%"
                height="320px"
                 src="https://www.youtube.com/embed/nrHOcFN1E98"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen="true"
              ></iframe>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography sx={{ fontWeight: 700, fontFamily: "lato", mt: 3, fontSize: "40px" }}>Excel to Tally Conversion, Simplified !</Typography>
            <Typography sx={{ fontWeight: 700, fontFamily: "lato", mt: 2, fontSize: "20px" }}>Import Every Voucher Type | Assistance with all Excel Formats</Typography>
            <Typography sx={{ fontWeight: 700, fontFamily: "lato", mt: 3, fontSize: "20px" }}>Personalized Demo Using Your Own Excel Sheet</Typography>
            <Link style={{ textDecoration: "none" }} to="/excelfileform"><Button variant='contained' sx={{ fontFamily: "lato", mt: 3, mb: 2, backgroundColor: "#006400", fontWeight: "bold" }}>Share Excel File</Button></Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Home;