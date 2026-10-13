// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg' 
import 'bootstrap/dist/css/bootstrap.min.css';
import {  BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './component/frontend/Home';
import About from './component/frontend/About';
import './assets/css/style.scss';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
         <Routes>
             <Route path='/' element={<Home /> } />
             <Route path='/about' element={<About /> } />

             
          
         </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
