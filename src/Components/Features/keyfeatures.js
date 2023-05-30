import React, { useState } from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import './keyfeatures.css';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { AiOutlinePlayCircle } from "react-icons/ai";

const KeyFeatures = () => {
  const [open, setOpen] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState('');

  const handleClickOpen = (videoUrl) => {
    setSelectedVideoUrl(videoUrl);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedVideoUrl('');
  };

  const features = [
    {
      id: 1,
      image: {
        url: "http://smartysoft.in/company_images/erpnext.png",
        width: "120px",
        height: "30px",
        marginTop: "20px",
        marginBottom: "15px",
      },
      desc: "Enterprise Resource Planning (ERP) Solution",
      videoUrl: "https://www.youtube.com/embed/RSe1GFl3e2Q",
    },
    {
      id: 2,
      image: {
        url: "http://smartysoft.in/company_images/mautic.png",
        width: "120px",
        height: "30px",
        marginTop: "20px",
        marginBottom: "15px",
      },
      desc: "Marketing Automation - Manage Campaigns and Interaction",
      videoUrl: "https://www.youtube.com/embed/ZiWNBF-UuPw",
    },
    {
      id: 3,
      image: {
        url: "http://smartysoft.in/company_images/nextcloudlogo.png",
        width: "120px",
        height: "30px",
        marginTop: "20px",
        marginBottom: "15px",
      },
      desc: "File Management and Collaboration Solution",
      videoUrl: "https://www.youtube.com/embed/nxX_Z6BKySw",
    },
    {
      id: 4,
      image: {
        url: "http://smartysoft.in/company_images/n8n.png",
        width: "120px",
        height: "35px",
        marginTop: "20px",
        marginBottom: "15px",
      },
      desc: "Integration Solution - Connect any Software.",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_HERE",
    },
    {
      id: 5,
      image: {
        url: "./company_images/crm.png",
        width: "120px",
        height: "35px",
        marginTop: "20px",
        marginBottom: "15px",
      },
      desc: "Customer Relationship Management Solution",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_HERE",
    },
    {
      id: 6,
      image: {
        url: "http://smartysoft.in/company_images/botpress.png",
        width: "120px",
        height: "35px",
        marginTop: "20px",
        marginBottom: "15px",
      },
      desc: "Design, build, and deploy AI-powered Chatbots",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_HERE",
    },
  ];

  return (
    <React.Fragment>
      <section className="bg-light">
        <Container fluid className="px-1">
          <Row className="g-1 align-items-center features">
            {features.map((feature) => (
              <Col key={feature.id} xl={2} lg={4} md={6} xs={12}>
                <Card className="features feature-primary text-center rounded-0 border-0">
                  <div
                    className="image-container"
                    style={{
                      marginTop: feature.image.marginTop,
                      marginBottom: feature.image.marginBottom,
                    }}
                  >
                    <img
                      src={feature.image.url}
                      width={feature.image.width}
                      height={feature.image.height}
                      alt={feature.desc}
                      className="product-image"
                    />
                  </div>
                  <CardBody className="p-2">
                    <p className="text-muted mb-0 description">{feature.desc}</p>
                    <div className="button-container">
                    <a onClick={() => handleClickOpen(feature.videoUrl)} className="button-watch-video">
                      <AiOutlinePlayCircle className="button-icon" />
                      Video
                    </a>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Video</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <iframe width="550" height="280" src={selectedVideoUrl} title="Video Player" frameBorder="0" allowFullScreen></iframe>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus size="small" variant="contained" sx={{mr:1}}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default KeyFeatures;
