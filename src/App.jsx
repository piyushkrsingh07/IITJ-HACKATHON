import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import Features from './components/Features'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import {BrowserRouter, Route,Routes} from "react-router-dom"
import Footer from './components/Footer'
import Diagnosis from './components/Diagnosis'
import Camera from './components/Camera'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/features" element={<Features/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/diagnosis" element={<Diagnosis/>}/>
      <Route path="/camera" element={<Camera/>}/>
      <Route/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
