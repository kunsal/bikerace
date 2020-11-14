import React, { Component } from "react";
import "../Home.css";
import {
  Button,
  Jumbotron,
  Container,
  ButtonGroup,
  Row,
  Col,
  Image
} from "react-bootstrap";
import CountdownTimer from "../common/Countdown";
import cmsService from "../services/cms-service";
class Home extends Component {
  state = {
    schedules: [],
  };

  async componentDidMount() {
    const schedules = await cmsService.getSchedule();
    if (schedules.length > 0) {
      this.setState({ schedules });
    }
  }

  render() {
    const { schedules } = this.state;
    return (
      <div>
        <Jumbotron>
          <Container>
            <p>12 November / Boulder, Colorado</p>
            <h1>Its Time To Race Again</h1>
            <p>In a race against time, the speed determines the winner!</p>

            <ButtonGroup>
              <Button variant="primary" size="lg">
                Register Now
              </Button>
              <span className="spacer"></span>
              <Button variant="secondary" size="lg">
                Follow Us
              </Button>
            </ButtonGroup>
          </Container>
          <Container fluid className="countdown">
            <Row>
              <Col>
                <CountdownTimer date="01/02/2020" />
              </Col>
            </Row>
          </Container>
        </Jumbotron>

        <Container>
          <Row className="content-top">
            <Col>
              <h3 className="content-title">About Boulder Tour</h3>
            </Col>
          </Row>
          <Row className="content-body">
            <Col md={8} sm={6}>
              <p className="content-text">
                This is the epic MTB race in the Utah. The course is designed by
                trail-building legend (he'll hate us for saying that!) Peter
                Laing, and has regularly been voted the best in the country.
                Come and test yourself on a fantastic mix of natural
                singletrack, twin-track forest roads, ancient drove roads,
                hand-made singletrack, and trail centre. You'll visit the
                valleys of the Rivers Tweed, Yarrow and Ettrick, and of course,
                the high points in between. So, expect lung and thigh busting
                climbs that are rewarded with epic grin-inducing descents.
              </p>
            </Col>
            <Col md={4} sm={6}>
              <h3></h3>
              <Image
                src="http://design4dj.com/tf/mtbrace/images/about_01.jpg?crc=228886927"
                rounded
                className="img-fluid"
              />
            </Col>
          </Row>

          <Row className="content-top">
            <Col>
              <h3 className="content-title">Event Schedule</h3>
            </Col>
          </Row>
          <Row className="content-body">
            <Col md={4} sm={6}>
              <h3></h3>
              <Image
                src="https://images.pexels.com/photos/3642537/pexels-photo-3642537.jpeg?cs=srgb&dl=pexels-m%C3%ADdia-3642537.jpg&fm=jpg"
                rounded
                className="img-fluid"
              />
            </Col>
            <Col md={8} sm={6}>
              { schedules.map(schedule => (
                <div className="event-schedule">
                <h3>
                  <span className="time">{ schedule.time } am</span> { schedule.segment }
                </h3>
                <p>
                  { schedule.description }
                </p>
              </div>
              )) }
              
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
