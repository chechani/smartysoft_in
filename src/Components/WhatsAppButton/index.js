import React from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box } from "@mui/material";

function WhatsAppButton() {

  const handleClick = () => {
    const phoneNumber = "+918005834930"; // Please note that WhatsApp requires the phone number to be in international format without any spaces or special characters
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url);
  };

  return (
    <Box sx={{ position: 'fixed', bottom: '40px', right: '40px' }}>
      <WhatsAppIcon onClick={handleClick} style={{ fontSize: "50px", color: "Green"}} />
    </Box>
  );
}

export default WhatsAppButton;