import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'

function MainRoute() {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
    </Routes>
  )
}

export default MainRoute