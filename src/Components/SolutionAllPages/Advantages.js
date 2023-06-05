
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";


function AllFeatures({docname}) {
  const [features, setFeatures] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [documentData, setDocumentData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://smartysoftware.in/api/method/professional.web.get_solution_landing?docname=${encodeURIComponent(docname)}`
        );
        const data = await response.json();
        console.log(data.message);
        setDocumentData(data.message.smarty_key_advantages)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://smartysoftware.in/api/method/professional.api.get_smarty_solutions"
        );
        const data = await response.json();
        setFeatures(data.message);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  if (features.length === 0) {
    return null;
  }

  const handleCardHover = (index) => {
    setHoveredIndex(index);
  };

  return (
    <section className="bg-light" style={{ paddingBottom: "10px" }}>
      <Container fluid>
        <div className="section-gap"></div>
        <div className="section-title-wrapper">
          <h2 className="section-title" style={{ marginTop: "-28px", fontSize: "32px", fontWeight: 700 }}>
            Advantages
          </h2>
        </div>
        <Row>
          {documentData.map((feature, index) => (
            <Col lg={4} md={4} sm={6} key={index}>
              <div
                className={`d-flex flex-column feature-primary ${hoveredIndex === index ? "hovered" : ""}`}
                style={{
                  marginBottom: "20px",
                  marginTop: "10px",
                  marginLeft: "-5px",
                  marginRight: "-5px",
                  flex: "1",
                }}
                onMouseEnter={() => handleCardHover(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="d-flex align-items-center justify-content-center">
                  <img
                    src={"https://smartysoftware.in/" + feature.image}
                    width="60"
                    height="60"
                    alt={feature.advantage}
                    style={{ marginBottom: "10px" }}
                  />
                </div>
                <h4
                  className={`title text-center ${hoveredIndex === index ? "hovered" : ""}`}
                  style={{
                    marginTop: "10px",
                    color: "#333",
                    transition: "color 0.3s",
                  }}
                >
                  {feature.advantage}
                </h4>
                <p
                  className="text-muted para mb-0"
                  style={{
                    color: hoveredIndex === index ? "#ffffff" : "#00FF00",
                    textAlign: "center",
                    transition: "color 0.3s",
                    maxHeight: "5em",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {feature.advantage_detail}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <style>
        {`
        .feature-primary {
          cursor: pointer;
          transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
          perspective: 1000px;
          margin-bottom: 20px;
          margin-top: 10px;
          padding: 20px;
          background-color: #ffffff;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 2px solid #ccc;
        }

        .feature-primary:hover {
          border-color: #1e90ff;
        }

        .hovered {
          transform: translateY(-5px);
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }

        .title {
          margin-bottom: 0;
        }

        .text-muted.para {
          margin-top: 10px;
        }

        .section-title-wrapper {
          margin: 40px 0;
        }

        .section-title {
          text-align: center;
          font-size: 28px;
          font-weight: bold;
        }

        .section-gap {
          height: 20px;
        }

        .row-gap {
          margin-top: 20px;
        }

        .button-container {
          margin-top: 10px;
        }

        .button-container a {
          display: inline-flex;
          align-items: center;
          padding: 4px 8px;
          margin-right: 10px;
          font-weight: normal;
          font-size: 14px;
          text-decoration: none;
          color: #333;
          background-color: #f5f5f5;
          border: 1px solid #ccc;
          border-radius: 4px;
          transition: background-color 0.3s;
        }

        .button-container a:hover {
          background-color: #e5e5e5;
        }

        .button-icon {
          margin-right: 5px;
        }

        .button-label {
          color: #333;
        }
      `}
      </style>
    </section>
  );
}

export default AllFeatures;



// import { Button, Typography, Box, Card, CardContent, CardMedia, useMediaQuery } from '@mui/material';
// import React, { useEffect, useState } from 'react';
// import Grid from '@mui/material/Grid';
// import { Link } from 'react-router-dom';


// function AccountingAndFinance({docname}) {
//   const [AccountData, SetAccountData] = useState([]);
//   const [documentData, setDocumentData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           `https://smartysoftware.in/api/method/professional.web.get_solution_landing?docname=${encodeURIComponent(docname)}`
//         );
//         const data = await response.json();
//         console.log(data);
//         setDocumentData(data.message.smarty_key_points);
//         SetAccountData(data.message);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);

//   const isMobile = useMediaQuery('(max-width: 600px)');

//   return (
//     <>
//       <Box
//         style={{
//           paddingTop: "170px",
//           textAlign: "center",
//           paddingBottom: "50px",
//           background: "linear-gradient(#add8e6,#f5f5f5,#b0c4de)",
//           height: "auto",
//         }}
//       >
//         <Grid container spacing={2}>
//           <Grid item xs={12} md={6}>
//             <Typography sx={{ fontWeight: 700, mt: 3, fontSize: "40px" }}>
//               {AccountData.tagline}
//             </Typography>
//             <Typography sx={{ fontWeight: 700, mt: 2, fontSize: "20px" }}>
//               {AccountData.descriptive_title}
//             </Typography>
//             <Link style={{ textDecoration: "none" }} to="/excelfileform">
//               <Button
//                 variant="contained"
//                 color="success"
//                 sx={{ mt: 3, ml: 2, mb: 2 }}
//               >
//                 Schedule a Meeting
//               </Button>
//             </Link>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Box>
//               <iframe
//                 width="80%"
//                 height="320px"
//                 src="https://www.youtube.com/embed/u2uv_1H2UR0"
//                 frameBorder="0"
//                 allow="autoplay; encrypted-media"
//                 allowFullScreen="true"
//               ></iframe>
//             </Box>
//           </Grid>
//         </Grid>
//       </Box>

//       {/* Cards of Data */}
//       <Box sx={{ width: 'auto', m: 5 }}>
//         <Grid container spacing={2}>
//           {documentData.map((data, index) => (
//             <Grid item xs={12} key={index}>
//               <Card
//                 sx={{
//                   display: 'flex',
//                   flexDirection: isMobile ? 'column' : 'row',
//                   boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
//                   borderRadius: '4px',
//                   transition: 'transform 0.3s, box-shadow 0.3s, border-color 0.3s',
//                   border: '1px solid #ccc',
//                   marginBottom: '10px',
//                 }}
//                 onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
//                 onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
//               >
//                 {isMobile ? (
//                   <>
//                     <CardContent>
//                       <Typography sx={{ fontSize: "32px", fontWeight: "bold" }}>{data.document_name}</Typography>
//                       <Typography sx={{ fontSize: "22px", mt: 5 }}>{data.document_detail}</Typography>
//                       <Typography  sx={{ fontSize: "14px", mt: 5 }}dangerouslySetInnerHTML={{ __html: data.detailed_description }} />
//                     </CardContent>
//                     <CardMedia
//                       component="img"
//                       src={"https://smartysoftware.in/" + data.image}
//                       alt="Document Image"
//                       sx={{
//                         width: '100%',
//                         height: 'auto',
//                         borderTopLeftRadius: '4px',
//                         borderBottomLeftRadius: '4px',
//                       }}
//                     />
//                   </>
//                 ) : (
//                   <>
//                     <CardContent sx={{ flex: '0 0 35%' }}>
//                       <Typography sx={{ fontSize: "32px", fontWeight: "bold" }}>{data.document_name}</Typography>
//                       <Typography sx={{ fontSize: "22px", mt: 5 }}>{data.document_detail}</Typography>
//                       <Typography  sx={{ fontSize: "14px", mt: 5 }}dangerouslySetInnerHTML={{ __html: data.detailed_description }} />
//                     </CardContent>
//                     <CardMedia
//                       component="img"
//                       src={"https://smartysoftware.in/" + data.image}
//                       alt="Document Image"
//                       sx={{
//                         width: '65%',
//                         height: 'auto',
//                         borderTopLeftRadius: '4px',
//                         borderTopRightRadius: '4px',
//                       }}
//                     />
//                   </>
//                 )}
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
       
//     </>
//   );
// }

// export default AccountingAndFinance;
