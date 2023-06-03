import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Collapse,
  IconButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function USP() {
  const [expanded, setExpanded] = useState([false, false, false, false]);

  const handleExpandClick = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <>
      <Box
        sx={{
          textAlign: 'center',
          padding: 8,
          fontFamily: "Poppins',sans-serif",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            
            mb: 3,
            fontSize: '32px',
          }}
        >
          Why We
        </Typography>
        <Grid container spacing={2}>
          {benefitsData.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box>
               {benefit.imageUrl}
                <Typography
                  sx={{
                    color: 'black',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    mt: 2,
                    
                  }}
                >
                  {benefit.title}
                </Typography>
                <IconButton onClick={() => handleExpandClick(index)}>
                  {expanded[index] ? <RemoveIcon /> : <AddIcon />}
                </IconButton>
                <Collapse in={expanded[index]}>
                  <Typography sx={{ color: 'black'}}>
                    {benefit.description}
                  </Typography>
                </Collapse>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

const benefitsData = [
  {
    imageUrl: <img src='./company_images/HighlyExperinced.png' style={{width:"50px",height:"50px"}}/>,
    title: 'Highly Experinced and Techno Commercial Founders',
    description:
      'Our Founder and CEO, a Chartered Accountant with over 25 years of experience in the software business, brings a wealth of expertise and industry knowledge to our services. This unique combination of financial acumen and industry insight enables us to deliver crisp and appealing solutions to our clients.',
  },
  {
    imageUrl: <img src='./company_images/CoreTeam.png' style={{width:"50px",height:"50px"}}/>,
    title: 'Core Team Multifaceted Capabilities',
    description:
      'Our exceptional team comprises highly skilled individuals with extensive technical and functional knowledge. With diverse backgrounds and a wide range of expertise, they are equipped to handle any challenge that comes their way. Their collective proficiency enables us to consistently deliver outstanding results',
  },

  {
    imageUrl: <img src='./company_images/BusinessAcumen.png' style={{width:"50px",height:"50px"}}/>,
    title: 'Business acumen combined with high teck skills ',
    description:
      "Our team possesses exceptional skills in solution visualization and programming, bolstered by AI technologies. This proficiency enables us to excel in cutting-edge technologies like Python, JavaScript, React, and Vue.js. We leverage this expertise to conceptualize innovative solutions",
  },

  {
    imageUrl: <img src='./company_images/OpenSourceTechnolgies.png' style={{width:"50px",height:"50px"}}/>,
    title: 'Experience with many useful Open Source Technolgies',
    description:
      'Our team possesses extensive expertise in a diverse array of open-source technologies, enabling us to harness their advantages effectively for businesses. With a deep understanding and substantial experience, we offer valuable guidance and support in utilizing these technologies to drive success',
  }
];

export default USP;
