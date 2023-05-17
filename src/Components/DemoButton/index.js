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
        <Typography sx={{fontSize:"40px",fontFamily:"lato",fontWeight:"bold"}}>About Us</Typography>
        <Typography sx={{ mt: 2, fontSize: "20px", fontFamily: "lato", ml: "50px", mr: "50px" }}>We are a team of Chartered Accountants and Technical experts who combine financial
         expertise with cutting-edge technology to develop customized solutions for our clients. We believe in a collaborative approach, working 
         closely with our clients to understand their needs and create solutions that meet their unique requirements.We specialize in deployment, 
         enhancement, and operational support services. We understand these services’ plays critical role in helping businesses streamline operations,
         enhance efficiency, and achieve goals. 

</Typography>

          </Box>
      </>
    );
  }
  
  export default DemoButton;