import { useState } from "react"
import { Button, Container, Form, Table } from "react-bootstrap";
import { evaluate } from 'mathjs'
import './styles.css';
import Myline from "./Myline";


const Sample =()=>{
    const print = () =>{
        console.log(data)
        setValueIter(data.map((x)=>x.iteration));
        setValueXl(data.map((x)=>x.Xl));
        setValueXm(data.map((x)=>x.Xm));
        setValueXr(data.map((x)=>x.Xr));
        setValueerror(data.map((x)=>x.error));
        return(
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th width="10%">Iteration</th>
                            <th width="30%">XL</th>
                            <th width="30%">XM</th>
                            <th width="30%">XR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((element, index)=>{
                            return  (
                            <tr key={index}>
                                <td>{element.iteration}</td>
                                <td>{element.Xl}</td>
                                <td>{element.Xm}</td>
                                <td>{element.Xr}</td>
                            </tr>)
                        })}
                    </tbody>
                </Table>
            </Container>
           
        );
    }

    const error =(xold, xnew)=> Math.abs((xnew-xold)/xnew)*100;
   
    const Calbisection = (xl, xr) => {
        var xm,fXm,fXr,ea,scope;
        var iter = 0;
        var MAX = 50;
        const e = 0.00001;
        var obj={};
        do
        {
            xm = (xl+xr)/2.0;
            scope = {
                x:xr,
            }
            fXr = evaluate(Equation, scope)

            scope = {
                x:xm,
            }
            fXm = evaluate(Equation, scope)

            iter ++;
            if (fXm*fXr > 0)
            {
                ea = error(xr, xm);
                obj = {
                    iteration:iter,
                    Xl:xl,
                    Xm:xm,
                    Xr:xr,
                    error:ea
                }
                data.push(obj)
                xr = xm;
            }
            else if (fXm*fXr < 0)
            {
                ea = error(xl, xm);
                obj = {
                    iteration:iter,
                    Xl:xl,
                    Xm:xm,
                    Xr:xr,
                    error:ea
                }
                data.push(obj)
                xl = xm;
            }
        }while(ea>e && iter<MAX)
        setX(xm)
    }
    const [valueerror , setValueerror] = useState([]);
    const data =[];
    const [valueIter, setValueIter] = useState([]);
    const [valueXl, setValueXl] = useState([]);
    const [valueXm, setValueXm] = useState([]);
    const [valueXr, setValueXr] = useState([]);
     
   
    const [html, setHtml] = useState(null);
    const [Equation,setEquation] = useState("(x^4)-13")
    const [X,setX] = useState(0)
    const [XL,setXL] = useState(0)
    const [XR,setXR] = useState(0)

    
    const inputEquation = (event) =>{
        console.log(event.target.value)
        setEquation(event.target.value)
    }

    const inputXL = (event) =>{
        console.log(event.target.value)
        setXL(event.target.value)
    }

    const inputXR = (event) =>{
        console.log(event.target.value)
        setXR(event.target.value)
    }

    const calculateRoot = () =>{
        const xlnum = parseFloat(XL)
        const xrnum = parseFloat(XR)
        Calbisection(xlnum,xrnum);
     
        setHtml(print());
           
        console.log(valueIter)
        console.log(valueXl)
    }
    const [chart,setChart]=useState(false)
    const setData =(event) =>{
        setChart(true)
    }


    return (
            <Container>
                <br></br>
                <div className="wrapper" >
                    <div className="container2">
                        <Form>
                            <Form.Group className="mb-3" >
                                <Form.Label> Input f(x)</Form.Label>
                                <Form.Control type="text" id="equation" value={Equation} onChange={inputEquation} placeholder="Input f(x)" />
                                <Form.Text className="text-Muted">สมการที่ดีคือ สมการที่สีเหลือง</Form.Text>
                                
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label> Input XL</Form.Label>
                                <Form.Control type="number" id="XL" onChange={inputXL}  />
                                <Form.Text className='text-Muted'>ค่า X ที่น้อยที่สุด รึป่าว ?</Form.Text>
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label> Input XR</Form.Label>
                                <Form.Control type="number" id="XR" onChange={inputXR}  />
                                <Form.Text className='text-Muted'>ค่า X ที่มากที่สุด รึป่าว ?</Form.Text>
                            </Form.Group>
                            <Button variant="primary" onClick={() => {
                                calculateRoot();
                                setData();
                                console.log("setChart",chart);
                                }}>
                                Calculate
                            </Button>
                        </Form>
                    </div>
                    <div className="container1" >
                    <h4 style={{textAlignVertical: "center",textAlign: "center",}}>Bisection Chart</h4>
                    {chart && <Myline Xm={valueXm} Xr={valueXr} name={"Bisection"} iter={valueIter} />}
                    </div>
                </div>
                
                <br></br>
                <h2 style={{textAlignVertical: "center",textAlign: "center",}}>Answer = {X.toPrecision(7)}</h2>
                
                {html}
                
            </Container>
           
    )
}

export default Sample


