import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

// Importing the Components
import Layout from './Layout';
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/RegisterPage';


// Axios Configuration for the Client


function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<LandingPage/>}/>
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/home' element={<HomePage/>} />
      </Route>
    </Routes>
  )
}

export default App
