import React from "react";
import Box from "@mui/material/Box";
import { Card, Typography } from "@mui/material";
import WhatsAppButton from "../WhatsAppButton";

function Aboutus() {
  return (
   
    <Box className="WhyAccXchange-Container" sx={{mt:15,ml:5,mr:5,mb:10}}>
    <WhatsAppButton/>
    <Card sx={{pt:5,pl:3,pb:2,pr:3}}>
  <Typography sx={{fontFamily:"lato",fontSize:"30px",fontWeight:"bold",mb:3}}>
  Digital Data Exchange 
  </Typography>
  <Typography sx={{fontFamily:"lato",fontSize: "25px",mb:2}}>
  Empowers Businesses for Digital India
  </Typography>
  <Box>
    <Typography sx={{fontFamily:"lato",fontSize:"18px"}}> 
    AccXchange Transactions Worldwide Pvt Ltd, a Bhilwara-based software start-up, has launched AccXchange. This Digital Data Exchange platform empowers businesses to create a network of trading partners, such as suppliers and buyers, for the real-time digital exchange of business transactions and data. The start-up offers ready-made electronic data interchange solutions for popular accounting applications like Tally and Busy, used by 80% of Indian SMEs, and plans to expand its offerings continually.
    </Typography>
    <Typography sx={{mt:2,fontFamily:"lato",fontSize:"18px"}}>
    The AccXchange platform features a middleware client that connects to a network of companies and users through private IP, ensuring secure computer-to-computer communication. This allows software developers and businesses to swiftly integrate their ERP solutions with AccXchange, connected to most major Indian accounting brands.
    </Typography>
    <Typography sx={{mt:2,fontFamily:"lato",fontSize:"18px"}}>
    AccXchange ensures real-time digital transmission of transactions between buyers and suppliers, enabling receivers to review and post transactions in their books of accounts. For instance, a sales invoice sent to a buyer can be reviewed and posted as a purchase invoice.
For GST compliance, accurate and timely invoice matching between suppliers and buyers is crucial. AccXchange's e-Invoicing solution streamlines invoice matching and facilitates one-time stock item mapping for every supplier, ensuring 100% invoice matching and automatic synchronisation with GSTN
    </Typography>
    <Typography sx={{mt:2,fontFamily:"lato",fontSize:"18px"}}>
    Now sending and receiving e-invoices is free amongst five connected suppliers or buyers to have a life experience. This technology democratises solutions typically reserved for Fortune 500 and large corporations, making them accessible to small businesses. With over fifty million SMEs in India, AccXchange aims to revolutionise the market through collaborative accounting as more SMEs join the network and reap its benefits.
    </Typography>

  </Box>
  </Card>
</Box>


  );
}

 export default Aboutus;