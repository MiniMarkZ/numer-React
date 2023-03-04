import Home from './home';
import Navbar from './Navbar';
import { Routes, Route } from "react-router-dom";
import Sample from './component/equation/Sample';
import Matrix_test from './component/matrix/Matrix_test';
import Myline from './component/equation/Myline';

function App() {
  return (
    <div style={{textAlignVertical: "center",textAlign: "center",}}>
      <Navbar/>
      <section>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/Bisection' element= {<Sample/>}></Route>
        <Route path='/Matrix_test' element= {<Matrix_test/>}></Route>
        <Route path='/Line' element= {<Myline/>}></Route>
        </Routes>
      </section>
    </div>
  );
}

export default App;
