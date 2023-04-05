import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import polynomialRegression from 'ml-regression-polynomial';
import ReactApexChart from 'react-apexcharts';


function Polynomial() {
  const [m, setM] = useState(0);
  const [n, setN] = useState(0);
  const [x, setX] = useState(0);
  const [matrix, setMatrix] = useState([...Array(n)].map(() => Array(m).fill(0)));
  const [result, setResult] = useState(null);
  
  const [chartOptions, setChartOptions] = useState({});
  const [chartData, setChartData] = useState({});


  const handleMChange = (e) => {
    setM(e.target.value);
  };

  const handleNChange = (e) => {
    const newN = e.target.value;
    setN(newN);
    setMatrix(Array.from({ length: newN }, () => new Array(m).fill("")));
  };
  
  const handleXChange = (e) => {
    setX(e.target.value);
  };

  const handleMatrixChange = (e, row, col) => {
    console.log(`matrix [${row}] [${col}] = ${e.target.value}`)
    const newMatrix = [...matrix];
    newMatrix[row][col] = e.target.value;
    setMatrix(newMatrix);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const result = calculatePolynomial(m, n, parseFloat(x), matrix);
  
    console.log("result",result)
    setResult(result);
  };
  


  const renderMatrix = () => {
    const rows = [];
    for (let i = 0; i < n; i++) {
      const cols = [];
      for (let j = 0; j < m; j++) {
        cols.push(
          <Col key={j} xs={3} className="d-flex justify-content-center align-items-center">
            <Form.Control type="number" onChange={(e) => handleMatrixChange(e, i, j)} />
          </Col>
        );
      }
      rows.push(<Row key={i} className="d-flex justify-content-center align-items-center">{cols}</Row>);
    }
    return rows;
  };

  function calculatePolynomial(m, n, x, matrix) {
    // Check if input data contains non-numeric values
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (isNaN(parseFloat(matrix[i][j]))) {
          throw new Error('Input data contains non-numeric values');
        }
      }
    }
  
    const X = [];
    const y = [];
  
    // Populate X and y arrays from the matrix
    for (let i = 0; i < n; i++) {
      const row = matrix[i];
      const xi = parseFloat(row[0]);
      const yi = parseFloat(row[1]);
      X.push(xi);
      y.push(yi);
    }
  
    const degree = m - 1; 
    const regression = new polynomialRegression(X, y, degree);
    const result = regression.predict(x);
  
    return result;
  }
  
  

  return (
    <Container>
      <br></br>
      <h1>Polynomial Calculator</h1>
      <Form >
        <Row xs={4} className="mt-4 d-flex justify-content-center align-items-center">
          <Col>
            <Form.Group controlId="m">
              <Form.Label>M:</Form.Label>
              <Form.Control type="number" value={m} onChange={handleMChange} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="n">
              <Form.Label>N:</Form.Label>
              <Form.Control type="number" value={n} onChange={handleNChange} />
            </Form.Group>
          </Col>
        </Row>
        {m !== 0 && n !== 0 && (
          <Row xs={4} className="mt-4 d-flex justify-content-center align-items-center">
            <Form.Group controlId="x">
              <Form.Label>X:</Form.Label>
              <Form.Control type="number" value={x} onChange={handleXChange} />
            </Form.Group>
          </Row>
        )}
        <br></br>
        <Form.Group controlId="matrix" >
          {renderMatrix()}
        </Form.Group>
        <br></br>
        {m !==0 && n !==0 &&
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Calculate
        </Button>
        }
      </Form>
      <br></br>
      {result &&
      <div>
        <Row>
          <h2>
            <Form.Label>Answer is {result}</Form.Label>
          </h2>
          <Row>
            <Form.Label>กราฟทิพย์ XD</Form.Label>
          </Row>
        </Row>
        <Row>
          
        <img src="https://media.discordapp.net/attachments/900255663081545761/1093124461600976937/scatter-plot-options-1.png"/>
        </Row>
      </div> 
        
      }
      
    </Container>
  );
}

export default Polynomial;
