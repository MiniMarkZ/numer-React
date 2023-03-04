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
            <Col>
            <Image src="https://cdn.discordapp.com/attachments/900255663081545761/1080397267820875836/MiniMarkZ_world_in_2030_ebb674ed-c3ca-4141-9021-0c3d6bd69113.png" width="400" height="400"/>
            </Col>
          </Button>
          
        </Col>
        <Col md="auto">
        <Button className="mx-2 custom-button">
            Matrix
            <Col>
            <Image src="https://cdn.discordapp.com/attachments/900255663081545761/1081529073299370054/MiniMarkZ_matrix_8b2b4d07-197d-4d85-8757-ada655c939e6.png" width="400" height="400"/>
            </Col>
          </Button>
        
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
