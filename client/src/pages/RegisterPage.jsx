import React from 'react';
import SideBar from '../components/SideBar';
import { Link, Routes, Route } from 'react-router-dom';
import Admission from '../components/Admission';
import PendingAdmission from '../components/PendingAdmission';
import ApprovedAdmission from '../components/ApprovedAdimission';
import DeclinedAdmission from '../components/DeclinedAdmission';
import '../styles/LoginScreen.css'


const RegisterPage = () => {
  return (
    <div className="flex register-section h-screen bg-white-200">
      <SideBar />
      <Admission />
      <div className="admin-nav-link flex gap-8 py-4 px-8">
        <Link to={'/admin/admission/pending'}>Pending Approval</Link>
        <Link to={'/admin/admission/approved'}>Approved</Link>
        <Link to={'/admin/admission/declined'}>Declined</Link>
      </div>

      {/* Routing the Admin Interfaces */}
      <Routes>
        <Route path='/admission/pending' element={<PendingAdmission />} />
        <Route path='/admission/approved' element={<ApprovedAdmission />} />
        <Route path='/admission/declined' element={<DeclinedAdmission />} />
      </Routes>
    </div>
  );
}

export default RegisterPage;