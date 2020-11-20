import React, { Component } from 'react';
import PageJumbotron from '../common/PageJumbotron';
import cmsService from '../services/cms-service';
import { Card, Container, Row, Col } from 'react-bootstrap';

class Photos extends Component {
  state = { 
    loading: false,
    photos: []
   }

  async componentDidMount() {
    this.setState({loading: true})
    try {
      const response = await cmsService.getPhotos(1, 12)
      this.setState({
        loading: false,
        photos: response.photo
      })
    } catch (error) {
      this.setState({loading: false})
    }
  }

  render() { 
    const {photos} = this.state;
    return ( 
      <div>
        <PageJumbotron title="Photo Gallery"/>
        <Container>
        <Row className="content-top">
          {photos.length > 0 ? 
            photos.map(photo => (
              <Col key={photo.id}>
                <Card style={{ width: '18rem', marginBottom: '10px' }}>
                  <Card.Img variant="top" src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} />
                  <Card.Body>
                    <Card.Title>{ photo.title }</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))
          : 'No photos available'
          
        }
        </Row>
        </Container>
        
      </div>
    );
  }
}
 
export default Photos;