import React from 'react';
import { Box, Card, Typography } from '@mui/material';
import WhatsAppButton from '../WhatsAppButton';
const PrivacyPolicy = () => {
  return (
    <Box sx={{mt:15,ml:5,mb:10,mr:5}}>
    <WhatsAppButton/>
    <Card sx={{p:3}}>
      <Typography variant='h3'sx={{mb:2,fontWeight:"bold"}}>Privacy Policy</Typography>
      <Typography sx={{fontSize:"20px"}}>
        At Smarty Software Pvt Ltd, we protect the privacy and security of our
        users' personal information. This Privacy Policy outlines the types of
        personal information we collect, how we use that information, and the
        steps we take to safeguard it.
      </Typography>
      <Box sx={{mt:3}}>
      <Typography variant='h4' sx={{mb:2}}>Information We Collect</Typography>
      <Typography sx={{fontSize:"20px"}}>
        When you use our website or any of our services, we may collect certain
        information about you, including:
      </Typography>
      <ul>
        <Typography sx={{fontSize:"20px"}}>
          Personal information, such as your name, email address, phone number,
          and billing information.
        </Typography>
        <Typography sx={{fontSize:"20px"}}>
          Usage information, such as your IP address, browser type, device
          type, operating system, and other technical information about how you
          access and use our website or services.
        </Typography>
        <Typography sx={{fontSize:"20px"}}>
          Information you provide us voluntarily, such as feedback, support
          inquiries, or other communications.
        </Typography>
      </ul>
      </Box>

      <Typography sx={{ fontSize:"30px",mt:2,mb:1}}>How We Use Your Information</Typography>
      <Typography sx={{fontSize:"22px"}}>
        We use the information we collect for a variety of purposes, including:
      </Typography>
      <ul>
        <Typography sx={{fontSize:"20px"}}>
          To provide and improve our technical support, billing, and customer
          service services.
        </Typography>
        <Typography sx={{fontSize:"20px"}}>
          To analyze and understand how users interact with our website and
          services, and to improve our website and services based on that
          analysis.
        </Typography>
        <Typography sx={{fontSize:"20px"}}>
          To communicate with you about our services, promotions, and other
          relevant information.
        </Typography>
        <Typography sx={{fontSize:"20px"}}>
          To enforce our terms of service, prevent fraud or other illegal
          activities, and protect our users' and our business's safety and
          security.
        </Typography>
      </ul>

      <Typography sx={{fontSize:"30px",mt:2,mb:1}}>How We Share Your Information</Typography>
      <Typography sx={{fontSize:"20px"}}>
        We may share your information with third-party service providers who
        help us provide and improve our services, such as payment processors,
        analytics providers, and marketing partners. We may also share your
        information as required by law or to protect our legal rights.
      </Typography>
      <Typography sx={{fontSize:"20px"}}>
        We do not sell, rent, or trade your personal information to third
        parties for their marketing purposes.
      </Typography>

      <Typography sx={{fontSize:"30px",mt:2,mb:1}}>Data Retention and Security</Typography>
      <Typography sx={{fontSize:"20px"}}>
        We retain your personal information only as long as necessary to fulfil
        the purposes outlined in this Privacy Policy unless a longer retention
        period is required by law.
      </Typography>
      <Typography sx={{fontSize:"20px"}}>
        We take reasonable measures to protect your personal information’s
        security and prevent unauthorized access, disclosure, or modification.
        However, no method of transmission over the Internet or electronic
        storage is completely secure, and we cannot guarantee the absolute
        security of your information.
      </Typography>

      <Typography sx={{fontSize:"30px",mt:2,mb:1}}>Your Rights</Typography>
      <Typography sx={{fontSize:"20px"}}>
        You have the right to access, modify, or delete the personal information
        that we have collected. You may also have the right to object to or
        restrict certain uses of your information or to request that we provide
        a copy of your information to you or to another service provider.
      </Typography>
      <Typography sx={{fontSize:"20px"}}>
        If you have any questions or concerns about this Privacy Policy or wish
        to exercise your rights, please get in touch with us using the contact
        information
    provided below.
  </Typography>

  <Typography sx={{fontSize:"20px"}}>Updates to This Privacy Policy</Typography>
  <Typography sx={{fontSize:"20px"}}>
    We may update this Privacy Policy from time to time. If we make material
    changes to the policy, we will notify you by posting a notice on our
    website or by other means as required by law.
  </Typography>

  <Typography sx={{fontSize:"30px",fontWeight:"bold",mt:2,pb:2}}>Contact Us</Typography>
  <Typography sx={{fontSize:"20px"}}>
    If you have any questions or concerns about our Privacy Policy, please
    get in touch with us at:
  </Typography>
  <address style={{fontSize:"15px",fontWeight:"bold"}}>
    Smarty Software Pvt Ltd 123 <br />
    Sanganer, Bhilwara, Rajasthan <br />
    India, Pin - 311011 <br />
    <a href="mailto:privacy@smartysoftware.com">
      privacy@smartysoftware.com
    </a>
  </address>
  <Typography sx={{fontSize:"20px"}}>Thank you for using our services.</Typography>
  </Card>
</Box>
);
};

export default PrivacyPolicy;