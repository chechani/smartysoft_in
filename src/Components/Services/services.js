import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RemoveIcon from '@mui/icons-material/Remove';

const LightGreyBox = styled(Box)({
  backgroundColor: '#f5f5f5',
  padding: '16px',
  borderRadius: '8px',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  border: '1px solid #ccc', // Add this line to set the border
});

const DarkGreenExpandMoreIcon = styled(ExpandMoreIcon)({
  color: 'darkgreen',
  width: '36px',
  height: '36px',
  verticalAlign: 'middle',
});

const DarkGreenRemoveIcon = styled(RemoveIcon)({
  color: 'darkgreen',
  width: '36px',
  height: '36px',
  verticalAlign: 'middle',
});

function Reason({ title, description, icon }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <LightGreyBox sx={{ p: 2 }}>
      <Grid container direction="column" alignItems="center">
        <Grid item>{icon}</Grid>
        <Grid item>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              color: 'black',
              fontSize: '20px',
              fontWeight: 'bold',
              mt: 2,
              textAlign: 'center',
            }}
          >
            {title}
          </Typography>
        </Grid>
        <Grid item>
          <IconButton onClick={() => setExpanded(!expanded)}>
            {expanded ? (
              <DarkGreenRemoveIcon fontSize="large" /> // Minus sign icon for expanded state
            ) : (
              <DarkGreenExpandMoreIcon fontSize="large" />
            )}
          </IconButton>
        </Grid>
      </Grid>
      {expanded && (
        <Box sx={{ pl: 3, pr: 3 }}>
          <Typography sx={{ textAlign: 'center' }}>{description}</Typography>
        </Box>
      )}
    </LightGreyBox>
  );
}

function Services({ segment }) {
  const [reasonsData, setReasonsData] = useState([]);

  useEffect(() => {
    fetch(`https://smartysoftware.in/api/method/professional.web.get_services?segment=${encodeURIComponent(segment)}`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.message && Array.isArray(data.message)) {
          setReasonsData(data.message);
        }
      })
      .catch((error) => console.log(error));
  }, [segment]);

  return (
    <Box sx={{ mt: 1 }}>
      <Typography
        variant="h3"
        component="h2"
        sx={{ textAlign: 'center', mb: 4, mt: 8, fontSize: '32px', fontWeight: 'bold' }}
      >
        Our Services
      </Typography>
      <Grid container spacing={2}>
        {reasonsData.map((reason, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Reason
              title={reason.service}
              description={reason.description}
              icon={
                <img
                  src={`https://smartysoftware.in/${reason.image}`}
                  alt={reason.service}
                  style={{ width: '50px', height: '50px' }}
                />
              }
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Services;
