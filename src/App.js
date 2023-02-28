import Home from './home';
import Navbar from './Navbar';
import { Routes, Route } from "react-router-dom";
import Sample from './component/Sample';
import Matrix_test from './component/matrix/Matrix_test';
import MyComponent from './component/test/MyComponent';
import Myline from './component/test/Myline';

function App() {
  return (
    <div style={{textAlignVertical: "center",textAlign: "center"}}>
      <Navbar/>
      <section>
        <Routes>
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
