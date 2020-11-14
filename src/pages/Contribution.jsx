import React, { Component } from "react";
import PageJumbotron from "../common/PageJumbotron";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
  Image,
  Alert
} from "react-bootstrap";
import cmsService from "../services/cms-service";

class Contribution extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    slogan: "",
    error: false,
    errorMsg: [],
    success: false
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async event => {
    const data = {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      email_address: this.state.email,
      slogan: this.state.slogan
    };
    try {
      const response = await cmsService.postSlogan(data);
      if (response.status == 201) {
        this.setState({
          firstName: "",
          lastName: "",
          email: "",
          slogan: "",
          success: true,
          error: false
        });
      } else {
        this.setState({
          error: true,
          success: false,
          errorMsg: response.data.errors
        });
      }
    } catch (error) {
      this.setState({
        error: true,
        success: false,
        errorMsg: ["An error occured. Please try again"]
      });
    }
  };

  render() {
    return (
      <div>
        <PageJumbotron title="Give us a Slogan" />
        <Container>
          <Row className="content-top content-body">
            <Col md={6} sm={6}>
              {this.state.success && (
                <Alert variant="success">Slogan saved successfully</Alert>
              )}
              {this.state.error ? (
                <Alert variant="danger">
                  <ul>
                    {this.state.errorMsg.map((error, i) => (
                      <li key={i}>{error}</li>
                    ))}
                  </ul>
                </Alert>
              ) : (
                ""
              )}
              <Form>
                <Row>
                  <Col>
                    <FormGroup>
                      <FormLabel>First Name</FormLabel>
                      <FormControl
                        as="input"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleInputChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl
                        as="input"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleInputChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <FormLabel>Email</FormLabel>
                      <FormControl
                        as="input"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <FormLabel>
                        Slogan (Not more than 55 characters)
                      </FormLabel>
                      <FormControl
                        as="textarea"
                        rows="5"
                        name="slogan"
                        value={this.state.slogan}
                        onChange={this.handleInputChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Button variant="primary" onClick={this.handleSubmit}>
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
            <Col md={6} sm={6}>
              <h3 className="content-title">Suggest a Slogan</h3>
              <Image
                src="https://images.pexels.com/photos/71104/utah-mountain-biking-bike-biking-71104.jpeg"
                rounded
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Contribution;
