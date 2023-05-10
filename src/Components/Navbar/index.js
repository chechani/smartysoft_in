import { Button } from '@mui/material';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';


const Header = () => {
 const navigate = useNavigate();

  
const handleDemo =()=>{
navigate("/happycustomers")
}

  const handleBenefits = () => {
    navigate('/benefits');
  }
  const handleFeature = () => {
    navigate('/features');
  }

 const handlePricing = () =>
 {
  navigate("/pricing")
 }
 const handleClick = () =>
 {
  navigate("/registration")
 }

 const handleScheduleDemo =()=>{
  navigate("/scheduledemo")
 }

 const HandleLogo =()=>{
  navigate("/")
 }

  return (
    <Navbar expand="lg" style={{position:"fixed",top:0,width:"100%",backgroundColor:"	whitesmoke"}}>
    <Container fluid>
      <Navbar.Brand><img src='/Excel2tally.png' alt='logo' style={{fontWeight:"bold",marginLeft:"20px",width:"120px",height:"60px",borderRadius:"10px"}} onClick={HandleLogo}/></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="ms-auto my-2 my-lg-0"
          style={{ maxHeight: '280px',fontFamily:"Nirmala UI",fontSize:"17px",fontWeight:"bold"}}
          navbarScroll
        >
          <Nav.Link onClick={handleFeature} style={{paddingRight:"30px",color:"black",fontFamily:"lato"}}>Features</Nav.Link>
          <Nav.Link onClick={handleDemo} style={{paddingRight:"30px",color:"black",fontFamily:"lato"}}>Why Choose us</Nav.Link>
          <Nav.Link onClick={handleBenefits} style={{paddingRight:"30px",color:"black",fontFamily:"lato"}}>Benefits</Nav.Link>
          <Nav.Link onClick={handlePricing} style={{paddingRight:"30px",color:"black",fontFamily:"lato"}}>Pricing</Nav.Link>
        </Nav>
         <Nav>
          <Button variant='contained' sx={{mr:2,mt:1,fontFamily:"lato",fontWeight:"bold"}} onClick={handleScheduleDemo}>Schedule Demo</Button>
        </Nav>
        <Nav>
          <Button variant='contained' color="success" sx={{mr:2,mt:1,fontFamily:"lato",fontWeight:"bold"}} onClick={handleClick}>Download</Button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
  );
}

export default Header;