import React from 'react'
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Container from 'react-bootstrap/Container';
import Navbar1 from "./components/Navbar1";


export default function App() {
  return (
    <Container>
    <div>App</div>  
    <Navbar1/>  
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/Contact" element={<Contact />} />
       <Route path="/About" element={<About />} />
       <Route path="/Login" element={<Login />} />
       <Route path="*" element={<NotFound />} />
    </Routes>
 
 </Container>
  )
}
