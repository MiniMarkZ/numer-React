import { useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { parse, evaluate, pow, factorial, derivative } from "mathjs";

const TaylorSeries = () => {
  const [f, setf] = useState();
  const [x0, setx0] = useState(0);
  const [x, setx] = useState(0);
  const [n, setn] = useState(0);
  const [ans, setAns] = useState(0);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let inputfx = e.target.inputfx.value;
    let inputx0 = e.target.inputx0.value;
    let inputx = e.target.inputx.value;
    let inputn = e.target.inputn.value;
    setx0(parse(inputx0).evaluate());
    setx(parse(inputx).evaluate());
    setn(parse(inputn).evaluate());
    let scope;
    scope = {
      x: x0,
    };
    setf(evaluate(inputfx, scope));
    calculate(inputfx, x0, x, n);
  };

  const calculate = (c_f, c_x0, c_x, c_n) => {
    let i = 0;
    let fx;
    let answer = 0;
    do {
      if (i > 0) {
        fx = derivative(fx, "x").toString();
        answer += parse(fx).evaluate({ x: c_x0 }) + pow(c_x - c_x0, c_n) / factorial(c_n);
        i++;
      } else if (i == 0) {
        fx = c_f;
        answer += parse(fx).evaluate({ x: c_x0 }) + pow(c_x - c_x0, c_n) / factorial(c_n);
        i++;
      }
    } while (i < c_n);
    setAns(answer);
  };

  return (
    <Container>
        <br></br>
      <Form id="contact" action method="post" onSubmit={(e) => onSubmitHandler(e)} >
        <h1>Taylor series </h1>
        <Row>
            <Form.Group >
                <Form.Label htmlFor="fx">Enter function</Form.Label>
                <Form.Control required type="text" id="fx" name="inputfx" placeholder="Enter function" style={{ width: "50%", margin: "0 auto"  }} />
            </Form.Group>
        </Row>
        <Row>
            <Form.Group>
            <Form.Label htmlFor="x0">Enter x0</Form.Label>
            <Form.Control required type="number" id="x0" name="inputx0" placeholder="Enter x0" style={{ width: "50%", margin: "0 auto" }}/>
            </Form.Group>
        </Row>
        <Row>
            <Form.Group>
            <Form.Label htmlFor="x">Enter x</Form.Label>
            <Form.Control required type="number" id="x" name="inputx" placeholder="Enter x" style={{ width: "50%", margin: "0 auto" }}/>
            </Form.Group>
        </Row>
        <Row>
            <Form.Group>
            <Form.Label htmlFor="n">Enter n</Form.Label>
            <Form.Control required type="number" id="n" name="inputn" placeholder="Enter n" style={{ width: "50%", margin: "0 auto"  }}/>
            </Form.Group>
        </Row>
        <Button type="submit" variant="primary" id="to-calculate" style={{ marginTop: "2vh" }}>
          Calculate
        </Button>
        <h2>Answer = {ans}</h2>
      </Form>
    </Container>
  );
};

export default TaylorSeries;
