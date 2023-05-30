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
            variant="h4"
            component="h2"
            sx={{
              color: 'black',
              fontSize: '20px',
              fontWeight: 'bold',
              mt: 3,
              mb: 2,
              textAlign: 'center',
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
          <Typography sx={{textAlign: 'center' }}>
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
      <Typography
        variant="h3"
        component="h2"
        sx={{ textAlign: 'center', mb: 4,mt: 8,fontSize: '32px', fontWeight: 'bold' }}
      >
        Our Services
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Reason
            title="Implementation and Deployment"
            description="Our specialization lies in the implementation and deployment of solutions handpicked by organizations from various industries."
            icon={<DevicesOtherIcon fontSize="large" style={{ color: 'green' }} />}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Reason
            title="Customization and Integration"
            description="We excel in customizing and integrating diverse technologies and solutions to meet the specific requirements of businesses."
            icon={<SentimentSatisfiedAltIcon fontSize="large" style={{ color: 'green' }} />}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Reason
            title="Enhancement and Optimization"
            description="We specialize in identifying areas for improvement and maximizing the utilization of ERPNext, in conjunction with other technologies."
            icon={<FavoriteBorderIcon fontSize="large" style={{ color: 'green' }} />}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Reason
            title="Technical and Functional Consultancy"
            description="We consult in utilizing ERPNext and other technologies and extend guidance, share best practices, and our recommendations."
            icon={<AddToHomeScreenIcon fontSize="large" style={{ color: 'green' }} />}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Reason
            title="Support and Maintenance"
            description="We provide ongoing services for ERPNext and other deployed technologies. Our primary focus is on ensuring the smooth operation of these systems."
            icon={<PersonalVideoIcon fontSize="large" style={{ color: 'green' }} />}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Reason
            title="Training and Knowledge Transfer"
            description="We offer comprehensive training and knowledge transfer services to empower businesses in utilizing technologies to their fullest potential."
            icon={<AddShoppingCartIcon fontSize="large" style={{ color: 'green' }} />}
          />
        </Grid>
        {/* Add other reasons here */}
      </Grid>
    </Box>
  );
}

export default Reasons;
