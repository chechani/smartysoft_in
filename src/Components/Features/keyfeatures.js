import React from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import './keyfeatures.css';

const KeyFeatures = () => {
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
      desc: "Marketing Automation Solution",
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
    },
    {
      id: 5,
      image: {
        url: "http://smartysoft.in/company_images/mautic.png",
        width: "120px",
        height: "35px",
        marginTop: "20px",
        marginBottom: "15px",
      },
      desc: "Customer Relationship Management Solution",
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
                  <CardBody className="p-4">
                    <p className="text-muted mb-0 description">{feature.desc}</p>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default KeyFeatures;
