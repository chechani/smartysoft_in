import React, { useState } from 'react';
import { Box, Grid, Typography, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Reason({ title, description, icon }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Box sx={{ p: 2 }}>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          {icon}
        </Grid>
        <Grid item>
          <Typography
            sx={{
              color: 'black',
              fontSize: '20px',
              fontWeight: 'bold',
              mt: 2,
              
              mb: 1,
              textAlign: 'center' ,
            }}
          >
            {title}
          </Typography>
        </Grid>
        <Grid item>
          <IconButton onClick={() => setExpanded(!expanded)}>
            <ExpandMoreIcon fontSize="large" style={{ color: 'green' }}/>
          </IconButton>
        </Grid>
      </Grid>
      {expanded && (
        <Box sx={{ pl: 3, pr: 3 }}>
          <Typography sx={{ fontSize: '18px',textAlign: 'center' }}>
            {description}
          </Typography>
        </Box>
      )}
    </Box>
  );
}

function Reasons() {
  return (
    <Box sx={{ mt: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Reason
            title="Implementation and Deployment"
            description="Implement and Deploy ERPNext for organisations across different industries. Our experienced team ensures a seamless transition to ERPNext, enabling businesses to leverage its powerful features and capabilities."
            icon={<DevicesOtherIcon fontSize="large" style={{ color: 'green' }} />}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Reason
            title="Customization and Integration"
            description="Customize ERPNext to meet the specific requirements of businesses. Our expertise in integration allows us to connect ERPNext with other applications and social network platforms seamlessly."
            icon={<SentimentSatisfiedAltIcon fontSize="large" style={{ color: 'green' }} />}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Reason
            title="Enhancement and Optimization"
            description="Enhance and optimize existing ERPNext installations. Our team conducts a thorough analysis to identify areas for improvement and optimize the utilization of ERPNext, resulting in increased efficiency and productivity."
            icon={<FavoriteBorderIcon fontSize="large" style={{ color: 'green' }} />}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Reason
            title="Technical and Functional Consultancy"
            description="Provide technical and functional consultancy services to businesses utilizing ERPNext. Our experts offer guidance, best practices, and recommendations to maximize the benefits of ERPNext and address specific business challenges."
            icon={<AddToHomeScreenIcon fontSize="large" style={{ color: 'green' }} />}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Reason
            title="Support and Maintenance"
            description="Ongoing support and maintenance services for ERPNext. Our dedicated team ensures the smooth operation of ERPNext systems, promptly addresses issues, and offers timely assistance"
            icon={<PersonalVideoIcon fontSize="large" style={{ color: 'green' }} />}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Reason
            title="Training and Knowledge Transfer"
            description="Train and knowledge transfer services to empower businesses to utilize ERPNext fully. Through our training, clients gain a deep understanding of ERPNext functionalities and acquire the skills"
            icon={<AddShoppingCartIcon fontSize="large" style={{ color: 'green' }} />}
          />
        </Grid>
        {/* Add other reasons here */}
      </Grid>
    </Box>
  );
}

export default Reasons;
