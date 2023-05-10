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


function DemoButton() {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
      setOpen(false);
    };
    const handleOpen = () => {
      setOpen(true);
    };
    
    return (
      <>
        <Box sx={{ m:5,textAlign:"center" }}>
        <Typography sx={{fontSize:"40px",fontFamily:"lato",fontWeight:"bold"}}>Watch the Demo and Learn How It Works</Typography>
        <Typography sx={{mt:2,fontSize:"20px",fontFamily:"lato"}}>Want to learn how to import vouchers and master data from Excel sheets into Tally?<br/> Our recorded video demo has got you covered! In just a few minutes, <br/>we'll show you how to use Excel to Tally software for seamless integration.</Typography>
            <Button variant="contained" color="success" sx={{ fontFamily: "lato", mt: 3 }} onClick={handleOpen}>Watch Recorded Demo</Button>
            <Dialog open={open} onClose={handleClose}>
              <DialogContent>
                <Box sx={{ width: "auto", borderRadius: "10px" }}>
                  <Typography sx={{ fontSize: "24px", fontWeight: "bold", fontFamily: "lato", textAlign: "center", mb: 1 }}>Excel To Tally</Typography>
                  <iframe
                    width="500px"
                    height="320px"
                    src="https://www.youtube.com/embed/YiQ3V-Pgu48"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen="true"
                  ></iframe>
                </Box>
              </DialogContent>
            </Dialog>
          </Box>
      </>
    );
  }
  
  export default DemoButton;