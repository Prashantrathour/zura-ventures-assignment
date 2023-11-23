import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import ProjectDashboard from '../Pages/ProjectDashboard'
// import ProjectDashboard from '../components/ProjectDashboard'

function MainRoute() {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
  
        <Route path='/projectDashboard/:_id' element={<ProjectDashboard/>}/>
    </Routes>
  )
}

export default MainRoute