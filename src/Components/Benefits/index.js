import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Collapse,
  IconButton,
} from '@mui/material';
import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ScheduleIcon from '@mui/icons-material/Schedule';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function Benefits() {
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
            
            mb: 5,
            mt: 2,
            fontSize: '40px',
          }}
        >
          Why Choose us
        </Typography>
        <Grid container spacing={2}>
          {benefitsData.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box sx={{ p: 3}}>
                <benefit.icon fontSize="large" style={{ color: 'green' }} />
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
                  <Typography sx={{ color: 'black', fontFamily: 'lato' }}>
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
    icon: AddToHomeScreenIcon,
    title: 'Highly Experinced and Techno Commercial Founders',
    description:
      'Our founder and CEO is a Chartered Accountant with over two and a half decades of experience in the software business. His financial expertise, coupled with extensive knowledge of the industry, brings a unique perspective to our services.',
  },
  {
    icon: SentimentSatisfiedAltIcon,
    title: 'Core Team Multifaceted Capabilities',
    description:
      'Our core team comprises individuals with vast technical and functional knowledge. With diverse backgrounds and skills, they possess the necessary expertise to tackle various challenges and deliver outstanding results.',
  },

  {
    icon: ScheduleIcon,
    title: 'Business acumen combined with high teck skills ',
    description:
      "Our team's exceptional combination of business acumen and programming abilities sets us apart. Our proficiency in Python, JavaScript, React, and Vue Js allows us to conceptualize innovative solutions and address complex problems effectively. We leverage these skills to provide our clients with tailored and high-quality services.",
  },

  {
    icon: ThumbUpOffAltIcon,
    title: 'Experience with many useful Open Source Technolgies',
    description:
      'Our team has deep expertise in a wide range of open-source technologies, allowing us to leverage their benefits for businesses effectively. With our extensive knowledge and experience, we provide valuable guidance and support in utilizing these technologies to drive success.',
  }
];

export default Benefits;
