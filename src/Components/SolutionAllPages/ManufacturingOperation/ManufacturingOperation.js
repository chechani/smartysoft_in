import { Button, Typography, Box, Card } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';


function ManufacturingOperation() {
  const [AccountData, SetAccountData] = useState([]);
  const [documentData, setDocumentData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://smartysoftware.in/api/method/professional.web.get_solution_landing?docname=manufacturing%20operations"
        );
        const data = await response.json();
        console.log(data.message);
        setDocumentData(data.message.smarty_documents)
        SetAccountData(data.message);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Box
        style={{
          paddingTop: "170px",
          textAlign: "center",
          paddingBottom: "50px",
          background: "linear-gradient(#add8e6,#f5f5f5,#b0c4de)",
          height: "auto",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{ fontWeight: 700, mt: 3, fontSize: "40px" }}
            >
              {AccountData.short_title}
            </Typography>
            <Typography
              sx={{ fontWeight: 700, mt: 2, fontSize: "20px" }}
            >
              {AccountData.descriptive_title}
            </Typography>
            <Link
              style={{ textDecoration: "none" }}
              to="/excelfileform"
            >
              <Button
                variant="contained"
                color="success"
                sx={{ mt: 3, ml: 2, mb: 2 }}
              >
                Schedule a Meeting
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <iframe
                width="80%"
                height="320px"
                src="https://www.youtube.com/embed/u2uv_1H2UR0"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen="true"
              ></iframe>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Cards of Data */}
      <Box sx={{ width: 'auto', m: 5 }}>
  <Grid container spacing={2}>
    {documentData.map((data, index) => (
      <Grid item xs={12} key={index}>
        <Card sx={{ display: 'flex', width: '100%', p: 5 }}>
          <div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
            <Typography>{data.document}</Typography>
            <Typography>{data.document_detail}</Typography>
          </div>
          <div style={{ width: '50%', textAlign: 'right' }}>
            <img src={data.image} alt="Document Image" style={{ Width: '100%',Height: '100%' }} />
          </div>
        </Card>
      </Grid>
    ))}
  </Grid>
</Box>

      {/* desc data */}
     
    </>
  );
}

export default ManufacturingOperation;
