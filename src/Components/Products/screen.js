import React, { Component } from "react";
import { Col, Container, NavItem, NavLink, Row, TabContent, TabPane } from "reactstrap";
import classnames from "classnames";

export default class TaskManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1",
    };
    this.toggleTab = this.toggleTab.bind(this);
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="mt-5"></div> {/* Add top margin here */}
        <Container className="mt-100 mt-60">
          <Row className="justify-content-center">
            <Col xs={12}>
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title mb-4" style={{ fontSize: "32px", fontWeight: "bold" }}>
                  Discover what makes{" "}
                  <span className="text-primary">Task Manager</span> great.
                </h4>
                <p className="text-muted para-desc mb-0 mx-auto" style={{ fontSize: "18px" }}>
                  Start working with{" "}
                  <span className="text-primary fw-bold">Landrick</span> that
                  can provide everything you need to generate awareness, drive
                  traffic, connect.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={5} className="mt-4 pt-2">
              <ul
                className="nav nav-pills nav-justified flex-column mb-0"
                id="pills-tab"
                role="tablist"
              >
                <NavItem
                  className={classnames("bg-light rounded-md", {
                    active: this.state.activeTab === "1",
                  })}
                  style={{
                    marginBottom: "10px",
                    backgroundColor: this.state.activeTab === "1" ? "#343a40" : "#f5f8fa",
                  }}
                >
                  <NavLink
                    to="#"
                    className="rounded-md"
                    onClick={() => {
                      this.toggleTab("1");
                    }}
                  >
                    <div className="p-3 text-start">
                      <h5
                        className="title"
                        style={{
                          fontSize: "24px",
                          fontWeight: "bold",
                          color: this.state.activeTab === "1" ? "#009900" : "#343a40",
                        }}
                      >
                        Management Dashboard
                      </h5>
                      <p className="text-muted tab-para mb-0" style={{ fontSize: "16px" }}>
                        Dummy text is text that is used in the publishing industry or by web designers.
                      </p>
                    </div>
                  </NavLink>
                </NavItem>

                <NavItem
                  className={classnames("bg-light rounded-md mt-4", {
                    active: this.state.activeTab === "2",
                  })}
                  style={{
                    marginBottom: "10px",
                    backgroundColor: this.state.activeTab === "2" ? "#343a40" : "#f5f8fa",
                  }}
                >
                  <NavLink
                    to="#"
                    className="rounded-md"
                    onClick={() => {
                      this.toggleTab("2");
                    }}
                  >
                    <div className="p-3 text-start">
                      <h5
                        className="title"
                        style={{
                          fontSize: "24px",
                          fontWeight: "bold",
                          color: this.state.activeTab === "2" ? "#009900" : "#343a40",
                        }}
                      >
                        Management Timeline
                      </h5>
                      <p className="text-muted tab-para mb-0" style={{ fontSize: "16px" }}>
                        Dummy text is text that is used in the publishing industry or by web designers.
                      </p>
                    </div>
                  </NavLink>
                </NavItem>

                <NavItem
                  className={classnames("bg-light rounded-md mt-4", {
                    active: this.state.activeTab === "3",
                  })}
                  style={{
                    marginBottom: "10px",
                    backgroundColor: this.state.activeTab === "3" ? "#343a40" : "#f5f8fa",
                  }}
                >
                  <NavLink
                    to="#"
                    className="rounded-md"
                    onClick={() => {
                      this.toggleTab("3");
                    }}
                  >
                    <div className="p-3 text-start">
                      <h5
                        className="title"
                        style={{
                          fontSize: "24px",
                          fontWeight: "bold",
                          color: this.state.activeTab === "3" ? "#009900" : "#343a40",
                        }}
                      >
                        Payment Management
                      </h5>
                      <p className="text-muted tab-para mb-0" style={{ fontSize: "16px" }}>
                        Dummy text is text that is used in the publishing industry or by web designers.
                      </p>
                    </div>
                  </NavLink>
                </NavItem>

                <NavItem
                  className={classnames("bg-light rounded-md mt-4", {
                    active: this.state.activeTab === "4",
                  })}
                  style={{
                    marginBottom: "10px",
                    backgroundColor: this.state.activeTab === "4" ? "#343a40" : "#f5f8fa",
                  }}
                >
                  <NavLink
                    to="#"
                    className="rounded-md"
                    onClick={() => {
                      this.toggleTab("4");
                    }}
                  >
                    <div className="p-3 text-start">
                      <h5
                        className="title"
                        style={{
                          fontSize: "24px",
                          fontWeight: "bold",
                          color: this.state.activeTab === "4" ? "#009900" : "#343a40",
                        }}
                      >
                        File Integrate
                      </h5>
                      <p className="text-muted tab-para mb-0" style={{ fontSize: "16px" }}>
                        Dummy text is text that is used in the publishing industry or by web designers.
                      </p>
                    </div>
                  </NavLink>
                </NavItem>
              </ul>
            </Col>
            <Col md={7} xs={12} className="mt-4 pt-2">
              <TabContent className="ms-lg-4" activeTab={this.state.activeTab}>
                <TabPane className="show fade" tabId="1">
                  <img src="https://thumbs.dreamstime.com/b/kpi-analytics-dashboard-graphs-kpi-analytics-dashboard-graphs-screen-212689830.jpg" alt="Management Dashboard" />
                </TabPane>

                <TabPane className="fade show" tabId="2">
                  <img src="https://images.klipfolio.com/website/public/22b133bc-124d-44f4-85f8-9170b08d3ce9/dashboard-examples-hero.png" alt="Management Timeline" />
                </TabPane>

                <TabPane className="show fade" tabId="3">
                  <img src="https://thumbs.dreamstime.com/b/online-payment-close-up-female-hands-making-48247911.jpg" alt="Payment Management" />
                </TabPane>

                <TabPane className="tab-pane fade show" tabId="4">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Image_formats_by_scope.svg/660px-Image_formats_by_scope.svg.png" alt="File Integrate" />
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
