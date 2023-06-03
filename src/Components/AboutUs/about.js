import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TeamMember from "./TeamMember";

function About() {
  return (
    <>
      <Box
        style={{

          textAlign: "center",
          fontFamily: "Arial, sans-serif",
          padding: "2rem",
          width: "100%", // Set width to 100%
          boxSizing: "border-box", // Include padding and border in the width calculation
        }}
      >
        <Typography
          style={{
            fontWeight: 700, 
            fontSize: '32px',
            marginBottom: "2rem",
            fontFamily: "Roboto, sans-serif",
          }}
        >
          About Us
        </Typography>
        <Typography
          style={{
            fontSize: "20px",
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
      <Box>
        <TeamMember/>
      </Box>
    </>
  );
}

export default About;
