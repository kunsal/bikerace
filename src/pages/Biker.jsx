import React, { Component } from "react";
import PageJumbotron from "../common/PageJumbotron";
import cmsService from "../services/cms-service";
import { Row, Col, Container, Alert } from "react-bootstrap";
import BikersMap from "../common/BikersMap";

class Biker extends Component {
  state = {
    biker: {},
    lng: 0,
    lat: 0,
    zoom: 14,
    coordinates: []
  };

  async componentDidMount() {
    const {
      match: { params }
    } = this.props;
    const biker = await cmsService.getBiker(params.id);

    const lat = biker.location.lat;
    const lng = biker.location.lng;

    this.setState({ biker, 
      lat, 
      lng,
      coordinates: [{lat: lat, lng: lng}]
    });
    
  }

  render() {
    const { biker, lat, lng, zoom, coordinates } = this.state;
    console.log(this.state.coordinates);
    return (
      <div>
        <PageJumbotron title="Biker Details" />

        <Container>
          {biker ? (
            <React.Fragment>
              <Row className="content-top">
                
              </Row>
              <Row className="content-body">
                <Col md={4} sm={6}>
                  
                  <h3 className="content-title">{biker.firsName} {biker.lastName}</h3>
                  
                  <p className="content-text">
                    { biker.city }, { biker.state }
                  </p>
                </Col>
                <Col md={8} sm={6}>
                  <h3></h3>
                  <BikersMap
                    coordinates={coordinates}
                    defaultLat={lat}
                    defaultLng={lng}
                    zoom={zoom}
                  />
                </Col>
              </Row>
            </React.Fragment>
          ) : (
            <Row>
              <Col>
                <Alert variant="primary" className="text-center">
                  No biker found
                </Alert>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    );
  }
}

export default Biker;
