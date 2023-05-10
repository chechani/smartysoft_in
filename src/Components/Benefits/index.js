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
            fontFamily: 'lato',
            mb: 5,
            mt: 2,
            fontSize: '40px',
          }}
        >
          Maximizing Efficiency and Accuracy with Tally
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
                    fontFamily: 'lato',
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
    title: 'Accelerate your data entry with precision',
    description:
      'One click activity ensures 100% accuracy with the facility of stock items, expense and tax ledgers',
  },
  {
    icon: SentimentSatisfiedAltIcon,
    title: 'Empower to maintain precise and accurate inventory records',
    description:
      'Automated insertion of sales, purchase, payment & receipt brings accuracy in accounting and inventory management.',
  },

  {
    icon: ScheduleIcon,
    title: 'Time-saving solution, reducing efforts and boosting efficiency',
    description:
      "No more manual creation of invoices & vouchers into Tally, so it saves too much time and effort.",
  },

  {
    icon: ThumbUpOffAltIcon,
    title: 'Say goodbye to the need for accounting expertise',
    description:
      'SMEs or any business owners can insert invoices & vouchers into Tally as no accounting knowledge is required.',
  }
];

export default Benefits;
