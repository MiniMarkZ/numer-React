import React from 'react';
import { Button, Col, Container, Row , Image} from 'react-bootstrap';
import './home.css';

const Home = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md="auto" className="text-center mb-4">
          <h1>HOME</h1>
        </Col>
      </Row>
      <Row className="justify-content-center" >
        <Col md="auto" >
        <Button className="mx-2 custom-button">
            Roots of equation
          </Button>
          
        </Col>
        <Col md="auto">
        <Button className="mx-2 custom-button">
            Matrix
          </Button>
        
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
