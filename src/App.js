import Home from './home';
import Navbar from './Navbar';
import { Routes, Route } from "react-router-dom";
import Bisection from './component/equation/Bisection';
import Matrix_test from './component/matrix/Matrix_test';
import FalsePosition from './component/equation/FalsePosition';
import Onepoint from './component/equation/Onepoint';


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
        
        </Routes>
      </section>
    </div>
  );
}

export default App;
