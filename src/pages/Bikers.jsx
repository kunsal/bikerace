import React, { Component } from "react";
import PageJumbotron from "../common/PageJumbotron";
import { Row, Col, Card, Button, Container, Alert } from "react-bootstrap";
import cmsService from '../services/cms-service';
import { Link } from 'react-router-dom';

class Bikers extends Component {
  state = {
    bikers: []
  };

  async componentDidMount() {
    const bikers = await cmsService.getBikers();
    this.setState({bikers})
  }

  render() {
    const { bikers } = this.state;
    return (
      <div>
        <PageJumbotron title="Bikers" />
        <Container>
          <Row className="content-top">
          { bikers.length > 0 ? 
            bikers.map(biker => (
              <Col sm="12" md="4" key={biker.id}>
                <Card className="biker-card">
                  {/* <Card.Img variant="top" src="https://place-hold.it/300" /> */}
                  <Card.Body>
                    <Card.Title>{biker.firstName} {biker.lastName}</Card.Title>
                    <Card.Text>
                      {biker.city}, {biker.state}
                    </Card.Text>
                    <Link to={`/biker/${biker.id}`} className="btn btn-primary btn-sm">View Profile</Link>
                    {/* <Button variant="primary">View Profile</Button> */}
                  </Card.Body>
                </Card>
              </Col>
            )) 
            : 
            <Alert type="info">No biker found</Alert>
          }
        </Row>
        </Container>
      </div>
    );
  }
}

export default Bikers;
