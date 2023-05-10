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
              fontFamily: 'lato',
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
        <Box sx={{ pl: 4, pr: 4 }}>
          <Typography sx={{ fontFamily: 'lato', fontSize: '18px',textAlign: 'center' }}>
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
            title="No XML required, Direct import from Excel"
            description="Import directly from Excel to Tally without converting them to XML files. It saves time and reduces errors without technical expertise in XML."
            icon={<DevicesOtherIcon fontSize="large" style={{ color: 'green' }} />}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Reason
            title="Responsive Help at Your Service"
            description="We're here to address any concerns or questions, 
            enabling a seamless and efficient Excel to Tally conversion experience"
            icon={<SentimentSatisfiedAltIcon fontSize="large" style={{ color: 'green' }} />}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Reason
            title="Effortless Auto Master Generation"
            description="Ensures precise transaction import by generating masters automatically, 
            eliminating manual errors and ensuring seamless integration into Tally"
            icon={<FavoriteBorderIcon fontSize="large" style={{ color: 'green' }} />}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Reason
            title="Single pricing for all vouchers"
            description="Single pricing that allows to import all vouchers type, 
            thus reducing confusion and increasing customer satisfaction"
            icon={<AddToHomeScreenIcon fontSize="large" style={{ color: 'green' }} />}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Reason
            title="See Your Data in Action with a Custom Demo"
            description="We demonstrate import with a custom template designed from your own Excel sheet,
            showcasing the efficiency and seamless conversion"
            icon={<PersonalVideoIcon fontSize="large" style={{ color: 'green' }} />}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Reason
            title="100+ templates for various purposes"
            description="Allows businesses to easily find and customize a template to their needs, 
            making the Excel Sheet preparation becomes more efficient"
            icon={<AddShoppingCartIcon fontSize="large" style={{ color: 'green' }} />}
          />
        </Grid>
        {/* Add other reasons here */}
      </Grid>
    </Box>
  );
}

export default Reasons;
