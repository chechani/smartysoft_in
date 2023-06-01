import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MailIcon from "@mui/icons-material/Mail";
import { Button, TextField, Typography } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  function handleSubscribe() {
    if (!email) {
      toast.error("Please enter an email address");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address");
    } else {
      fetch(
        "https://clients.smartysoft.in/api/method/professional.api.add_email_member?group=Excel to Tally&email=" +
        email
      )
        .then((response) => {
          if (response.ok) {
            toast.success("Thank you for subscribing!");
            setEmail("");
          } else {
            throw new Error("Something went wrong");
          }
        })
        .catch((error) => toast.error(error.message));
    }
  }
  return (
    <Box
      style={{
        flexGrow: 1,
        backgroundColor: "rgba(247,247,247,1)",
      }}
    >
      <ToastContainer />
      <Grid container spacing={3} style={{ paddingBottom: "50px" }}>
        <Grid item xs={12} md={3}>
          <div style={{marginLeft:"20px"}}>
            <img
              alt="footer-logo"
              src="./smarty_logo.png"
              style={{ width: "50%", marginLeft: "11%" }}
            />
            <Typography sx={{ width: "60%", ml: 5, marginTop: 2, fontSize: "18px" }}>
              Helping Businesses in 💯% Digitalization and Automation
            </Typography>
            <Box sx={{ ml: 3, mt: 1 }}>
              <a href="https://www.facebook.com/customexceltotally" target="_blank" rel="noopener noreferrer">
                <InstagramIcon fontSize="large" sx={{ color: "darkRed", pl: 1 }} />
              </a>
              <a href="https://www.facebook.com/customexceltotally" target="_blank" rel="noopener noreferrer">
                <FacebookIcon fontSize="large" sx={{ color: "darkBlue", pl: 1 }} />
              </a>
              <a href="https://www.youtube.com/@accxchange6845" target="_blank" rel="noopener noreferrer">
                <YouTubeIcon fontSize="large" sx={{ color: "red", pl: 1 }} />
              </a>
              <a href="https://www.facebook.com/customexceltotally" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon fontSize="large" sx={{ color: "blue", pl: 1 }} />
              </a>
            </Box>
          </div>
        </Grid>
        <Grid div xs={12} sm={6} md={2}>
          <Box sx={{ mt: 5, ml: { xs: 2, sm: 1} }}>
            <ul style={{ fontSize: "14px", listStyleType: "none", textAlign: "center" }}>
              <li style={{ marginTop: "10px" }}>
                <a
                  style={{ color: "black", textDecoration: "none" }}
                  href="/accounting"
                >
                  Accounting and Finance
                </a>
              </li>
              <li style={{ marginTop: "10px" }}>
                <a
                  style={{ color: "black", textDecoration: "none" }}
                  href="/marketing"
                >
                  Marketing Automation
                </a>
              </li>
              <li style={{ marginTop: "10px" }}>
                <a
                  style={{ color: "black", textDecoration: "none" }}
                  href="/pointsales"
                >
                  Point of Sales
                </a>
              </li>
              <li style={{ marginTop: "10px" }}>
                <a
                  style={{ color: "black", textDecoration: "none" }}
                  href="/qualitymanagement"
                >
                  Quality Management
                </a>
              </li>
              <li style={{ marginTop: "10px" }}>
                <a
                  style={{ color: "black", textDecoration: "none" }}
                  href="/assetmanagement"
                >
                  Asset Management
                </a>
              </li>
              <li style={{ marginTop: "10px" }}>
                <a
                  style={{ color: "black", textDecoration: "none" }}
                  href="/humanresourcesmanagement"
                >
                  Human Resources Management
                </a>
              </li>
              <li style={{ marginTop: "10px" }}>
                <a
                  style={{ color: "black", textDecoration: "none" }}
                  href="/businessintelligence"
                >
                  Business Intelligence
                </a>
              </li>
              <li style={{ marginTop: "10px" }}>
                <a
                  style={{ color: "black", textDecoration: "none" }}
                  href="/knowledgemanagement"
                >
                  Knowledge Management
                </a>
              </li>
              <li style={{ marginTop: "10px" }}>
                <a
                  style={{ color: "black", textDecoration: "none" }}
                  href="/knowledgemanagement"
                >
                  Excel to Tally
                </a>
              </li>
            </ul>
          </Box>
        </Grid>
        <Grid div xs={12} sm={6} md={2}>
          <Box sx={{ mt: 5, ml: { xs: 2, sm: 1 } }}>
            <ul style={{ fontSize: "14px", listStyleType: "none", textAlign: "center" }}>
              <li style={{ marginTop: "10px" }}>
                <a
                  style={{ color: "black", textDecoration: "none" }}
                  href="/salesdistribution"
                >
                  Sales and Distribution
                </a>
              </li>
              <li style={{ marginTop: "10px" }}>
                <a
                  style={{ color: "black", textDecoration: "none" }}
                  href="/salesdistribution"
                >
                  Buying and Vendor Portal
                </a>
              </li>
              <li style={{ marginTop: "10px" }}>
                <a
                  style={{ color: "black", textDecoration: "none" }}
                  href="/buyingvendorportal"
                >
                  Manufacturing Operations
                </a>
              </li>
              <li style={{ marginTop: "10px" }}>
                <a
                  style={{ color: "black", textDecoration: "none" }}
                  href="/manufacturingoperation"
                >
                  Project and Task Management
                </a>
              </li>
              <li style={{ marginTop: "10px" }}>
                <a
                  style={{ color: "black", textDecoration: "none" }}
                  href="/projectandtaskmanagement"
                >
                  Customer Help Desk
                </a>
              </li>
              <li style={{ marginTop: "10px" }}>
                <a
                  style={{ color: "black", textDecoration: "none" }}
                  href="/customerhelpdesk"
                >
                  Website Builder
                </a>
              </li>
              <li style={{ marginTop: "10px" }}>
                <a
                  style={{ color: "black", textDecoration: "none" }}
                  href="https://einvoicing.co.in"
                >
                  Expense Management
                </a>
              </li>
              <li style={{ marginTop: "10px" }}>
                <a
                  style={{ color: "black", textDecoration: "none" }}
                  href="/expensetravelmanagement"
                >
                  Document Management
                </a>
              </li>
              <li style={{ marginTop: "10px" }}>
                <a
                  style={{ color: "black", textDecoration: "none" }}
                  href="/documentautomation"
                >
                  Knowledge Manager
                </a>
              </li>
            </ul>
          </Box>
        </Grid>
        <Grid div xs={12} sm={6} md={2}>
          <Box sx={{ mt: 5, ml: { xs: 2, sm: 1 } }}>
            <ul style={{ fontSize: "14px", listStyleType: "none", textAlign: "center" }}>
              <li style={{ marginTop: "10px" }}>
                <a
                  style={{ color: "black", textDecoration: "none" }}
                  href="https://exceltotally.info"
                >
                  Customer Relationship Management
                </a>
              </li>
              <li style={{ marginTop: "10px" }}>
                <a
                  style={{ color: "black", textDecoration: "none" }}
                  href="https://knowledgemanager.in"
                >
                  Inventory Management
                </a>
              </li>
              <li style={{ marginTop: "10px" }}>
                <a
                  style={{ color: "black", textDecoration: "none" }}
                  href="/inventorymanagement"
                >
                  Project Accounting
                </a>
              </li>
              <li style={{ marginTop: "10px" }}>
                <a
                  style={{ color: "black", textDecoration: "none" }}
                  href="/projectaccounting"
                >
                  Time Recording and Billing
                </a>
              </li>
              <li style={{ marginTop: "10px" }}>
                <a
                  style={{ color: "black", textDecoration: "none" }}
                  href="/timerecordingandbilling"
                >
                  Maintenance Management
                </a>
              </li>
              <li style={{ marginTop: "10px" }}>
                <a
                  style={{ color: "black", textDecoration: "none" }}
                  href="/maintenancemanagement"
                >
                  eCommerce and Online Selling
                </a>
              </li>
              <li style={{ marginTop: "10px" }}>
                <a
                  style={{ color: "black", textDecoration: "none" }}
                  href="https://einvoicing.co.in"
                >
                  Meeting Agenda and Task Execution
                </a>
              </li>
              <li style={{ marginTop: "10px" }}>
                <a
                  style={{ color: "black", textDecoration: "none" }}
                  href="https://einvoicing.co.in"
                >
                  Fleet Management
                </a>
              </li>
              <li style={{ marginTop: "10px" }}>
                <a
                  style={{ color: "black", textDecoration: "none" }}
                  href="https://einvoicing.co.in"
                >
                  eInvoicing
                </a>
              </li>
            </ul>
          </Box>
        </Grid>
        <Grid div xs={12} md={3}>
          <Box sx={{ mt: 5, ml: { xs: 5, sm: 3 } }}>
            <ul style={{ fontSize: "14px", listStyleType: "none" }}>
              <li style={{ marginTop: "10px" }}>
                <a
                  href="/contactus"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Contact Us
                </a>
              </li>
              <li style={{ marginTop: "10px" }}>
                <a
                  style={{ color: "black", textDecoration: "none" }}
                  href="/privacypolicy"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </Box>
          <Box sx={{ ml: { xs: 9, sm: 7 } }}>
            <Box sx={{ mr: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailIcon />
                      </InputAdornment>
                    ),
                  }}
                  label="Your email"
                  placeholder="Your Email"
                  sx={{
                    width: "100%",
                    mb: 2,
                    mt: 2,
                  }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                  variant="contained"
                  style={{ width: "100%", backgroundColor: "#006400", maxWidth: "auto" }}
                  onClick={handleSubscribe}
                >
                  Subscribe
                </Button>
              </Box>
            </Box>
            <br />
          </Box>
        </Grid>
      </Grid>

      <Box>
        <Box
          style={{
            backgroundColor: "black",
            textAlign: "center",
            color: "white",
            marginRight: "3%",
            height: "auto",
            textAlign: "center",
            padding: "9px",
            width: "100%",
            fontSize: "15px"
          }}
        >
          Smarty Software Private Limited <br></br>Copyright
          ©2023 All Rights Reserved
        </Box>
      </Box>
    </Box>
  );
}
