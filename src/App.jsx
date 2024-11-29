import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home'
import Section from './components/Section/Section'
const App = () => {
  return (

    <>
    <Header />
    <Section />
    <Routes>
      <Route path='/' element={<Home />} />

    </Routes>
    </>

  )
}

export default App