import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css';
import {Header} from './Components/Header';
import { Section1 } from './Components/Section1';
import { Section2 } from './Components/Section2';
import { Section3 } from './Components/Section3';
import { Section4 } from './Components/Section4';
import { Section5 } from './Components/Section5';
import { Formulario } from './Components/Formulario';
import { Footer } from './Components/Footer';
import { Navbar } from './Components/Navbar';
import {Routes, Route} from 'react-router-dom';
import { Skill } from './Components/Skill';
import { Sectionwhite } from './Components/Sectionwhite';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<><Header /><Section1 /><Section2/><Section3/><Sectionwhite/><Section4/><Section5/><Footer/></>}/>
        <Route path='/formulario' element={<Formulario/>}/>
        <Route path='/skill' element={<Skill/>}/>
      </Routes>
    </div>
  )
}

export default App
