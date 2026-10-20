// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg' 
import 'bootstrap/dist/css/bootstrap.min.css';
import {  BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './component/frontend/Home';
import About from './component/frontend/About';
import './assets/css/style.scss';
import Services from './component/frontend/Services';
import Projects from './component/frontend/Projects';
import Blogs from './component/frontend/Blogs';
import ContactUs from './component/frontend/ContactUs';
import Login from './component/backend/Login';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
         <Routes>
             <Route path='/' element={<Home /> } />
             <Route path='/about' element={<About /> } />
             <Route path='/services' element={<Services /> } />
             <Route path='/projects' element={<Projects /> } />
             <Route path='/blogs' element={<Blogs /> } />
             <Route path='/contactus' element={<ContactUs /> } />
             <Route path='/admin/login' element={<Login /> } />

         </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
