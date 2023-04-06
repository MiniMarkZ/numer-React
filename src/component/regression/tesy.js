import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row , Col } from "react-bootstrap";
import polynomialRegression from 'ml-regression-polynomial';
import Plottest from "./Plottest";

function Test() {
  const [m, setM] = useState(0);
  const [n, setN] = useState(0);
  const [table, setTable] = useState([]);
  const [havedata , setHavedata] = useState(0);
  const [tablevalue ,setTablevalue] = useState([...Array(n)].map(() => Array(m).fill(0))); // แก้บัค
  const [result, setResult] = useState(null);
  const [X, setX] = useState(0)
  const [A,setA] = useState()
  const [ypredict,setYpredict] = useState([])
  const [plotx,setPlotx] = useState([])
  const [ploty,setPloty] = useState([])

  
  const Setn = (event) => {
    setN(event.target.value);
    setTablevalue(Array.from({ length: event.target.value }, () => new Array(m).fill(""))); // แก้บัค
  };
  const Calculate = () =>{
    console.log("คำนวณ จบิง")
    console.log(tablevalue)
    calculatetesy()
    console.log("plotx",plotx)
    console.log("ploty",ploty)

  }

  const Setx = (e) => {
    setX(e.target.value)
    
  }

  const Setm = (event) => {
    setM(event.target.value);
    
  };

  const inputn = (e, i, j) => {
    console.log(`matrix [${i}] [${j}] = ${e.target.value}`)
    const Tabletmp = [...tablevalue];
    Tabletmp[i][j] = e.target.value;
    setTablevalue(Tabletmp)
};
  

  const createTable = () => {
    const rows = [];
    for (let i = 0; i < n; i++) {
      const cols = [];
      for (let j = 0; j < m; j++) {
        
        cols.push(<Col key={j} xs={2} className="d-flex justify-content-center align-items-center" onChange={(e)=>{ inputn(e,i,j)}}><Form.Control type="number"></Form.Control></Col>);

    }
      rows.push(<Row key={i} className="d-flex justify-content-center align-items-center">{cols}</Row>);
    }
    setTable(rows);
    setHavedata(1)
  };
   
  const calculatetesy = () => {
    for(let j = 0 ; j < m-1 ; j++){
      const x = []
      const y = []
      var testdata =[]
      for (let i = 0; i < n; i++) {
          const row = tablevalue[i];
          const xi = parseFloat(row[0]);
          const yi = parseFloat(row[m-1]);
          x.push(xi);
          y.push(yi);
        }
        setPlotx(x)
        setPloty(y)

      const degree = m
      const regression = new polynomialRegression(x, y, degree);
      console.log(regression)
      const result = regression.predict(parseInt(X));
      setA(regression.coefficients)
      const regres = regression.coefficients
    
      setResult(result)
      console.log("result",result)
      var Ytmp= []

      for(let i = 0 ; i < n ;i++){
          for(let j = m-1 ; j > 0 ; j --){
              var tmp = 0
              console.log(`j=${j} :${regres[j]} * ${x[i]}`)
              tmp += Math.pow(regres[j],j) * x[i]
            }
          Ytmp.push(tmp)
      }
      setYpredict(Ytmp)
      console.log("ypredict",ypredict)
    }
  }
    

  

  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>M</Form.Label>
          <Form.Control type="number" placeholder="Input M"  onChange={Setm} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>N</Form.Label>
          <Form.Control type="number" placeholder="Input N"  onChange={Setn} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>X</Form.Label>
          <Form.Control type="number" placeholder="Input X"  onChange={Setx} />
        </Form.Group>
        <Button variant="primary" type="button" onClick={createTable}>
          Create Table
        </Button>
        <Form>
        <br></br>
          {table}
        </Form>
        <br></br>
        {havedata > 0  && <div><Button variant="primary" type="button" onClick={Calculate}> Calculate</Button>
        <Form>
            <br></br>
            <Form.Label><h1>{result}</h1></Form.Label>
            <Row className="justify-content-center" >
            <Plottest  X={plotx} Y={ploty} result={result} predicty={ypredict} fx={X} table={tablevalue} A={A}/>
            </Row>
            
        </Form>
        </div>
        }
      </Form>
    </div>
  );
} 

export default Test;
