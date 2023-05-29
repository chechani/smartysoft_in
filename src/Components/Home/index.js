import { Button,Typography, Box } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

function Home() {


  return (
    <>
      <Box style={{ paddingTop: "170px", textAlign: "center", paddingBottom: "50px", background: "linear-gradient(	#add8e6,#f5f5f5,#b0c4de)", height: "auto" }}>
        <Grid container spacing={2}>

          <Grid item xs={12} md={6}>
          <Typography sx={{ fontWeight: 700, mt: 3, fontSize: "30px", color: "darkgreen" }}> Enabling Businesses for</Typography>
            <Typography sx={{ fontWeight: 700, mt: 3, fontSize: "60px" }}>Digital Transformation</Typography>
            <Typography sx={{ fontWeight: 700, mt: 2, fontSize: "20px" }}>Based on the World’s Leading Open Source and Free Software
</Typography>
          
            <Link style={{ textDecoration: "none" }} to="/excelfileform"><Button variant='contained' sx={{mt: 3, mb: 2, backgroundColor: "#006400", fontWeight: "bold" }}>Schedule a Meeting</Button></Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <iframe
                width="80%"
                height="320px"
                 src="https://www.youtube.com/embed/u2uv_1H2UR0"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen="true"
              ></iframe>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Home;