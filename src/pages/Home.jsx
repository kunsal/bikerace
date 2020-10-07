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
class Home extends Component {
  state = {};

  render() {
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
                <CountdownTimer date="11/12/2020" />
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
              <div className="event-schedule">
                <h3>
                  <span className="time">8:00 am</span> Warm-up
                </h3>
                <p>
                  Participants do not run a marathon to win. More important for
                  most runners is their personal finish time and their placement
                  within their gender and age.
                </p>
              </div>

              <div className="event-schedule">
                <h3>
                  <span className="time">8:30 am</span> Start
                </h3>
                <p>
                  Strategies for completing a marathon include running the whole
                  distance and a run-walk strategy. Average time is 4 hours 32
                  minutes.
                </p>
              </div>

              <div className="event-schedule">
                <h3>
                  <span className="time">12:00 pm</span> Finish
                </h3>
                <p>
                  A goal many runners aim for is to break certain time barriers.
                  For example, first-timers often try to run the marathon under
                  4 hours.
                </p>
              </div>

              <div className="event-schedule">
                <h3>
                  <span className="time">1:00 pm</span> Prize Presentaion
                </h3>
                <p>
                  The winners will be presented with Prizes as per Gold, Silver
                  and Bronze
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
