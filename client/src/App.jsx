import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'

// Importing the Components and Pages
import Layout from './Layout';
import LoginPage from './components/LoginPage'
import LoginScreen from './components/LoginScreen'
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import Staff from './pages/Staff';
import AdmissionPage from './pages/AdmissionPage';
import FacilityPage from './pages/FacilityPage';
import { ToastContainer } from 'react-toastify';
import RecoverPassword from './components/RecoverPassword';
import EnrollmentPage from './pages/EnrollmentPage';

// Axios Configuration for the Client


function App() {

  return (
    <Routes>
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/admin/*' element={<RegisterPage />} />
      <Route path='/register' element={<AdmissionPage />} />
      <Route path='/staff' element={<Staff />} />
      <Route path='forgot-password' element={<RecoverPassword />} />
      <Route path='/apply' element={<EnrollmentPage/>}/>
      <Route path='/' element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path='/signin' element={<LoginPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/facility' element={<FacilityPage />} />
      </Route>
    </Routes>
  )
}

export default App
