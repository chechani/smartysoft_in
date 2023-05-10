import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ConstructionIcon from '@mui/icons-material/Construction';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { green } from '@mui/material/colors';
import { grey } from '@mui/material/colors';

function Feature(props) {
    const [isExpanded, setIsExpanded] = useState(false);
    const handleExpand = () => {
      setIsExpanded(!isExpanded);
    };
    const { icon, title, description } = props;
  
    return (
      <Grid item xs={12} md={3}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            // backgroundColor: grey[100],
            borderRadius: 1,
            minHeight: '130px',
            p: 2,
          }}
        >
          {icon}
          <Typography
            sx={{
              color: 'black',
              fontSize: '20px',
              fontWeight: 'bold',
              mt: 1,
              fontFamily: 'lato',
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: '32px',
              fontWeight: 'bold',
              color: isExpanded ? grey[700] : grey[500],
              cursor: 'pointer',
              mt: 1,
              mb: 0,
            }}
            onClick={handleExpand}
          >
            {isExpanded ? '−' : '+'}
          </Typography>
          {isExpanded && (
            <Box sx={{ pl: 4, pr: 4, pt: 2 }}>
              <Typography sx={{ fontFamily: 'lato', fontSize: '18px' }}>
                {description}
              </Typography>
            </Box>
          )}
        </Box>
      </Grid>
    );
  }
  
  
  
  
function NewFeatures() {
  const features = [
    {
        icon: (
          <AddShoppingCartIcon
            fontSize='large'
            sx={{
              color: green[500], // You can adjust the shade of green (e.g., 400, 600, etc.)
            }}
          />
        ),
        title: 'Direct Import from Excel',
        description:
          'Transfer data directly from Excel to Tally without any intermediate steps, making the process faster and efficient.',
      },
    {

        icon: (
            <SentimentSatisfiedAltIcon
              fontSize='large'
              sx={{
                color: green[500], // You can adjust the shade of green (e.g., 400, 600, etc.)
              }}
            />
          ),
 
      title: 'No XML Required',
      description:
        'Eliminates the need for XML files, streamlining the data transfer process and reducing the risk of errors.',
    },
    {

        icon: (
            <SettingsIcon
              fontSize='large'
              sx={{
                color: green[500], // You can adjust the shade of green (e.g., 400, 600, etc.)
              }}
            />
          ),
 
      title: 'Auto Master Creation',
      description:
        'Automatically Creates masters as needed, ensuring accurate data import and eliminating manual errors.',
    },
    {

        icon: (
            <LocalOfferIcon
              fontSize='large'
              sx={{
                color: green[500], // You can adjust the shade of green (e.g., 400, 600, etc.)
              }}
            />
          ),
   
      title: 'Data Validation',
      description:
        'Ensures that data being imported into Tally is accurate and valid, reducing the risk of errors and discrepancies.',
    },
    {

        icon: (
            <ConstructionIcon
              fontSize='large'
              sx={{
                color: green[500], // You can adjust the shade of green (e.g., 400, 600, etc.)
              }}
            />
          ),
  
      title: 'Customizable Templates',
      description:
        'This feature provides users with a wide selection of customizable templates for various purposes, making it easier to create and import data.',
    },
    {
        icon: (
            <FeaturedPlayListIcon
              fontSize='large'
              sx={{
                color: green[500], // You can adjust the shade of green (e.g., 400, 600, etc.)
              }}
            />
          ),

      title: 'Flexible Data Mapping',
      description:
        'This feature allows users to map Excel data to the appropriate fields in Tally, ensuring that data is accurately imported and mapped.',
    },
    {

        icon: (
            <PersonAddIcon
              fontSize='large'
              sx={{
                color: green[500], // You can adjust the shade of green (e.g., 400, 600, etc.)
              }}
            />
          ),

      
        title: 'User-Friendly Interface',
        description:
          'The user-friendly interface makes it easy for users to import data from Excel to Tally, even if they have limited technical expertise.',
      },
      {
        
        icon: (
            <SettingsApplicationsIcon
              fontSize='large'
              sx={{
                color: green[500], // You can adjust the shade of green (e.g., 400, 600, etc.)
              }}
            />
          ),
       
        title: 'Custom Import Setting',
        description:
          'This feature allows users to customize import settings, ensuring that data is imported according to their specific requirements.',
      },
    ];

    return (
    <>
    <Box
    sx={{
    textAlign: 'center',
    marginTop: 15,
    margin: 10,
    fontFamily: 'Poppins,sans-serif',
    }}
    >
    <Typography
    variant='h4'
    sx={{
    fontWeight: 800,
    fontFamily: 'lato',
    mt: 2,
    fontSize: '40px',
    }}
    >
    Features Empowering Excel to Tally Data Transfer efficiently
    </Typography>
    <Grid container spacing={1} sx={{ mt: 5 }}>
    {features.map((feature, index) => (
    <Feature
               key={index}
               icon={feature.icon}
               title={feature.title}
               description={feature.description}
             />
    ))}
    </Grid>
    </Box>
    </>
    );
    }
    
    export default NewFeatures;      