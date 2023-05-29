import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import WhatsAppButton from "../WhatsAppButton";


function Services() {
  return (
    <>
    <WhatsAppButton/>
      <Box sx={{ mb: 10, mt: 15, ml: 3, mr: 3 }}>
        <GlobalStyles
          styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
        />
        <CssBaseline />
        <Container
          disableGutters
          maxWidth="sm"
          component="main"
          sx={{ pt: 3, pb: 5 }}
        >
          <Typography
            sx={{  fontWeight: "bold" }}
            variant="h3"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Services
          </Typography>
          <Typography
            align="center"
            color="text.secondary"
            sx={{fontSize:"19px",
            }}
          >
            If the company offers multiple services, it's helpful to organize them into categories. This makes it easier for visitors to find the specific service they are looking for.

          </Typography>
        </Container>
        <Container>
          <Box sx={{ pb: 10 }}>
            <Grid container spacing={5} sx={{ mb: 5}}>
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ p: 2 }}>
                  <img src="./company_images/erpnext.png" style={{ height: "22px", width: "100px"}} />
                  <Typography sx={{ fontSize: "18px",  mt: 3 }}>ERPNext is a free and open-source integrated Enterprise Resource Planning (ERP) software developed by an Indian software company Frappe Technologies Pvt. Ltd.</Typography>

                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ p: 2 }}>
                  <img src="./company_images/mautic.png" style={{ height: "35px", width: "130px"}} />
                  <Typography sx={{ fontSize: "18px",  mt: 2 }}>Mautic is an open source marketing automation platform that provides you with the greatest level of audience intelligence and make more meaningful customer connections.</Typography>

                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ p: 2 }}>
                  <img src="./company_images/nextcloudlogo.png" style={{ height: "60px", width: "100px"}} />
                  <Typography sx={{ fontSize: "18px",  mt: 2 }}>Nextcloud is a suite of client-server software for creating and using file hosting services. Nextcloud provides functionality similar to Dropbox, Office 365 </Typography>

                </Card>
              </Grid>

            </Grid>
            <Grid container spacing={5} sx={{ mb: 5}}>
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ p: 2 }}>
                  <img src="./company_images/botpress.png" style={{ height: "40px", width: "150px"}} />
                  <Typography sx={{ fontSize: "18px",  mt: 3 }}>ERPNext is a free and open-source integrated Enterprise Resource Planning (ERP) software developed by an Indian software company Frappe Technologies Pvt. Ltd.</Typography>

                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ p: 2 }}>
                  <img src="./company_images/accxchangelogo.jpeg" style={{ height: "45px",borderRadius:"10px", width: "150px"}} />
                  <Typography sx={{ fontSize: "18px",  mt: 2 }}>ERPNext is a free and open-source integrated Enterprise Resource Planning (ERP) software developed by an Indian software company Frappe Technologies Pvt. Ltd.</Typography>

                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ p: 2 }}>
                  <img src="./company_images/einvoice.jpeg" style={{ borderRadius:"10px", height: "45px", width: "150px"}} />
                  <Typography sx={{ fontSize: "18px",  mt: 2 }}>ERPNext is a free and open-source integrated Enterprise Resource Planning (ERP) software developed by an Indian software company Frappe Technologies Pvt. Ltd.</Typography>

                </Card>
              </Grid>
            </Grid>
            <Grid container spacing={5} sx={{ mb:5}}>
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ p: 2 }}>
                  <img src="./company_images/Excel2tally.png" style={{ height: "60px", width: "140px" }} />
                  <Typography sx={{ fontSize: "18px",  mt: 1 }}>ERPNext is a free and open-source integrated Enterprise Resource Planning (ERP) software developed by an Indian software company Frappe Technologies Pvt. Ltd.</Typography>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ p: 2 }}>
                  <img src="./company_images/n8n.png" style={{ height: "45px", width: "140px" }} />
                  <Typography sx={{ fontSize: "18px",  mt: 3 }}>n8n allows you to build flexible workflows focused on deep data integration. And with sharable templates and a user-friendly UI, the less technical people on your team can collaborate on them too.</Typography>

                </Card>
              </Grid>

            </Grid>
          </Box>
        </Container>
      </Box>

    </>
  );
}

export default Services;