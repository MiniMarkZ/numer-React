import React, { useState ,useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row , Col , Dropdown } from "react-bootstrap";
import Plottest from "./Plottest";
import axios from "axios";
import { PolynomialRegressor } from 'regression-multivariate-polynomial';


function Test() {
  const [m, setM] = useState(0);
  const [n, setN] = useState(0);
  const [table, setTable] = useState([]);
  const [havedata , setHavedata] = useState(0);
  const [tablevalue ,setTablevalue] = useState([...Array(n)].map(() => Array(m).fill(0))); // แก้บัค
  const [result, setResult] = useState(null);
  const [A,setA] = useState()
  const [X,setX] = useState()
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
        
        cols.push(<Col key={j} xs={2} onChange={(e)=>{ inputn(e,i,j)}} className="d-flex justify-content-center align-items-center" ><Form.Control type="number" placeholder={tablevalue[i][j]} ></Form.Control></Col>);

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
    setPlotx(x)
    setPloty(y)
    // Search for a polynomial model of degree = 2.
    const model = new PolynomialRegressor(2);
    model.fit(x, y); // Training
    console.log("tt", model.predict([xpredict]));
    setResult(model.predict([xpredict]))
    var datatmp =[]
    var ypredicttmp = 0
    for(let i = 0 ; i < n ; i ++){
        console.log(x[i])
        ypredicttmp = Number(model.predict([x[i]]))
        datatmp.push(ypredicttmp)
    }
    setYpredict(datatmp)

  }
  const xcreate = () => {
    const cols = [];
    for (let j = 0; j < m-1; j++) {
      cols.push(
        <Col>
          <Form.Control placeholder={xpredict[j]} type="number" key={j}
            xs={12}
            className="d-flex justify-content-center align-items-center"
            onChange={(e) => {
            Setx(e, j);
          }}/>
        </Col>
      );
    }
    setXp(cols);
  }
  
  const [api,setApi] = useState([])
  useEffect(() => {
      axios.get('http://localhost:8080/getregression/polynomial')
        .then(response => {
            console.log(response.data)
          setApi(response.data);
        })
        .catch(error => {
          console.error(error);
        });
  }, []);
    const [sample,setSample] = useState([])
    const [tablesample , setTablsample] = useState(0)
    const sampletest = (e) => {
        setTablsample(0)
        setSample(0)
        const index = api.findIndex((item) => Number(item.M) === Number(e.target.getAttribute("value")));
        if (index > -1) {
          console.log(`e.target.value found at index ${index}`);
        } else {
          console.log(`e.target.value not found in api array`);
        }
        var tmp = api[index]
        setSample(tmp)
        console.log(tmp)
        setM(tmp.M)
        setN(tmp.N)
        setTablevalue(Array.from({ length: tmp.N}, () => new Array(m).fill("")));
        console.log("m=",tmp.M)
        setHavedata(1)
        xcreate();
        setTablsample(1)
        // createTable();
        const arr = tmp.X.split(",");
        setXpredict(arr.map(Number));        
        setTablevalue(JSON.parse(tmp.array))
        console.log("tavle",tablevalue)
        console.log(tablevalue[1]) 
      };
      

  

  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>M</Form.Label>
          <Form.Control type="number" placeholder={m}  onChange={Setm} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>N</Form.Label>
          <Form.Control type="number" placeholder={n} onChange={Setn} />
        </Form.Group>
        <div className="d-flex justify-content-center">
      <Button variant="primary" type="button" onClick={() => {
        xcreate();
        createTable();
      }}>
        Create Table
      </Button>
      
      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          Samples
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item value="2" onClick={sampletest}>M=2 N=9</Dropdown.Item>
          <Dropdown.Item value="3" onClick={sampletest}>M=3 N=9</Dropdown.Item>
          <Dropdown.Item value="4" onClick={sampletest}>M=4 N=9</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
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
            <Plottest  X={plotx} Y={ploty} result={result} predicty={ypredict} fx={xpredict} table={tablevalue} A={A}/>
            </Row>
            
        </Form>
        </div>
        }
      </Form>
    </div>
  );
} 

export default Test;
