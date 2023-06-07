import { Box, Card, CardContent, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';

function Technologies({segment}) {
  const [images, setImages] = useState([]);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  useEffect(() => {
    fetch(`https://smartysoftware.in/api/method/professional.web.get_technology_brands?segment=${encodeURIComponent(segment)}`)
      .then(response => response.json())
      .then(data => {
        // Assuming the API response contains a 'message' object with 'client_logo' property
        setImages(data.message.map(obj => obj.logo));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const calculateGridColumns = () => {
    if (isDesktop) {
      return 12 / 8; // Divide the total columns by the number of cards per row (8)
    } else {
      return 6; // Show two logos in a row on mobile
    }
  };

  return (
    <Box style={{ textAlign: "center", paddingTop: "50px", paddingBottom: "50px", fontFamily: "Poppins, sans-serif", margin: "0 auto", marginLeft: "20px", marginRight: "20px" }}>
      <Typography variant='h4' sx={{ fontWeight: 700, fontSize: "32px", marginBottom: "40px" }}>Proficient in Technologies</Typography>

      <Grid container spacing={2} justifyContent="center">
        {images.map((imageUrl, index) => (
          <Grid item xs={6} sm={6} md={calculateGridColumns()} key={index}>
            <Card sx={{ height: '100%', border: '1px solid darkgrey' }}>
              <CardContent>
                <img src={"https://smartysoftware.in/"+imageUrl} alt="Technology" style={{ height: "50px", width: "100px" }} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Technologies;
