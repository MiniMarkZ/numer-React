import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row , Col } from "react-bootstrap";
import Plottest from "./Plottest";
import { PolynomialRegressor } from 'regression-multivariate-polynomial';

function Test() {
  const [m, setM] = useState(0);
  const [n, setN] = useState(0);
  const [table, setTable] = useState([]);
  const [havedata , setHavedata] = useState(0);
  const [tablevalue ,setTablevalue] = useState([...Array(n)].map(() => Array(m).fill(0))); // แก้บัค
  const [result, setResult] = useState(null);
  const [A,setA] = useState()
  const [ypredict,setYpredict] = useState([])
  const [plotx,setPlotx] = useState([])
  const [ploty,setPloty] = useState([])
  const [degree,setDegree] = useState(0);
  const [xp,setXp ]= useState([])
  const [xpredict,setXpredict] = useState([])

  const Setdegree = (e) =>{
    setDegree(e.target.value)
  }
  const Setn = (event) => {
    setN(event.target.value);
    setTablevalue(Array.from({ length: event.target.value }, () => new Array(m).fill(""))); // แก้บัค
  };
  const Calculate = () =>{
    console.log("คำนวณ จบิง")
    console.log(tablevalue)
    calculatetesy()
    // console.log("plotx",plotx)
    // console.log("ploty",ploty)

  }

  const Setx = (e,j) => {
    var xtmp = []
    console.log(e.target.value ," = " ,j)
    xtmp = xpredict;
    console.log("asd",xtmp)
    xtmp[j] = Number(e.target.value);
    setXpredict(xtmp)
    console.log("asd",xpredict)
  }

  const Setm = (event) => {
    const tmpnumber = Number(event.target.value)
    const newArray = new Array(tmpnumber-1).fill(0);
    console.log("newa",newArray);
    setM(event.target.value);
    setXpredict(newArray);
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
    
    var table = tablevalue
    const x = table.map(row => row.slice(0, -1).map(Number));
    const y = table.map(row => row.slice(-1).map(Number));
    console.log("x", x);
    console.log("y", y);
    console.log("Xpredict",xpredict)
    // Search for a polynomial model of degree = 2.
    const model = new PolynomialRegressor(10);
    model.fit(x, y); // Training
    console.log("tt", model.predict([xpredict]));

  }
  const xcreate = () => {
    const cols = [];
    for (let j = 0; j < m-1; j++) {
      cols.push(
        <Col
          key={j}
          xs={12}
          className="d-flex justify-content-center align-items-center"
          onChange={(e) => {
            Setx(e, j);
          }}
        >
          <Form.Control type="number" />
        </Col>
      );
    }
    setXp(cols);
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
        <Button variant="primary" type="button" onClick={()=>{
            xcreate();
            createTable()}}>
          Create Table
        </Button>
       
        {/* <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Degree</Form.Label>
          <Form.Control type="number" placeholder="Input Degree"  onChange={Setdegree} />
        </Form.Group> */}
        { havedata > 0 && <Form>
            <Form.Label>X </Form.Label>
            {xp}</Form>}
        <Form>
        <br></br>
          {table}
        </Form>
        <br></br>
        {havedata > 0  && <div>
            <Button variant="primary" type="button" onClick={Calculate}> Calculate</Button>
        <Form>
            <br></br>
            <Form.Label><h1>{result}</h1></Form.Label>
            <Row className="justify-content-center" >
            {/* <Plottest  X={plotx} Y={ploty} result={result} predicty={ypredict} fx={X} table={tablevalue} A={A}/> */}
            </Row>
            
        </Form>
        </div>
        }
      </Form>
    </div>
  );
} 

export default Test;
