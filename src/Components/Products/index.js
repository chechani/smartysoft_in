import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import { Dialog, DialogContent } from "@mui/material";
import WhatsAppButton from "../WhatsAppButton";


function Products() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };


  return (
    <>
    <WhatsAppButton/>
      <Box sx={{ mt: 10 }}>
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
            sx={{ fontFamily: "lato", fontWeight: "bold" }}
            variant="h3"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Software Products that helps in Digital Transformation
          </Typography>
          {/* <Typography
            align="center"
            color="text.secondary"
            sx={{ fontFamily: "lato", fontSize: "19px" }}
          >
            If the company offers multiple services, it's helpful to organize them into categories. This makes it easier for visitors to find the specific service they are looking for.

          </Typography> */}
        </Container>
        <Container>
          <Box sx={{pb: 10}}>
            <Grid container spacing={5} sx={{ mb: 5}}>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{p:2}}>
          <img src="./company_images/erpnext.png" style={{ height: "25px", width: "100px" }} />
          <Typography sx={{ fontSize: "18px", fontFamily: "lato", mt: 3 }}>ERPNext is a free and open-source integrated Enterprise Resource Planning (ERP) software developed by an Indian software company Frappe Technologies Pvt. Ltd.</Typography>
          <Button variant="contained" color="success" sx={{ fontFamily: "lato", mt: 2 }} onClick={handleOpen1}>More Details For Watch the Video</Button>
          <Dialog open={open1} onClose={handleClose1}>
            <DialogContent>
              <Box sx={{ width: "auto", borderRadius: "10px" }}>
                <Typography sx={{ fontSize: "24px", fontWeight: "bold", fontFamily: "lato", textAlign: "center", mb: 1 }}>ERPNext Video</Typography>
                <iframe
                  width="500px"
                  height="320px"
                  src="https://www.youtube.com/embed/u2uv_1H2UR0"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen="true"
                ></iframe>
              </Box>
            </DialogContent>
          </Dialog>
        </Card>
      </Grid>
              <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ p: 2 }}>
          <img src="./company_images/erpnext.png" style={{ height: "25px", width: "100px" }} />
          <Typography sx={{ fontSize: "18px", fontFamily: "lato", mt: 3 }}>ERPNext is a free and open-source integrated Enterprise Resource Planning (ERP) software developed by an Indian software company Frappe Technologies Pvt. Ltd.</Typography>
          <Button variant="contained" color="success" sx={{ fontFamily: "lato", mt: 2 }} onClick={handleOpen1}>More Details For Watch the Video</Button>
          <Dialog open={open1} onClose={handleClose1}>
            <DialogContent>
              <Box sx={{ width: "auto", borderRadius: "10px" }}>
                <Typography sx={{ fontSize: "24px", fontWeight: "bold", fontFamily: "lato", textAlign: "center", mb: 1 }}>ERPNext Video</Typography>
                <iframe
                  width="500px"
                  height="320px"
                  src="https://www.youtube.com/embed/u2uv_1H2UR0"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen="true"
                ></iframe>
              </Box>
            </DialogContent>
          </Dialog>
        </Card>
      </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ p: 2 }}>
                  <img src="./company_images/nextcloudlogo.png" style={{ height: "70px", width: "100px" }} />
                  <Typography sx={{ fontSize: "18px", fontFamily: "lato", mt: 1 }}>Nextcloud is a suite of client-server software for creating and using file hosting services. Nextcloud provides functionality similar to Dropbox, Office 365 </Typography>
                  <Button variant="contained" color="success" sx={{ fontFamily: "lato", mt: 2 }} onClick={handleOpen}>More Details For Watch the Video</Button>
                  <Dialog open={open} onClose={handleClose}>
                    <DialogContent>
                      <Box sx={{ width: "auto", borderRadius: "10px" }}>
                        <Typography sx={{ fontSize: "24px", fontWeight: "bold", fontFamily: "lato", textAlign: "center", mb: 1 }}>ERPNext Video</Typography>
                        <iframe
                          width="500px"
                          height="320px"
                          src="https://www.youtube.com/embed/u2uv_1H2UR0"
                          frameborder="0"
                          allow="autoplay; encrypted-media"
                          allowfullscreen="true"
                        ></iframe>
                      </Box>
                    </DialogContent>
                  </Dialog>
                </Card>
              </Grid>
            </Grid>
            <Grid container spacing={5} sx={{ mb: 5 }}>
            <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ p: 2 }}>
          <img src="./company_images/mautic.png" style={{ height: "35px", width: "130px" }} />
          <Typography sx={{ fontSize: "18px", fontFamily: "lato", mt: 2 }}>Mautic is an open source marketing automation platform that provides you with the greatest level of audience intelligence and make more meaningful customer connections.</Typography>
          <Button variant="contained" color="success" sx={{ fontFamily: "lato", mt: 2 }} onClick={handleOpen2}>More Details For Watch the Video</Button>
          <Dialog open={open2} onClose={handleClose2}>
            <DialogContent>
              <Box sx={{ width: "auto", borderRadius: "10px" }}>
                <Typography sx={{ fontSize: "24px", fontWeight: "bold", fontFamily: "lato", textAlign: "center", mb: 1 }}>Mautic Video</Typography>
                <iframe
                  width="500px"
                  height="320px"
                  src="https://www.youtube.com/embed/u2uv_1H2UR0"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen="true"
                ></iframe>
              </Box>
            </DialogContent>
          </Dialog>
        </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ p: 2 }}>
                  <img src="./company_images/botpress.png" style={{ height: "40px", width: "150px" }} />
                  <Typography sx={{ fontSize: "18px", fontFamily: "lato", mt: 2 }}>ERPNext is a free and open-source integrated Enterprise Resource Planning (ERP) software developed by an Indian software company Frappe Technologies Pvt. Ltd.</Typography>
                  <Button variant="contained" color="success" sx={{ fontFamily: "lato", mt: 2 }} onClick={handleOpen}>More Details For Watch the Video</Button>
                  <Dialog open={open} onClose={handleClose}>
                    <DialogContent>
                      <Box sx={{ width: "auto", borderRadius: "10px" }}>
                        <Typography sx={{ fontSize: "24px", fontWeight: "bold", fontFamily: "lato", textAlign: "center", mb: 1 }}>ERPNext Video</Typography>
                        <iframe
                          width="500px"
                          height="320px"
                          src="https://www.youtube.com/embed/u2uv_1H2UR0"
                          frameborder="0"
                          allow="autoplay; encrypted-media"
                          allowfullscreen="true"
                        ></iframe>
                      </Box>
                    </DialogContent>
                  </Dialog>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ p: 2 }}>
                  <img src="./company_images/n8n.png" style={{ height: "45px", width: "120px" }} />
                  <Typography sx={{ fontSize: "18px", fontFamily: "lato", mt: 3 }}>n8n allows you to build flexible workflows focused on deep data integration. And with sharable templates and a user-friendly UI, the less technical people on your team can collaborate on them too.</Typography>
                  <Button variant="contained" color="success" sx={{ fontFamily: "lato", mt: 2 }} onClick={handleOpen}>More Details For Watch the Video</Button>
                  <Dialog open={open} onClose={handleClose}>
                    <DialogContent>
                      <Box sx={{ width: "auto", borderRadius: "10px" }}>
                        <Typography sx={{ fontSize: "24px", fontWeight: "bold", fontFamily: "lato", textAlign: "center", mb: 1 }}>ERPNext Video</Typography>
                        <iframe
                          width="500px"
                          height="320px"
                          src="https://www.youtube.com/embed/u2uv_1H2UR0"
                          frameborder="0"
                          allow="autoplay; encrypted-media"
                          allowfullscreen="true"
                        ></iframe>
                      </Box>
                    </DialogContent>
                  </Dialog>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ p: 2 }}>
                  <img src="./company_images/Excel2tally.png" style={{ height: "65px", width: "130px" }} />
                  <Typography sx={{ fontSize: "18px", fontFamily: "lato", mt: 1 }}>ERPNext is a free and open-source integrated Enterprise Resource Planning (ERP) software developed by an Indian software company Frappe Technologies Pvt. Ltd.</Typography>
                  <Button variant="contained" color="success" sx={{ fontFamily: "lato", mt: 2 }} onClick={handleOpen}>More Details For Watch the Video</Button>
                  <Dialog open={open} onClose={handleClose}>
                    <DialogContent>
                      <Box sx={{ width: "auto", borderRadius: "10px" }}>
                        <Typography sx={{ fontSize: "24px", fontWeight: "bold", fontFamily: "lato", textAlign: "center", mb: 1 }}>ERPNext Video</Typography>
                        <iframe
                          width="500px"
                          height="320px"
                          src="https://www.youtube.com/embed/u2uv_1H2UR0"
                          frameborder="0"
                          allow="autoplay; encrypted-media"
                          allowfullscreen="true"
                        ></iframe>
                      </Box>
                    </DialogContent>
                  </Dialog>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ p: 2 }}>
                  <img src="./company_images/accxchangelogo.jpeg" style={{ height: "40px", width: "140px", borderRadius: '10px' }} />
                  <Typography sx={{ fontSize: "18px", fontFamily: "lato", mt: 2 }}>ERPNext is a free and open-source integrated Enterprise Resource Planning (ERP) software developed by an Indian software company Frappe Technologies Pvt. Ltd.</Typography>
                  <Button variant="contained" color="success" sx={{ fontFamily: "lato", mt: 2 }} onClick={handleOpen}>More Details For Watch the Video</Button>
                  <Dialog open={open} onClose={handleClose}>
                    <DialogContent>
                      <Box sx={{ width: "auto", borderRadius: "10px" }}>
                        <Typography sx={{ fontSize: "24px", fontWeight: "bold", fontFamily: "lato", textAlign: "center", mb: 1 }}>ERPNext Video</Typography>
                        <iframe
                          width="500px"
                          height="320px"
                          src="https://www.youtube.com/embed/u2uv_1H2UR0"
                          frameborder="0"
                          allow="autoplay; encrypted-media"
                          allowfullscreen="true"
                        ></iframe>
                      </Box>
                    </DialogContent>
                  </Dialog>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ p: 2 }}>
                  <img src="./company_images/einvoice.jpeg" style={{ height: "40px", width: "140px", borderRadius: "10px" }} />
                  <Typography sx={{ fontSize: "18px", fontFamily: "lato", mt: 2 }}>ERPNext is a free and open-source integrated Enterprise Resource Planning (ERP) software developed by an Indian software company Frappe Technologies Pvt. Ltd.</Typography>
                  <Button variant="contained" color="success" sx={{ fontFamily: "lato", mt: 2 }} onClick={handleOpen}>More Details For Watch the Video</Button>
                  <Dialog open={open} onClose={handleClose}>
                    <DialogContent>
                      <Box sx={{ width: "auto", borderRadius: "10px" }}>
                        <Typography sx={{ fontSize: "24px", fontWeight: "bold", fontFamily: "lato", textAlign: "center", mb: 1 }}>ERPNext Video</Typography>
                        <iframe
                          width="500px"
                          height="320px"
                          src="https://www.youtube.com/embed/u2uv_1H2UR0"
                          frameborder="0"
                          allow="autoplay; encrypted-media"
                          allowfullscreen="true"
                        ></iframe>
                      </Box>
                    </DialogContent>
                  </Dialog>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Products;