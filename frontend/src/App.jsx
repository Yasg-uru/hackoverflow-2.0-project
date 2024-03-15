import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Card from './components/Cards/Card'
import BoxSection from './components/Box/Box'
import LeftSection from './components/LeftSection/LeftSection'
import Home from './pages/basic pages/Home'
import {Routes,Route} from "react-router-dom" 
import Signup from "./authcomponents/Signup.jsx"
function App() {


  return (
    <>

  <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/signup' element={<Signup/>}></Route>
  </Routes>  
  </>





  );
}

export default App
