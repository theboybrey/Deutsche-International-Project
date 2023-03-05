import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'

// Importing the Components and Pages
import Layout from './Layout';
import LoginPage from './components/LoginPage'
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import Staff from './pages/Staff';
import AdmissionPage from './pages/AdmissionPage';
import FacilityPage from './pages/FacilityPage';
import { ToastContainer } from 'react-toastify';

// Axios Configuration for the Client


function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<LandingPage/>}/>
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/home' element={<HomePage/>} />
        <Route path='/staff' element={<Staff/>} />
        <Route path='/enroll' element={<AdmissionPage/>} />
        <Route path='/facility' element={<FacilityPage/>} />
      </Route>
    </Routes>
  )
}

export default App
