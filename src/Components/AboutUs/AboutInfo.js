import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";

import team1 from './images/CA B.C  Chechani.jpeg'
import team2 from './images/Gopal Chechani.jpeg';
import team3 from './images/mohit_chechani.jpeg';
import team4 from './images/Shreya.jfif';
// import team5 from './images/monika.jpeg';
import team6 from './images/Ankit Pandey.jpeg';
import team7 from './images/Anubhav jain.jpeg';
import team8 from './images/Nitesh Kumar.jpeg';
import team9 from './images/Sunil Verma.jpeg';
import team10 from './images/Diksha jain.jpeg';


const AbountInfo = () => {
  useEffect(() => {
    const shoppingBtn = document.querySelector(".shoppingbtn");
    if (shoppingBtn) {
      shoppingBtn.classList.add("btn-primary");
    }
    window.addEventListener("scroll", scrollNavigation, true);

    return () => {
      window.removeEventListener("scroll", scrollNavigation, true);
    };
  }, []);

  const scrollNavigation = () => {
    const doc = document.documentElement;
    const navBar = document.getElementById("topnav");
    const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (navBar !== null) {
      if (top > 80) {
        navBar.classList.add("nav-sticky");
      } else {
        navBar.classList.remove("nav-sticky");
        const shoppingBtn = document.querySelector(".shoppingbtn");
        if (shoppingBtn !== null) {
          shoppingBtn.classList.add("btn-primary");
          shoppingBtn.classList.remove("btn-light");
        }
        const settingBtn = document.querySelector(".settingbtn");
        if (settingBtn !== null) {
          settingBtn.classList.add("btn-soft-primary");
        }
      }
    }
  };

  const candidates2 = [
    { id: 1, image: team2, name: "Gopal Chechani", designation: "Co-founder" },
    { id: 2, image: team3, name: "Mohit Chechani", designation: "Co-founder" },
    { id: 3, image: team4, name: "Shreya Chechani", designation: "Developer" },
    { id: 3, name: "Monika Chechani", designation: "HR" },
    { id: 3, image: team6, name: "Ankit Pandey", designation: "Developer" },
    { id: 4, image: team7, name: "Anubhav Jain", designation: "Developer" },
    { id: 5, image: team8, name: "Nitesh Kumar", designation: "Developer" },
    { id: 6, image: team9, name: "Sunil Verma", designation: "Marketing Executive" },
    { id: 7, image: team10, name: "Diksha jain", designation: "Marketing Executive" },
    // Add other candidates here...
  ];
  const candidates = { id: 1, image: team1, name: "CA B.C Chechani", designation: "Foundedr and CEO " };

  return (
    <React.Fragment>
      {/* breadcrumb */}
      <div className="position-relative">
        <div className="shape overflow-hidden text-white">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      <section className="section" style={{marginBottom:"15px"}}>
        <Container>
          <Row>
          <Col className="mt-4 pt-2" style={{display:"flex",justifyContent:"center"}}>
                  <div className="d-flex align-items-center">
                    <img src={candidates.image} className="avatar avatar-medium rounded-circle img-thumbnail" alt="Landrick" style={{width:'150px',height:"150px"}} />
                    <div className="content ms-3">
                      <h5><p className="text-dark" style={{fontSize:"18px"}}>{candidates.name}</p></h5>
                      <small className="position text-muted">{candidates.designation}</small>
                    </div>
                  </div>
                </Col>
          </Row>
          <Row>
            {
              candidates2.map((candidate, key) => (
                <Col lg={4} md={6} xs={12} key={key} className="mt-4 pt-2">
                  <div className="d-flex align-items-center">
                    <img src={candidate.image} className="avatar avatar-medium rounded-circle img-thumbnail" alt="Landrick" style={{width:'100px',height:"100px"}} />
                    <div className="content ms-3">
                      <h5><p className="text-dark" style={{fontSize:"18px"}}>{candidate.name}</p></h5>
                      <small className="position text-muted">{candidate.designation}</small>
                    </div>
                  </div>
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}

export default AbountInfo;