import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import Navbar from './Navbar'

const Display = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element = {<DisplayHome />} />
      </Routes>
    </div>
  )
}

export default Display