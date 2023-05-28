import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";

function Solutions() {
  const [features, setFeatures] = useState([]);
  const [openDescriptions, setOpenDescriptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://smartysoftware.in/api/method/professional.api.get_smarty_solutions"
        );
        const data = await response.json();
        setFeatures(data.message);
        setOpenDescriptions(new Array(data.message.length).fill(false));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  if (features.length === 0) {
    return <div>Loading...</div>;
  }

  const chunkedFeatures = chunkArray(features, 2);

  const toggleDescription = (index) => {
    const updatedDescriptions = [...openDescriptions];
    updatedDescriptions[index] = !updatedDescriptions[index];
    setOpenDescriptions(updatedDescriptions);
  };

  return (
    <section className="py-4 bg-light">
      <Container>
        {chunkedFeatures.map((chunk, index) => (
          <Row
            className="justify-content-center"
            key={index}
            style={{ width: "100%" }}
          >
            {chunk.map((feature, featureIndex) => (
              <Col lg={6} className="col-12" key={featureIndex}>
                <div className="d-flex features feature-primary pt-4 pb-4">
                  <div style={{ marginRight: "20px" }}>
                    <img
                      src={"https://smartysoftware.in/" + feature.image}
                      width="50"
                      height="50"
                      alt={feature.short_title}
                    />
                  </div>
                  <div className="flex-1">
                    <div
                      className="feature-header"
                      onClick={() => toggleDescription(index * 2 + featureIndex)}
                    >
                      <h4 className="title">
                        {feature.short_title}
                        <span className={`plus ${openDescriptions[index * 2 + featureIndex] ? "open" : ""}`}>
                          +
                        </span>
                      </h4>
                    </div>
                    <p
                      className={`text-muted para mb-0 ${openDescriptions[index * 2 + featureIndex] ? "open" : ""}`}
                      style={{ marginRight: "10px", color: "#00FF00" }}
                    >
                      {feature.descriptive_title}
                    </p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        ))}
      </Container>
      <style>
        {`
        .features {
          position: relative;
          cursor: pointer;
        }

        .plus {
          display: inline-block;
          width: 70%;
          height: 2px;
          background-color: #00CC00; // Dark green
          margin-left: 5px; // Add some distance between title and plus sign
          margin-top: 4px; // Add a gap after the end of the title text
          transition: background-color 0.3s ease-in-out;
        }

        .plus:hover {
          background-color: #008800; // Darker green on hover
        }

        .open::before,
        .open::after {
          display: none;
        }

        .feature-header {
          display: flex;
          align-items: center;
        }

        .feature-header h4 {
          margin-bottom: 0;
        }

        .text-muted.para {
          display: none;
        }

        .text-muted.para.open {
          display: block;
          margin-top: 10px;
        }
      `}
      </style>
    </section>
  );
}

// Function to split an array into chunks
function chunkArray(arr, size) {
  const chunkedArr = [];
  let index = 0;
  while (index < arr.length) {
    chunkedArr.push(arr.slice(index, index + size));
    index += size;
  }
  return chunkedArr;
}

export default Solutions;
