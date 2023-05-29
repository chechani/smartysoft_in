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
<WhatsAppButton />
<Box sx={{ mt: 10 }}>
<GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }} />
<CssBaseline />
<Container maxWidth="xl" component="main" sx={{ pt: 3, pb: 5 }}>
<Typography
sx={{fontWeight: "bold", textAlign: "center" }}
variant="h3"
color="text.primary"
gutterBottom
>
Software Products that help in Digital Transformation
</Typography>
</Container>
<Container>
<Box sx={{ pb: 10 }}>
<Grid container spacing={5} sx={{ mb: 5 }}>
<Grid item xs={12} sm={6} md={4}>
<Card sx={{ p: 2 }}>
<img
src="./company_images/erpnext.png"
style={{ height: "auto", width: "100%", maxWidth: "100px" }}
/>
<Typography sx={{ fontSize: "18px",mt: 3 }}>
ERPNext is a free and open-source integrated Enterprise Resource Planning (ERP) software developed by an Indian software company Frappe Technologies Pvt. Ltd.
</Typography>
<Button variant="contained" color="success" sx={{mt: 2 }} onClick={handleOpen1}>
Watch the Video
</Button>
<Dialog open={open1} onClose={handleClose1}>
<DialogContent>
<Box sx={{ width: "auto", borderRadius: "10px" }}>
<Typography sx={{ fontSize: "24px", fontWeight: "bold",textAlign: "center", mb: 1 }}>
ERPNext Video
</Typography>
<iframe
                       width="100%"
                       height="auto"
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
<img
src="./company_images/erpnext.png"
style={{ height: "auto", width: "100%", maxWidth: "100px" }}
/>
<Typography sx={{ fontSize: "18px", mt: 3 }}>
ERPNext is a free and open-source integrated Enterprise Resource Planning (ERP) software developed by an Indian software company Frappe Technologies Pvt. Ltd.
</Typography>
<Button variant="contained" color="success" sx={{ mt: 2 }} onClick={handleOpen1}>
Watch the Video
</Button>
<Dialog open={open1} onClose={handleClose1}>
<DialogContent>
<Box sx={{ width: "auto", borderRadius: "10px" }}>
<Typography sx={{ fontSize: "24px", fontWeight: "bold", textAlign: "center", mb: 1 }}>
ERPNext Video
</Typography>
<iframe
                       width="100%"
                       height="auto"
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
<img
src="./company_images/nextcloudlogo.png"
style={{ height: "auto", width: "100%", maxWidth: "100px" }}
/>
<Typography sx={{ fontSize: "18px", mt: 1 }}>
Nextcloud is a suite of client-server software for creating and using file hosting services. Nextcloud provides functionality similar to Dropbox, Office 365.
</Typography>
<Button variant="contained" color="success" sx={{ mt: 2 }} onClick={handleOpen}>
Watch the Video
</Button>
<Dialog open={open} onClose={handleClose}>
<DialogContent>
<Box sx={{ width: "auto", borderRadius: "10px" }}>
<Typography sx={{ fontSize: "24px", fontWeight: "bold",textAlign: "center", mb: 1 }}>
Nextcloud Video
</Typography>
<iframe
                       width="100%"
                       height="auto"
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
<img src="./company_images/mautic.png" style={{ height: "auto", width: "100%", maxWidth: "130px" }} />
<Typography sx={{ fontSize: "18px", mt: 2 }}>
Mautic is an open-source marketing automation platform that provides you with the greatest level of audience intelligence and makes more meaningful customer connections.
</Typography>
<Button variant="contained" color="success" sx={{ mt: 2 }} onClick={handleOpen2}>
Watch the Video
</Button>
<Dialog open={open2} onClose={handleClose2}>
<DialogContent>
<Box sx={{ width: "auto", borderRadius: "10px" }}>
<Typography sx={{ fontSize: "24px", fontWeight: "bold", textAlign: "center", mb: 1 }}>
Mautic Video
</Typography>
<iframe
                       width="100%"
                       height="auto"
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
<img src="./company_images/botpress.png" style={{ height: "auto", width: "100%", maxWidth: "150px" }} />
<Typography sx={{ fontSize: "18px", mt: 2 }}>
Botpress is an open-source conversational platform that enables businesses to design, build, and deploy AI-powered chatbots for various use cases.
</Typography>
<Button variant="contained" color="success" sx={{ mt: 2 }} onClick={handleOpen}>
Watch the Video
</Button>
<Dialog open={open} onClose={handleClose}>
<DialogContent>
<Box sx={{ width: "auto", borderRadius: "10px" }}>
<Typography sx={{ fontSize: "24px", fontWeight: "bold", textAlign: "center", mb: 1 }}>
Botpress Video
</Typography>
<iframe
                       width="100%"
                       height="auto"
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
<img src="./company_images/n8n.png" style={{ height: "auto", width: "100%", maxWidth: "120px" }} />
<Typography sx={{ fontSize: "18px", mt: 3 }}>
n8n allows you to build flexible workflows focused on deep data integration. And with shareable templates and a user-friendly UI, less technical people on your team can collaborate on them too.
</Typography>
<Button variant="contained" color="success" sx={{mt: 2 }} onClick={handleOpen}>
Watch the Video
</Button>
<Dialog open={open} onClose={handleClose}>
<DialogContent>
<Box sx={{ width: "auto", borderRadius: "10px" }}>
<Typography sx={{ fontSize: "24px", fontWeight: "bold", textAlign: "center", mb: 1 }}>
n8n Video
</Typography>
<iframe
                       width="100%"
                       height="auto"
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
<img src="./company_images/Excel2tally.png" style={{ height: "auto", width: "100%", maxWidth: "130px" }} />
<Typography sx={{ fontSize: "18px", mt: 1 }}>
Excel2Tally is a tool that simplifies data import from Excel to Tally ERP 9 by converting Excel data into XML format compatible with Tally.
</Typography>
<Button variant="contained" color="success" sx={{mt: 2 }} onClick={handleOpen}>
Watch the Video
</Button>
<Dialog open={open} onClose={handleClose}>
<DialogContent>
<Box sx={{ width: "auto", borderRadius: "10px" }}>
<Typography sx={{ fontSize: "24px", fontWeight: "bold",textAlign: "center", mb: 1 }}>
Excel2Tally Video
</Typography>
<iframe
                       width="100%"
                       height="auto"
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
<img src="./company_images/accxchangelogo.jpeg" style={{ height: "auto", width: "100%", maxWidth: "140px", borderRadius: '10px' }} />
<Typography sx={{ fontSize: "18px",mt: 2 }}>
AccXchange is a platform that enables seamless data synchronization between Salesforce and QuickBooks, providing a unified view of customer and financial data.
</Typography>
<Button variant="contained" color="success" sx={{mt: 2 }} onClick={handleOpen}>
Watch the Video
</Button>
<Dialog open={open} onClose={handleClose}>
<DialogContent>
<Box sx={{ width: "auto", borderRadius: "10px" }}>
<Typography sx={{ fontSize: "24px", fontWeight: "bold",textAlign: "center", mb: 1 }}>
AccXchange Video
</Typography>
<iframe
                       width="100%"
                       height="auto"
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
<img src="./company_images/einvoice.jpeg" style={{ height: "auto", width: "100%", maxWidth: "140px", borderRadius: "10px" }} />
<Typography sx={{ fontSize: "18px",mt: 2 }}>
E-Invoice is a standardized digital invoice format introduced by the Government of India to simplify and automate the invoicing process for businesses.
</Typography>
<Button variant="contained" color="success" sx={{mt: 2 }} onClick={handleOpen}>
Watch the Video
</Button>
<Dialog open={open} onClose={handleClose}>
<DialogContent>
<Box sx={{ width: "auto", borderRadius: "10px" }}>
<Typography sx={{ fontSize: "24px", fontWeight: "bold",textAlign: "center", mb: 1 }}>
E-Invoice Video
</Typography>
<iframe
                       width="100%"
                       height="auto"
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