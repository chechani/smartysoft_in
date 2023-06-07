import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Carousel from 'react-bootstrap/Carousel';

const Testimonial = ({segment}) => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch(`https://smartysoftware.in/api/method/professional.web.get_smarty_testimonials?segment=${encodeURIComponent(segment)}`)
      .then(response => response.json())
      .then(data => {
        setTestimonials(data.message);
      })
      .catch(error => {
        console.error('Error fetching testimonials:', error);
      });
  }, []);

  return (
    <Box
      style={{
        paddingTop: '100px',
        paddingBottom: '100px',
        textAlign: 'center',
        fontFamily: 'Poppins, sans-serif',
        background: 'linear-gradient(#add8e6, #f5f5f5, #b0c4de)',
      }}
    >
      <Carousel variant="dark">
        {testimonials.map(testimonial => (
          <Carousel.Item key={testimonial.name}>
            <Grid container spacing={0} sx={{ ml: { xs: 0, sm: 10 } }}>
              <Grid item xs={12} md={6}>
                <Box style={{ padding: '15px' }}>
                  <Typography
                    sx={{
                      pb: 3,
                      fontSize: '40px',
                      fontWeight: 'bold',
                      fontFamily: 'lato',
                    }}
                  >
                    {testimonial.tagline}
                    <br />
                    {testimonial.client}
                  </Typography>
                  <Typography variant="h6" dangerouslySetInnerHTML={{ __html: testimonial.content }} />
                  <br />
                  <Typography sx={{ fontWeight: 'bold' }}>{testimonial.contact}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ pr: 20, pl: { xs: 5, sm: 0 } }}>
                  <iframe
                    width="auto"
                    height="320px"
                    src={testimonial.video}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                </Box>
              </Grid>
            </Grid>
          </Carousel.Item>
        ))}
      </Carousel>
    </Box>
  );
};

export default Testimonial;
