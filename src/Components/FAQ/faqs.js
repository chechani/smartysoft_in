import React, { useEffect, useState } from "react";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { Card, CardContent, Grid, Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const FAQ = ({ category }) => {
  const [faqData, setFaqData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://smartysoftware.in/api/method/professional.web.get_smarty_faq?category=${encodeURIComponent(category)}`);
        const data = await response.json();

        if (response.ok) {
          if (Array.isArray(data.data)) {
            setFaqData(data.data);
            setExpanded({}); // Reset expanded state when FAQs change
          } else {
            setError("Invalid response format: FAQs not found");
          }
        } else {
          setError("Error fetching FAQs: " + data.message);
        }
      } catch (error) {
        setError("Error fetching FAQs: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  if (error) {
    return <p>{error}</p>;
  }

  if (faqData.length === 0) {
    return <p>No FAQs found.</p>;
  }

  const handleAccordionToggle = (faqName) => {
    setExpanded((prevState) => ({
      ...prevState,
      [faqName]: !prevState[faqName],
    }));
  };

  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          fontSize: "32px",
          fontWeight: "bold",
          p: 2,
          mt: 5,
        }}
      >
        Frequently Asked Questions
      </Box>

  
      <Box
        sx={{
          width: "95%", // Increase the width to "100%" for more space
          textAlign: "center",
          pb: 2,
          ml: { xs: 1, sm: 5 },
          position: "relative",
          marginTop: "20px",
        }}
      >
        <Card variant="outlined">
          <CardContent>
            <Grid container spacing={0}>
              <Grid item xs={12} md={6}>
                <img
                  src="https://smartysoftware.in/en/img/features/faq-qa.png"
                  alt="mmm"
                  style={{ width: "80%", height: "auto", maxHeight: "350px" }} // Set fixed width, height, and maxHeight for the image
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <Box>
                  {faqData.map((faq) => (
                    <Accordion
                      key={faq.name}
                      expanded={expanded[faq.name]} // Pass the expanded state for each accordion
                      onChange={() => handleAccordionToggle(faq.name)}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel-${faq.name}-content`}
                        id={`panel-${faq.name}-header`}
                      >
                        <Typography>
                          <Typography
                            sx={{  fontSize: "18px", textAlign: "start" }}
                          >
                            <DoubleArrowIcon />
                            {faq.question}
                          </Typography>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography style={{ textAlign: "start" }}>
                          <Typography
                            style={{ color: "grey", fontSize: "16px" }}
                          >
                            {faq.answer}
                          </Typography>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};
