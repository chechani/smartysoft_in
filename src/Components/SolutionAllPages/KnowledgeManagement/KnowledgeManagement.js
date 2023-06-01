import { Button, Typography, Box, Card, CardContent, CardMedia, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import KnowledgeCard from './KnowledgeCard';

function KnowledgeManagement() {
  const [AccountData, SetAccountData] = useState([]);
  const [documentData, setDocumentData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://smartysoftware.in/api/method/professional.web.get_solution_landing?docname=Knowledge%20Management%20and%20WiKi"
        );
        const data = await response.json();
        console.log(data.message);
        setDocumentData(data.message.smarty_key_points)
        SetAccountData(data.message);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const isMobile = useMediaQuery('(max-width: 600px)');
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
              {AccountData.tagline}
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
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                  borderRadius: '4px',
                  transition: 'transform 0.3s, box-shadow 0.3s, border-color 0.3s',
                  border: '1px solid #ccc',
                  marginBottom: '10px',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                {isMobile ? (
                  <>
                    <CardContent>
                      <Typography sx={{ fontSize: "32px", fontWeight: "bold" }}>{data.document_name}</Typography>
                      <Typography sx={{ fontSize: "22px", mt: 5 }}>{data.document_detail}</Typography>
                    </CardContent>
                    <CardMedia
                      component="img"
                      src={"https://smartysoftware.in/" + data.image}
                      alt="Document Image"
                      sx={{
                        width: '100%',
                        height: 'auto',
                        borderTopLeftRadius: '4px',
                        borderBottomLeftRadius: '4px',
                      }}
                    />
                  </>
                ) : (
                  <>
                    <CardContent sx={{ flex: '0 0 35%' }}>
                      <Typography sx={{ fontSize: "32px", fontWeight: "bold" }}>{data.document_name}</Typography>
                      <Typography sx={{ fontSize: "22px", mt: 5 }}>{data.document_detail}</Typography>
                    </CardContent>
                    <CardMedia
                      component="img"
                      src={"https://smartysoftware.in/" + data.image}
                      alt="Document Image"
                      sx={{
                        width: '65%',
                        height: 'auto',
                        borderTopLeftRadius: '4px',
                        borderTopRightRadius: '4px',
                      }}
                    />
                  </>
                )}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* desc data */}
     <Box>
      <KnowledgeCard/>
     </Box>
    </>
  );
}

export default KnowledgeManagement;
