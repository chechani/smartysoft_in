import React, { useState, useEffect } from "react";
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

export default function Footer({segment}) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [linkColumns, setLinkColumns] = useState([]);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await fetch(`https://smartysoftware.in/api/method/professional.web.get_links?segment=${encodeURIComponent(segment)}`);
        if (response.ok) {
          const data = await response.json();
          setLinkColumns(data.message);
        } else {
          throw new Error("Something went wrong");
        }
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchLinks();
  }, []);

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

  // Calculate the number of rows based on the link count
  const rowCount = Math.ceil(linkColumns.length / 4);

  // Divide the links into four columns dynamically
  const linkColumnData = [];
  for (let i = 0; i < 4; i++) {
    const start = i * rowCount;
    const end = start + rowCount;
    const columnLinks = linkColumns.slice(start, end);
    linkColumnData.push(columnLinks);
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
          <div style={{ marginLeft: "20px", width: "fit-content" }}>
            <Typography
              sx={{ width: "70%", ml: 5, marginTop: 6, fontSize: "18px", alignSelf: 'flex-start' }}
            >
              Helping Businesses in 💯% Digitalization and Automation
            </Typography>
            <Box sx={{ ml: 3, mt: 1 }}>
              <a
                href="https://www.facebook.com/customexceltotally"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon
                  fontSize="large"
                  sx={{ color: "darkRed", pl: 1 }}
                />
              </a>
              <a
                href="https://www.facebook.com/customexceltotally"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon
                  fontSize="large"
                  sx={{ color: "darkBlue", pl: 1 }}
                />
              </a>
              <a
                href="https://www.youtube.com/@accxchange6845"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeIcon fontSize="large" sx={{ color: "red", pl: 1 }} />
              </a>
              <a
                href="https://www.facebook.com/customexceltotally"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon fontSize="large" sx={{ color: "blue", pl: 1 }} />
              </a>
            </Box>
          </div>
        </Grid>
        <Grid item xs={12} sm={9} md={7} sx={{ margin: "auto" }}>
          <Box sx={{ mt: 5, ml: { xs: 2, sm: 1 } }}>
            <Grid container spacing={2}>
              {linkColumnData.map((columnLinks, columnIndex) => (
                <Grid item xs={6} sm={3} key={columnIndex}>
                  <ul
                    style={{
                      fontSize: "14px",
                      listStyleType: "none",
                      paddingInlineStart: 0,
                      marginTop: 0,
                      paddingTop: 0,
                    }}
                  >
                    {columnLinks.map((link, index) => (
                      <li style={{ marginTop: "10px" }} key={index}>
                        <a
                          style={{ color: "black", textDecoration: "none" }}
                          href={link.href}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={2}>
          <Box sx={{ mt: 5, ml: { xs: 7, sm: 5 } }}>
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
          <Box sx={{ ml: { xs: 7, sm: 5 } }}>
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
            fontSize: "15px",
          }}
        >
          Smarty Software Private Limited <br />Copyright
          ©2023 All Rights Reserved
        </Box>
      </Box>
    </Box>
  );
}
