import Home from './home';
import Navbar from './Navbar';
import { Routes, Route } from "react-router-dom";
import Sample from './component/Sample';
import Matrix_test from './component/matrix/Matrix_test';


function App() {
  return (
    <div >
      <Navbar/>
      <section>
        <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/Bisection' element= {<Sample/>}></Route>
        <Route path='/Matrix_test' element= {<Matrix_test/>}></Route>
        </Routes>
      </section>
    </div>
  );
}

export default App;
