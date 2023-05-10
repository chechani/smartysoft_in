import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "reactstrap";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Card } from "@mui/material";
import WhatsAppButton from "../WhatsAppButton";

const contactDetail = "contactus.jpeg"
const url = "https://goo.gl/maps/xzu4xNBYd2XAR6wU7";

class PageContactDetail extends Component {
  constructor(props) {
    super(props);
    this.sendMail.bind(this);
    this.callNumber.bind(this);
  }

  componentDidMount() {
    // document.body.classList = "";
    // document.querySelector(".shoppingbtn").classList.add("btn-primary");
    // window.addEventListener("scroll", this.scrollNavigation, true);
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    const navBar = document.getElementById("topnav");
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (navBar != null) {
      if (top > 80) {
        navBar.classList.add("nav-sticky");
      } else {
        navBar.classList.remove("nav-sticky");
      }
    }
  };

  sendMail() {
    window.location.href = "mailto:contact@example.com";
  }

  callNumber() {
    window.location.href = "tel:+152534-468-854";
  }

  render() {
    return (
      <>
      <WhatsAppButton/>
      <Card sx={{mt:7}}>
        <section
          className="vh-100 d-flex align-items-center"
          style={{ background: `url(${contactDetail}) center center`, marginBottom: "30px" }}
        >
          <div className="bg-overlay bg-overlay-white"></div>
          <Container>
            <Row className="align-items-center">
              <Col lg={{ size: 6, offset: 6 }} md={{ size: 7, offset: 5 }}>
                <div className="title-heading mt-5 pt-4">
                  <h1 className="heading">Let's talk about your portfolio</h1>
                  <p className="text-dark">
                    Start working with{" "}
                    <span className="text-primary fw-bold">
                      AccXchange
                    </span>{" "}
                    that can provide everything you need to generate awareness,
                    drive traffic, connect.
                  </p>
                  <div className="d-flex contact-detail align-items-center mt-3">
                    <div className="icon">
                      <EmailIcon sx={{ mr: 4, color: "darkred" }} />
                    </div>
                    <div className="flex-1 content">
                      <h5 className="title fw-bold mb-0">Email</h5>
                      <Link
                        to="#"
                        onClick={this.sendMail}
                        className="text-primary"
                      >
                        exceltotally@accxchange.in
                      </Link>
                    </div>
                  </div>

                  <div className="d-flex contact-detail align-items-center mt-3">
                    <div className="icon">
                      <LocalPhoneIcon sx={{ mr: 4, color: "darkBlue" }} />
                    </div>
                    <div className="flex-1 content">
                      <h5 className="title fw-bold mb-0">Phone</h5>
                      <Link
                        to="#"
                        onClick={this.callNumber}
                        className="text-primary"
                      >
                        +91 80058 34930
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex contact-detail align-items-center mt-3">
                    <div className="icon" style={{ width: "50%", display: "flex", alignItems: "center" }}>
                      <LocationOnIcon sx={{ mr: 4, color: "green" }} />
                      <h5 className="title fw-bold mb-0">Location</h5>
                    </div>

                  </div>
                  <div className="d-flex contact-detail align-items-center mt-3" style={{ display: "flex" }}>
                    <div className="flex-1 content" style={{ width: "50%" }}>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.4086601329345!2d74.64154201501272!3d25.357616883821898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968e9fbfc26f607%3A0x502e7c236f5d75a9!2sAccXchange%20Transactions%20Worldwide%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1682331986967!5m2!1sen!2sin"
                        width="350"
                        height="190"
                        frameborder="0"
                        style={{ border: "0",marginBottom:"30px" }}
                        allowfullscreen=""
                        aria-hidden="false"
                        tabindex="0"
                      ></iframe>
                    </div>
                  </div>
                  ``

                </div>
              </Col>
            </Row>
          </Container>
        </section>
        </Card>
      </>
    );
  }
}
export default PageContactDetail;