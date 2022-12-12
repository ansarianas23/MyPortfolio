import React from 'react'
import {Routes,Route} from "react-router-dom";
import About from './routes/About';
import Home from './routes/Home';
import Projects from './routes/Projects';
import Skills from './routes/Skills';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/project' element={<Projects/>}></Route>
        <Route path='/skills' element={<Skills/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
    </>
  )
}

export default App;
