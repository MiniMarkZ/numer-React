import Home from './home';
import Navbar from './Navbar';
import { Routes, Route } from "react-router-dom";
import Bisection from './component/equation/Bisection';
import Matrix_test from './component/matrix/Matrix_test';
import FalsePosition from './component/equation/FalsePosition';
import Onepoint from './component/equation/Onepoint';
import Newton_raphson from './component/equation/Newton_raphson';
import Secant from './component/equation/Secant';
import Taylor from './component/equation/Taylor_series';
import Cramer from './component/matrix/Cramer';
import Polynomial from './component/regression/Polynomial';
import Tesy from './component/regression/tesy';



function App() {
  return (
    <div style={{textAlignVertical: "center",textAlign: "center",}}>
      <Navbar/>
      <section>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/Bisection' element= {<Bisection/>}></Route>
        <Route path='/Matrix_test' element= {<Matrix_test/>}></Route>
        <Route path='/FalsePosition' element = {<FalsePosition/>}></Route>
        <Route path='/Onepoint' element = {<Onepoint/>}></Route>
        <Route path='/Newton.r' element = {<Newton_raphson/>}></Route>
        <Route path='/Secant' element = {<Secant/>}></Route>
        <Route path='/Taylor' element = {<Taylor/>}></Route>
        <Route path='/Cramer' element = {<Cramer/>}></Route>
        <Route path='/polynomial' element = {<Polynomial/>}></Route>
        <Route path='/tesy' element={<Tesy/>}/>

        </Routes>
      </section>
    </div>
  );
}

export default App;
