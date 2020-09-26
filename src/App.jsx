import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { Button, Jumbotron, Container, ButtonGroup } from "react-bootstrap";
import AppNavbar from "./common/AppNavbar";

class App extends Component {
  render() {
    
    return (
      <React.Fragment>
        <AppNavbar containerized/>
        <Jumbotron>
          <Container>
            <p>12 June / Virgin, Utah</p>
            <h1>Hello World</h1>
            <p>This is my message to you uh ho!</p>
            <ButtonGroup>
              <Button variant="primary" size="lg">Learn More</Button>
              <Button variant="secondary" size="lg">Follow Us</Button>
            </ButtonGroup>
            
          </Container>
          
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default App;

