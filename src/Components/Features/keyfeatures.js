import React, { useState, useEffect } from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import './keyfeatures.css';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CloseIcon from '@mui/icons-material/Close';

const KeyFeatures = () => {
  const [open, setOpen] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState('');
  const [selectedFeature, setSelectedFeature] = useState('');
  const [WhatsappMsg, setWhatsappMsg] = useState('');
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch('https://smartysoftware.in/api/method/professional.web.get_products?segment=Smarty%20Home')
      .then(response => response.json())
      .then(data => {
        // Extract the features array from the message object
        const featuresData = data.message;
        // Map the fields properly

     
        const mappedFeatures = featuresData.map(item => ({
          id: item.order,
          image: {
            url: "https://smartysoftware.in/" +item.logo,
            width: '120px',
            height: '30px',
            marginTop: '20px',
            marginBottom: '15px',
          },
          desc: item.description,
          videoUrl: item.video,
          heading: item.product_name
        }));
        setFeatures(mappedFeatures);
      })
      .catch(error => {
        console.error('Error fetching API:', error);
      });
  }, []);

  const handleClickOpen = (videoUrl, heading) => {
    setSelectedVideoUrl(videoUrl);
    setSelectedFeature(heading);
    setWhatsappMsg(heading);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedVideoUrl('');
    setSelectedFeature('');
  };

  return (
    <React.Fragment>
      <section className="bg-light">
        <Container fluid className="px-1">
          <Row className="g-1 align-items-center features">
            {features.map(feature => (
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
                      <a onClick={() => handleClickOpen(feature.videoUrl, feature.heading)} className="button-watch-video">
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
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle id="alert-dialog-title">{selectedFeature}</DialogTitle>
        <DialogContent>
          <div style={{ position: 'relative', paddingTop: '56.25%' }}>
            <iframe
              src={selectedVideoUrl}
              title="Video Player"
              frameBorder="0"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />
          </div>
        </DialogContent>
        <DialogActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="outlined" color="success">
            <a
              href={`https://wa.me/7849945640?text=${encodeURIComponent(WhatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
            >
              <WhatsAppIcon sx={{ fontSize: '17px', mr: 1 }} />
              WhatsApp
            </a>
          </Button>
          <Button onClick={handleClose} color="error" size="small" variant="outlined" sx={{ mr: 2 }}>
            <CloseIcon sx={{ fontSize: '17px', mr: 1 }} />
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default KeyFeatures;
