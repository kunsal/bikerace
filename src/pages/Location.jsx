import React, { Component } from 'react';
import PageJumbotron from '../common/PageJumbotron';
import BikersMap from '../common/BikersMap';
import cmsService from '../services/cms-service';

class Location extends Component {
  state = { 
    coordinates: []
  }

  async componentDidMount() {
    const bikers = await cmsService.getBikers();
    const coordinates = [];
    bikers.map(biker => {
      coordinates.push({lat: biker.location.lat, lng: biker.location.lng})
    });
    this.setState({ coordinates });
  }

  render() { 
    return ( 
      <div>
        <PageJumbotron title="Bikers Location" />
        <BikersMap coordinates={this.state.coordinates} defaultLat={40.014984} defaultLng={-105.270546} zoom={12} />
      </div>
      
    );
  }
}
 
export default Location;