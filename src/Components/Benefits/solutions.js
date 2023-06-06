import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { AiOutlineLink, AiOutlinePlayCircle, AiOutlineWhatsApp } from "react-icons/ai";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Solutions({ segment, cardCount }) {
  const [features, setFeatures] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [open, setOpen] = useState(false);
  const [headingData, setHeadingData] = useState("");
  const [whatsappMsg, setWhatsappMsg] = useState("");
  const [showAll, setShowAll] = useState(false);

  const handleClickOpen = (shortTitle) => {
    setHeadingData(shortTitle);
    setWhatsappMsg(shortTitle);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://smartysoftware.in/api/method/professional.web.get_solutions?segment=${encodeURIComponent(segment)}`
        );
        const data = await response.json();
        setFeatures(data.message);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [segment]);

  const handleCardHover = (index) => {
    setHoveredIndex(index);
  };

  const handleExploreMore = () => {
    setShowAll(true);
  };

  const visibleFeatures = showAll ? features : features.slice(0, cardCount);

  return (
    <section className="bg-light" style={{ paddingBottom: "10px" }}>
      <Container fluid>
        <div className="section-gap"></div>
        <div className="section-title-wrapper">
          <h2 className="section-title" style={{ marginTop: "-28px", fontSize: "32px", fontWeight: 700 }}>
            Solutions We Offer
          </h2>
        </div>
        <Row>
          {visibleFeatures.map((feature, index) => (
            <Col lg={3} md={3} sm={6} key={index}>
              <div
                className={`d-flex flex-column feature-primary ${hoveredIndex === index ? "hovered" : ""}`}
                style={{
                  marginBottom: "20px",
                  marginTop: "10px",
                  marginLeft: "-5px",
                  marginRight: "-5px",
                  flex: "1",
                }}
                onMouseEnter={() => handleCardHover(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="d-flex align-items-center justify-content-center">
                  <img
                    src={"https://smartysoftware.in/" + feature.image}
                    width="60"
                    height="60"
                    alt={feature.short_title}
                    style={{ marginBottom: "10px" }}
                  />
                </div>
                <h4
                  className={`title text-center ${hoveredIndex === index ? "hovered" : ""}`}
                  style={{
                    marginTop: "10px",
                    color: "#333",
                    transition: "color 0.3s",
                  }}
                >
                  {feature.short_title}
                </h4>
                <p
                  className="text-muted para mb-0"
                  style={{
                    color: hoveredIndex === index ? "#ffffff" : "#00FF00",
                    textAlign: "center",
                    transition: "color 0.3s",
                    whiteSpace: "normal",
                  }}
                >
                  {feature.descriptive_title}
                </p>
                <div className="button-container d-flex justify-content-center">
                  <a href={`https://wa.me/7849945640?text=${encodeURIComponent(feature.short_title)}`} className="button-whatsapp">
                    <AiOutlineWhatsApp className="button-icon" />
                    <span className="button-label">WhatsApp</span>
                  </a>
                  <a onClick={() => handleClickOpen(feature.short_title)} className="button-watch-video">
                    <AiOutlinePlayCircle className="button-icon" />
                    <span className="button-label">Video</span>
                  </a>
                  <a href={feature.more_link} className="button-more">
                    <AiOutlineLink className="button-icon" />
                    <span className="button-label">More</span>
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        {features.length > cardCount && !showAll && (
          <div className="explore-more-container">
            <Button className="explore-more-button" onClick={handleExploreMore}>
              Explore More Solutions
            </Button>
          </div>
        )}
      </Container>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle id="alert-dialog-title">{headingData}</DialogTitle>
        <DialogContent>
          <div style={{ position: "relative", paddingTop: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/RSe1GFl3e2Q"
              title="Video Player"
              frameBorder="0"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            />
          </div>
        </DialogContent>
        <DialogActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button variant="outlined" color="success">
            <a
              href={`https://wa.me/7849945640?text=${encodeURIComponent(whatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", display: "flex", alignItems: "center" }}
            >
              <WhatsAppIcon sx={{ fontSize: "17px", mr: 1 }} />
              WhatsApp
            </a>
          </Button>
          <Button onClick={handleClose} color="error" size="small" variant="outlined" sx={{ mr: 2 }}>
            <CloseIcon sx={{ fontSize: "17px", mr: 1 }} />
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <style>
        {`
        .feature-primary {
          cursor: pointer;
          transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
          perspective: 1000px;
          margin-bottom: 20px;
          margin-top: 10px;
          padding: 20px;
          background-color: #f2f2f2;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 2px solid #ccc;
        }
        
        .feature-primary:hover {
          border-color: #1e90ff;
          transform: translateY(-5px);
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }
        
        .hovered {
          transform: translateY(-5px);
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }
        
        .title {
          margin-bottom: 0;
        }
        
        .text-muted.para {
          margin-top: 10px;
        }
        
        .section-title-wrapper {
          margin: 40px 0;
        }
        
        .section-title {
          text-align: center;
          font-size: 28px;
          font-weight: bold;
        }
        
        .section-gap {
          height: 20px;
        }
        
        .row-gap {
          margin-top: 20px;
        }
        
        .button-container {
          margin-top: 10px;
        }
        
        .button-container a {
          display: inline-flex;
          align-items: center;
          padding: 4px 8px;
          margin-right: 10px;
          font-weight: normal;
          font-size: 14px;
          text-decoration: none;
          color: #333;
          background-color: #f5f5f5;
          border: 1px solid #ccc;
          border-radius: 4px;
          transition: background-color 0.3s;
        }
        
        .button-container a:hover {
          background-color: #e5e5e5;
        }
        
        .explore-more-container {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }
        
        .explore-more-button {
          background-color: #000;
          color: #fff;
        }
        
        .explore-more-button:hover {
          background-color: #1e90ff;
          color: #fff;
        }
        
      `}
      </style>
    </section>
  );
}

export default Solutions;
