import React from "react";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { Card, CardContent, Grid, Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const Data = () => {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          fontSize: "32px",
          fontWeight:"bold",
          p:2,
          mt:5,
          fontFamily:"lato",         
        
        }}
      >
        Frequently Asked Questions
      </Box>

      {/* //////////// */}
      <Box sx={{width:"95%", textAlign:"center",pb:2,ml:{xs:1,sm:5} ,position:"relative",marginTop:"50px"}}>
        <Card variant="outlined">
          <CardContent>
            <Grid container spacing={0}>
            <Grid item xs={12} md={6} style={{ height: "350px",marginTop:"40px" }}>
  <img src="https://smartysoftware.in/en/img/features/faq-qa.png" alt="mmm" style={{ width: "auto", height: "100%"}} />
</Grid>

              <Grid item xs={12} md={6}>
                <Box>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>
                        <Typography sx={{fontFamily:"lato",fontWeight:"bold",fontSize:"20px",textAlign:"start"}}>
                          <DoubleArrowIcon />
                          Can I schedule or automate the data import process from Excel to Tally
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        style={{ textAlign: "start" }}
                      >
                        <Typography style={{ color: "grey",fontSize:"18px",fontFamily:"lato" }}>
                        Yes, Once Excel Sheet is uploaded after maping to our standard templates, it will upload all rows automatically. 
                        It will mark imported rows as "Y" and Failed as "N". 
                        </Typography>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion sx={{mt:2}}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>
                        <Typography sx={{fontFamily:"lato",fontWeight:"bold",fontSize:"20px",textAlign:"start"}}>
                          <DoubleArrowIcon />
                          What types of data can I import from Excel to Tally?
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        style={{textAlign: "start" }}
                      >
                        <Typography style={{ color: "grey",fontSize:"18px",fontFamily:"lato" }}>
                        It can import any voucer type and you need to to design templates
                        as per formats of our standrad templates. Our assistance may requires and we also undertake
                        separate Template Development Services from your formats at a cost of Rs. 1000 per Tempalte
                        </Typography>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion sx={{mt:2}}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>
                        <Typography sx={{fontFamily:"lato",fontWeight:"bold",fontSize:"20px",textAlign:"start"}}>
                          <DoubleArrowIcon />
                          How do I map fields between Excel and Tally for a data import process?
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        style={{ textAlign: "start" }}
                      >
                        <Typography style={{ color: "grey",fontSize:"18px",fontFamily:"lato" }}>
                        Its a simple process for existing Excel worker. They just need to map your sheet coulumns to our sheet.
                        Information not conatined in your sheet and requires to import data then default values are marked.
                        </Typography>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion sx={{mt:2}}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>
                        <Typography sx={{fontFamily:"lato",fontWeight:"bold",fontSize:"20px",textAlign:"start"}}>
                          <DoubleArrowIcon />
                          What are the best practices for formatting Excel data to import?
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        style={{ textAlign: "start" }}
                      >
                        <Typography style={{ color: "grey",fontSize:"18px",fontFamily:"lato" }}>
                        Any Excel worker can map very easily columns of different sheets . We also provide
                        training to do this when you buy it. 
                          </Typography>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion sx={{mt:2}}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>
                        <Typography sx={{fontFamily:"lato",fontWeight:"bold",fontSize:"20px",textAlign:"start"}}>
                          <DoubleArrowIcon />
                          How do I handle errors in my Excel data during the import process?
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        style={{textAlign: "start" }}
                      >
                        <Typography style={{ color: "grey",fontSize:"18px",fontFamily:"lato" }}>
                        Transaction having errors are marked as No in Excel sheet so one can easily find
                        those transactions and can fix easily . We also help and provide assistance to find out 
                        issue and resove it. 
                        </Typography>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
               </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};