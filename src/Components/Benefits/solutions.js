import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";

function Solutions() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://smartysoftware.in/api/method/professional.api.get_smarty_solutions"
        );
        const data = await response.json();
        setFeatures(data.message);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  if (features.length === 0) {
    return null; // Removed loading indicator
  }

  return (
    <section className="bg-light section-margin">
      <Container fluid>
        <div className="section-gap"></div> {/* Gap before the component */}
        <div className="section-title-wrapper">
          <h2 className="section-title">Solutions We Offer</h2> {/* Added section title */}
        </div>
        <Row>
          {features.map((feature, index) => (
            <Col lg={4} md={4} sm={6} xs={12} key={index}>
              <div className="d-flex features feature-primary pt-4 pb-4">
                <div style={{ margin: "10px", marginLeft: "10px", marginRight: "10px" }}>
                  <img
                    src={"https://smartysoftware.in/" + feature.image}
                    width="60"
                    height="60"
                    alt={feature.short_title}
                  />
                </div>
                <div className="flex-1">
                  <div className="feature-header">
                    <h4 className="title">
                      {feature.short_title}
                    </h4>
                  </div>
                  <p className="text-muted para mb-0" style={{ marginRight: "10px", color: "#00FF00" }}>
                    {feature.descriptive_title}
                  </p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <style>
        {`
        .features {
          position: relative;
          cursor: pointer;
        }

        .feature-header {
          display: flex;
          align-items: center;
        }

        .feature-header h4 {
          margin-bottom: 0;
        }

        .text-muted.para {
          margin-top: 10px;
        }

        .section-title-wrapper {
          margin: 40px 0; /* Add margin to the wrapper div */
        }

        .section-title {
          text-align: center;
          font-size: 28px;
          font-weight: bold;
        }

        .section-margin {
          margin-top: 60px;
          margin-bottom: 60px;
        }

        .section-gap {
          height: 40px; /* Adjust the gap height as needed */
        }
      `}
      </style>
    </section>
  );
}

export default Solutions;
