import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Typography,
  Collapse,
  IconButton,
  styled,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

function USP({ segment }) {
  const [expanded, setExpanded] = useState([]);
  const [benefitsData, setBenefitsData] = useState([]);

  useEffect(() => {
    fetch(`https://smartysoftware.in/api/method/professional.web.get_usp?segment=${encodeURIComponent(segment)}`)
      .then(response => response.json())
      .then(data => {
        const sortedData = data.message.sort((a, b) => a.usp_order - b.usp_order);
        setBenefitsData(sortedData);
        setExpanded(Array(sortedData.length).fill(false));
      })
      .catch(error => console.log(error));
  }, [segment]);

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
          padding: '16px',
          fontFamily: "Poppins',sans-serif",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 3,
            fontSize: '36px',
          }}
        >
          Why Us
        </Typography>
        <Grid container spacing={3}>
          {benefitsData.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  backgroundColor: '#f5f5f5',
                  padding: '16px',
                  borderRadius: '8px',
                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #ccc',
                }}
              >
                {benefit.image && (
                  <img
                    src={`https://smartysoftware.in${benefit.image}`}
                    style={{ width: '50px', height: '50px' }}
                    alt={benefit.usp}
                  />
                )}
                <Typography
                  sx={{
                    color: 'black',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    mt: 2,
                  }}
                >
                  {benefit.usp}
                </Typography>
                <IconButton onClick={() => handleExpandClick(index)}>
                  {expanded[index] ? (
                    <DarkGreenRemoveIcon />
                  ) : (
                    <DarkGreenExpandMoreIcon />
                  )}
                </IconButton>
                <Collapse in={expanded[index]}>
                  <Typography sx={{ color: 'black' }}>
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

export default USP;
