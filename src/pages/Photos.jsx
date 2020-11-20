import React, { Component } from 'react';
import PageJumbotron from '../common/PageJumbotron';
import cmsService from '../services/cms-service';
import { Card, Container, Row, Col, Pagination } from 'react-bootstrap';

class Photos extends Component {
  state = { 
    loading: false,
    photos: [],
    page: 1,
    per_page: 40,
    total_pages: 0,
    total: 0
   }

  async componentDidMount() {
    await this.getPhotos(this.state.page);
  }

  getPhotos = async (page) => {
    try {
      const response = await cmsService.getPhotos(page, this.state.per_page)
      this.setState({
        loading: false,
        photos: response.photo,
        total: response.total,
        total_pages: response.pages
      })
    } catch (error) {
      this.setState({loading: false})
    }
  }

  incrementPage = async () => {
    const page = this.state.page + 1;
    if (page < this.state.total_pages/this.state.per_page) {
      this.setState({ page })
      await this.getPhotos(page);
    } else {
      alert('This is the last page');
    }
  }

  decrementPage = async () => {
    const page = this.state.page - 1;
    if (page > 0) {
      this.setState({ page })
      await this.getPhotos(page);
    } else {
      alert('This is the first page');
    }
  }

  goToPage = async (page) => {
    this.setState({page});
    await this.getPhotos(page);
  }

  render() { 
    const {photos, page, total_pages, total, per_page} = this.state;
    return ( 
      <div>
        <PageJumbotron title="Photo Gallery"/>
        <Container>
          <Row className="content-top">
            {photos.length > 0 ? 
              photos.map(photo => (
                <Col>
                  <Card style={{ width: '10rem', marginBottom: '10px' }}>
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
          <hr />
          {photos.length > 0 &&
          <Row>
            <Col>
              <p>{page * per_page} photos of {total}</p>
            </Col>
            <Col>
            <Pagination style={{ textAlign: 'center' }}>
            <Pagination.First onClick={() => this.goToPage(1)}>First Page</Pagination.First>
            <Pagination.Prev onClick={this.decrementPage}>Previous</Pagination.Prev>
            
            <Pagination.Next onClick={this.incrementPage}>Next</Pagination.Next>
            <Pagination.Last onClick={() => this.goToPage(total_pages)}>Last Page</Pagination.Last>
          </Pagination>
            </Col>
            <Col style={{ textAlign: 'right' }}>
              <p>Showing page: {page} of {total_pages}</p>
            </Col>
          </Row>
          
          }
        </Container>
        
      </div>
    );
  }
}
 
export default Photos;