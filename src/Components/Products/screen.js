import React, { Component } from "react";
import {
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane
} from "reactstrap";
import classnames from "classnames";

export default class TaskManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1",
      isMobile: false // Track whether it's a mobile device
    };
    this.toggleTab = this.toggleTab.bind(this);
  }

  componentDidMount() {
    // Check if it's a mobile device
    const isMobile = window.innerWidth <= 768;
    this.setState({ isMobile });

    // Add event listener to update isMobile state when window is resized
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    // Clean up the event listener
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    // Update isMobile state on window resize
    const isMobile = window.innerWidth <= 768;
    this.setState({ isMobile });
  };

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  renderTabs() {
    const { isMobile, activeTab } = this.state;

    return (
      <Nav
        className={isMobile ? "nav-pills justify-content-center" : "nav-pills nav-justified flex-column mb-0"}
        id="pills-tab"
        role="tablist"
      >
        <NavItem
          className={classnames("bg-light rounded-md", {
            active: activeTab === "1"
          })}
          style={{
            marginBottom: "10px",
            backgroundColor: activeTab === "1" ? "#343a40" : "#f5f8fa"
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
                  color: activeTab === "1" ? "#009900" : "#343a40"
                }}
              >
                Management Dashboard
              </h5>
              <p
                className="text-muted tab-para mb-0"
                style={{ fontSize: "16px" }}
              >
                Dummy text is text that is used in the publishing industry or by web designers.
              </p>
            </div>
          </NavLink>
        </NavItem>

        <NavItem
          className={classnames("bg-light rounded-md mt-4", {
            active: activeTab === "2"
          })}
          style={{
            marginBottom: "10px",
            backgroundColor: activeTab === "2" ? "#343a40" : "#f5f8fa"
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
                  color: activeTab === "2" ? "#009900" : "#343a40"
                }}
              >
                Management Timeline
              </h5>
              <p
                className="text-muted tab-para mb-0"
                style={{ fontSize: "16px" }}
              >
                Dummy text is text that is used in the publishing industry or by web designers.
              </p>
            </div>
          </NavLink>
        </NavItem>

        <NavItem
          className={classnames("bg-light rounded-md mt-4", {
            active: activeTab === "3"
          })}
          style={{
            marginBottom: "10px",
            backgroundColor: activeTab === "3" ? "#343a40" : "#f5f8fa"
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
                  color: activeTab === "3" ? "#009900" : "#343a40"
                }}
              >
                Payment Management
              </h5>
              <p
                className="text-muted tab-para mb-0"
                style={{ fontSize: "16px" }}
              >
                Dummy text is text that is used in the publishing industry or by web designers.
              </p>
            </div>
          </NavLink>
        </NavItem>

        <NavItem
          className={classnames("bg-light rounded-md mt-4", {
            active: activeTab === "4"
          })}
          style={{
            marginBottom: "10px",
            backgroundColor: activeTab === "4" ? "#343a40" : "#f5f8fa"
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
                  color: activeTab === "4" ? "#009900" : "#343a40"
                }}
              >
                File Integrate
              </h5>
              <p
                className="text-muted tab-para mb-0"
                style={{ fontSize: "16px" }}
              >
                Dummy text is text that is used in the publishing industry or by web designers.
              </p>
            </div>
          </NavLink>
        </NavItem>
      </Nav>
    );
  }

  render() {
    const { isMobile } = this.state;

    return (
      <React.Fragment>
        <div className="mt-5"></div> {/* Add top margin here */}
        <Container className="mt-100 mt-60">
          <Row className="justify-content-center">
            <Col xs={12}>
              <div className="section-title text-center mb-4 pb-2">
                <h4
                  className="title mb-4"
                  style={{ fontSize: "32px", fontWeight: "bold" }}
                >
                  Discover what makes{" "}
                  <span className="text-primary">Task Manager</span> great.
                </h4>
                <p
                  className="text-muted para-desc mb-0 mx-auto"
                  style={{ fontSize: "18px" }}
                >
                  Start working with{" "}
                  <span className="text-primary fw-bold">Landrick</span> that
                  can provide everything you need to generate awareness, drive
                  traffic, connect.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center">
            {!isMobile && (
              <Col md={5} className="mt-4 pt-2">
                {this.renderTabs()}
              </Col>
            )}
            <Col md={7} xs={12} className="mt-4 pt-2">
              <TabContent className="ms-lg-4" activeTab={this.state.activeTab}>
                <TabPane className="show fade" tabId="1">
                  <img
                    src="https://thumbs.dreamstime.com/b/kpi-analytics-dashboard-graphs-kpi-analytics-dashboard-graphs-screen-212689830.jpg"
                    alt="Management Dashboard"
                  />
                </TabPane>

                <TabPane className="fade show" tabId="2">
                  <img
                    src="https://images.klipfolio.com/website/public/22b133bc-124d-44f4-85f8-9170b08d3ce9/dashboard-examples-hero.png"
                    alt="Management Timeline"
                  />
                </TabPane>

                <TabPane className="show fade" tabId="3">
                  <img
                    src="https://thumbs.dreamstime.com/b/online-payment-close-up-female-hands-making-48247911.jpg"
                    alt="Payment Management"
                  />
                </TabPane>

                <TabPane className="tab-pane fade show" tabId="4">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Image_formats_by_scope.svg/660px-Image_formats_by_scope.svg.png"
                    alt="File Integrate"
                  />
                </TabPane>
              </TabContent>
              {isMobile && (
                <div className="mt-4 pt-2">
                  {this.renderTabs()}
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
