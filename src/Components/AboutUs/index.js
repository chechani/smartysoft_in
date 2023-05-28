import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function AboutUs() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Box
        style={{
          margin: "5rem",
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <Typography
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            marginBottom: "2rem",
            fontFamily: "Roboto, sans-serif",
          }}
        >
          About Us
        </Typography>
        <Typography
          style={{
            fontSize: "20px",
            margin: "0 5rem",
            fontFamily: "Roboto, sans-serif",
          }}
        >
          We are a team of Chartered Accountants and Technical experts who combine
          financial expertise with cutting-edge technology to develop customized
          solutions for our clients. We believe in a collaborative approach, working
          closely with our clients to understand their needs and create solutions that
          meet their unique requirements. We specialize in deployment, enhancement, and
          operational support services. We understand the critical role these services
          play in helping businesses streamline operations, enhance efficiency, and
          achieve their goals.
        </Typography>
      </Box>
    </>
  );
}

export default AboutUs;
