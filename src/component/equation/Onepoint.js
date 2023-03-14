import { useState } from "react"
import { Button, Container, Form, Row } from "react-bootstrap";
import { evaluate } from 'mathjs'
import './styles.css';
import Myline from "./Myline";
import Mytable from "./Mytable";
import Popup from "./Popup";


const Onepoint =()=>{
    const [valueerror , setValueerror] = useState([]);
    const data =[];
    const [valueIter, setValueIter] = useState([]);
    const [valueX0, setValueX0] = useState([]);
    const [valueXm, setValueXm] = useState([]);
    const [valueXr, setValueXr] = useState([]);
    const [Equation,setEquation] = useState("(x^4)-13")
    const [X,setX] = useState(0)
    const [X0,setX0] = useState(0)
    const [Nodata,setNodata]=useState(false)
    const [Calerror,setCalerror] = useState(false)

    const setall = () =>{
        console.log(data)
        setValueIter(data.map((x)=>x.iteration));
        setValueX0(data.map((x)=>x.X0));
        // setValueXm(data.map((x)=>x.Xm));
        // setValueXr(data.map((x)=>x.Xr));
        setValueerror(data.map((x)=>x.error));
    }

    const error =(xold, xnew)=> Math.abs((xnew-xold)/xnew)*100;
    
    const CalOnepoint = (x) => {
        var fX, ea, Xold=0;
        var iter = 0;
        var MAX = 50;
        const e = 0.00001;
        var obj={};
        do
        {
            fX = evaluate(Equation, {x:x})
            iter++;
                ea = error(Xold, x);
                obj = {
                    iteration: iter,
                    X: x,
                    E: ea,
                    Xold: x,
                    error : ea
                }
                data.push(obj)
                Xold=x;
        } while (ea > e && iter < MAX)
        setX(obj.X);
        console.log(X);
    }


    
    const inputEquation = (event) =>{
        console.log(event.target.value)
        setEquation(event.target.value)
    }

    const inputX0 = (event) =>{
        console.log(event.target.value)
        setX0(event.target.value)
    }

    const calculateRoot = () =>{
        const X0num = parseFloat(X0)
        CalOnepoint(X0num);
        setall();   
    }

    const setData =(event) =>{
        setNodata(true)
    }


    return (
            <Container>
                <br></br>
                <Row className="justify-content-center">
                    <div md="auto" className="text-center mb-4">
                        <h1>Onepoint Methods</h1>
                    </div>
                 </Row>
                <div className="wrapper" >
                
                    <div className="container2">
                        <Form>
                            <Form.Group className="mb-3" >
                                <Form.Label> Input f(x)</Form.Label>
                                <Form.Control type="text" id="equation" value={Equation} onChange={inputEquation} placeholder="Input f(x)" />
                                {/* <Form.Text className="text-Muted">สมการที่ดีคือ สมการที่สีเหลือง</Form.Text> */}
                                
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label> Input X0</Form.Label>
                                <Form.Control type="number" id="X0" onChange={inputX0}  />
                                {/* <Form.Text className='text-Muted'>ค่า X ที่น้อยที่สุด รึป่าว ?</Form.Text> */}
                            {/* </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label> Input XR</Form.Label>
                                <Form.Control type="number" id="XR" onChange={inputXR}  />
                                {/* <Form.Text className='text-Muted'>ค่า X ที่มากที่สุด รึป่าว ?</Form.Text> */}
                            </Form.Group> 
                            <Button variant="primary" onClick={() => {
                                setX(0)
                                setCalerror(false)
                                calculateRoot();
                                setData();
                                console.log("setNodata",Nodata);
                                }}>
                                Calculate
                            </Button>
                        </Form>
                    </div>
                    
                    <div>ยังพัง</div>
                    {/* {Calerror == true&&<Popup />}
                    <div className="container1" >
                    <h4 style={{textAlignVertical: "center",textAlign: "center",}}>Onepoint Chart</h4>
                    {Nodata== false && <img src="https://cdn.discordapp.com/attachments/900255663081545761/1082615467186860084/Rolling-4.5s-200px_1.gif" alt="Loading..." />}
                    {Nodata && <Myline Iteration={valueIter} X0= {valueX0} Xm={valueXm} Xr={valueXr} name={"Onepoint"} Error={valueerror} />}
                    </div> */}
                </div>
                
                {/* <br></br>
                <h2 style={{textAlignVertical: "center",textAlign: "center",}}>Answer = {X.toPrecision(7)}</h2>
                {Nodata== false && <img src="https://cdn.discordapp.com/attachments/900255663081545761/1082614220052516864/Ellipsis-12.5s-200px.gif" alt="Loading..." />}
                {Nodata && <Mytable Iteration={valueIter} X0= {valueX0} Xm={valueXm} Xr={valueXr} Error={valueerror}  />} */}
                
            </Container>
           
    )
}

export default Onepoint


