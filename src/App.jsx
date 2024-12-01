import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home'
import Section from './components/Section/Section'
import Section2 from './components/Sectio2/Section2'
import Section3 from './components/Section3/Section3'


const App = () => {
  return (

    <>
    <Header />
    <Section />
    <Section2 />
    <Section3 />

    <Routes>
      <Route path='/' element={<Home />} />

    </Routes>
    </>

  )
}

export default App