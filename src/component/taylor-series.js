import React, { useState } from 'react'
import { parse, evaluate, pow, factorial, derivative} from 'mathjs'
import './taylor.css'

const Taylor = () => {
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
        scope={
            x:x0,
        }
        setf(evaluate(inputfx,scope));
        console.log(f);
        console.log(x0);
        console.log(x);
        console.log(n);
        calculate(inputfx,x0,x,n)

    }

    const calculate = (c_f,c_x0,c_x,c_n) => {
        let i = 0;
        let fx;
        let answer = 0;
        console.log(c_f);
        do {
            if(i>0) {
                fx=derivative(fx,'x').toString();
                console.log(fx);
                answer+=parse(fx).evaluate({x:c_x0})+pow((c_x-c_x0),c_n)/factorial(c_n);
                i++;
            } else if (i==0) {
                fx=c_f
                console.log(fx);
                answer+=parse(fx).evaluate({x:c_x0})+pow((c_x-c_x0),c_n)/factorial(c_n);
                i++;
            }
        }while(i<c_n)
        setAns(answer);
        console.log(ans);
    }

    return (
      <div className="container">  
      <form id="contact" action method="post" onSubmit={(e) => { onSubmitHandler(e) }}>
        <h3>Taylor series calculate</h3>
        <fieldset>
        <input required type="text" id="fx" name="inputfx" className="form-control" placeholder="Enter function"  />
        </fieldset>
        <fieldset>
        <input required type="number" id="x0" name="inputx0" className="form-control" placeholder="Enter x0"  />
        </fieldset>
        <fieldset>
        <input required type="number" id="x" name="inputx" className="form-control" placeholder="Enter x"  />
        </fieldset>
        <fieldset>
        <input required type="number" id="n" name="inputn" className="form-control" placeholder="Enter n"  />
        </fieldset>
        <fieldset>
        <div className="right-align">
            <button type="submit" className="btn btn-primary btn-block" id="to-calculate" value="calculate" style={{ marginTop: "2vh" }}>Calculate</button>
        </div>
        </fieldset>
        <h1>
            Answer ={ans}
        </h1>
      </form>
    </div>
  )
}

export default Taylor;