import React, { Component } from "react";
import { useParams } from "react-router-dom";
import PageJumbotron from "../common/PageJumbotron";
import cmsService from "../services/cms-service";
import { Row, Col, Container } from "react-bootstrap";

class Biker extends Component {
  state = {
    biker: {}
  };

  async componentDidMount() {
    const {
      match: { params }
    } = this.props;
    const biker = await cmsService.getBiker(params.id);
    this.setState({ biker });
  }

  render() {
    const { biker } = this.state;
    return (
    <div>
      <PageJumbotron title="Biker Details" />
      <Container>
        <Row className="content-top">
          { 
            biker ? (
          <Col>
            <h1>
              {biker.firstName} {biker.lastName}
            </h1>
          </Col>
          ) : (
            <Col>
              <p>Loading...</p>
            </Col>
          )
        }
        </Row>
      </Container>
    </div>
    );
  }
}

export default Biker;
