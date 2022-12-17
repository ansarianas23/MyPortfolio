import React from 'react'
import {Routes,Route, BrowserRouter} from "react-router-dom";
import About from './routes/About';
import Home from './routes/Home';
import Projects from './routes/Projects';
import Skills from './routes/Skills';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/project' element={<Projects/>}></Route>
        <Route path='/skills' element={<Skills/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
