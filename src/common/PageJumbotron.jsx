import React from "react";
import { Jumbotron, Container } from 'react-bootstrap';

const PageJumbotron = ({ title }) => {
  return (
    <Jumbotron className="shorter">
      <Container className="text-center">
        <h1>{title}</h1>
      </Container>
    </Jumbotron>
  );
};

export default PageJumbotron;
