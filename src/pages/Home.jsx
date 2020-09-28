import React, { Component } from "react";
import "../Home.css";
import { Button, Jumbotron, Container, ButtonGroup, Row, Col, Image } from "react-bootstrap";
import CountdownTimer from "../common/Countdown";
class Home extends Component {
  state = {}

  render() {
   
    return (
      <div>
        <Jumbotron>
          <Container>
            <p>12 June / Virgin, Utah</p>
            <h1>Hello World</h1>
            <p>This is my message to you uh ho!</p>
            <ButtonGroup>
              <Button variant="primary" size="lg">
                Learn More
              </Button>
              <Button variant="secondary" size="lg">
                Follow Us
              </Button>
            </ButtonGroup>
          </Container>
        </Jumbotron>
        <Container fluid>
          <Row>
            <Col className="countdown">
              <CountdownTimer date="9/29/2020" />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="content">
            <Col md={8} sm={6}>
              <h3 className="content-title">About Boulder Tour</h3>
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
              <Image src="http://design4dj.com/tf/mtbrace/images/about_01.jpg?crc=228886927" rounded className="img-responsive" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;