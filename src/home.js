import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md="auto" className="text-center mb-4">
          <h1>HOME</h1>
        </Col>
      </Row>
      <Row className="justify-content-center" xs={1} sm={2} md={2} lg={3} xl={3} xxl={3}>
        <Col md="auto">
          <Card className="mx-2 custom-card">
            <Card.Body>
              <Card.Title>Bisection</Card.Title>
              <Card.Text className="mt-4">
                การหา Root โดยใช้วิธีการของ Bisection
              </Card.Text>
              <Link to="/bisection" className="stretched-link"></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md="auto">
          <Card className="mx-2 custom-card">
            <Card.Body>
              <Card.Title>FalsePosition</Card.Title>
              <Card.Text className="mt-4">
                การหา Root โดยใช้วิธีการของ FalsePosition
              </Card.Text>
              <Link to="/falseposition" className="stretched-link"></Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br></br>
      <Row className="justify-content-center" xs={1} sm={2} md={2} lg={3} xl={3} xxl={3}>
        <Col md="auto">
          <Card className="mx-2 custom-card">
            <Card.Body>
              <Card.Title>One point</Card.Title>
              <Card.Text className="mt-4">
                การหา Root โดยใช้วิธีการของ One point
              </Card.Text>
              <Link to="/Onepoint" className="stretched-link"></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md="auto">
          <Card className="mx-2 custom-card">
            <Card.Body>
              <Card.Title>Newton raphson</Card.Title>
              <Card.Text className="mt-4">
                การหา Root โดยใช้วิธีการของ Newton raphson
              </Card.Text>
              <Link to="/Newton.r" className="stretched-link"></Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br></br>
      <Row className="justify-content-center" xs={1} sm={2} md={2} lg={3} xl={3} xxl={3}>
        <Col md="auto">
          <Card className="mx-2 custom-card">
            <Card.Body>
              <Card.Title>Secant</Card.Title>
              <Card.Text className="mt-4">
                การหา Root โดยใช้วิธีการของ Secant
              </Card.Text>
              <Link to="/Secant" className="stretched-link"></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md="auto">
          <Card className="mx-2 custom-card">
            <Card.Body>
              <Card.Title>Taylor_series</Card.Title>
              <Card.Text className="mt-4">
                การหา Root โดยใช้วิธีการของ Taylor series v.1
              </Card.Text>
              <Link to="/Taylor" className="stretched-link"></Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br></br>
      <Row className="justify-content-center" xs={1} sm={2} md={2} lg={3} xl={3} xxl={3}>
        <Col md="auto">
          <Card className="mx-2 custom-card">
            <Card.Body>
              <Card.Title>Cramer's Rule</Card.Title>
              <Card.Text className="mt-4">
                การคำนวณเมทริกซ์โดยใช้วิธีการของ Cramer's Rule
              </Card.Text>
              <Link to="/Cramer" className="stretched-link"></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md="auto">
          <Card className="mx-2 custom-card">
            <Card.Body>
              <Card.Title>Polynomial regression</Card.Title>
              <Card.Text className="mt-4">
                ทำ regression โดยใช้วิธี Polynomial v.1
              </Card.Text>
              <Link to="/polynomial" className="stretched-link"></Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
    </Container>
  );
};

export default Home;
