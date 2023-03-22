import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SIGNUP } from '../utils/Auth';

import sts from '../assets/sts.png'


const AdmissionPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [date_of_birth, setDateOfBirth] = useState('');
  const [telephone, setTelephone] = useState('');
  const [loading, setLoading] = useState('');

  // Register A Student
  const registerUser = (e) => {
    e.preventDefault();
    setLoading(true);
    const userData = {
      firstName,
      lastName,
      email,
      password,
      gender,
      address,
      date_of_birth,
      telephone,
    }
    SIGNUP(userData, setLoading, (data) => {
      setLoading(false)
      console.log(data)
      toast.success('Registration Successful', {
        position: 'top-center'
      })
    })
  }
  return (
    <div className='mt-4 grow flex items-center justify-around'>
      <div className="mb-60 sign-up-pst">
        <img src={sts} width={200}></img>
        <h1 className='text-white text-3xl -mb-2 hidden'>Create a new account</h1>
        <form action="" className='max-w-md mx-auto' onSubmit={registerUser}>

          {/* Name Input Field */}
          <div className="flex gap-2 name-field">
            {/* Fisrt Name */}
            <input type="text" placeholder="First Name"
              value={firstName}
              onChange={e => setFirstName(e.target.value)} />

            {/* Last Name Input */}
            <input type="text" placeholder="Last Name"
              value={lastName} onChange={e => setLastName(e.target.value)} />
          </div>

          {/* Email Input */}
          <input type="email" placeholder="username@domain.com"
            value={email} onChange={e => setEmail(e.target.value)} />

          {/* Date of Birth */}
          <input type="date" value={date_of_birth} onChange={e => setDateOfBirth(e.target.value)} style={{
            color: 'gray'
          }}/>

          {/*Gender Input */}
          <input type="text" placeholder="Gender"
            value={gender} onChange={e => setGender(e.target.value)} />

          {/* Address Input */}
          <input type="text" placeholder="Residential Address"
            value={address} onChange={e => setAddress(e.target.value)} />


          {/* Telephone Input */}
          <input type="text" placeholder="+233 (0)"
            value={telephone} onChange={e => setTelephone(e.target.value)} />


          {/* Password Input */}
          <input type="password" placeholder="Enter Password"
            value={password} onChange={e => setPassword(e.target.value)} />

          {/* Button */}
          <button className="primary signup-btn">
            {loading ? "Loading..." : "Register"}
            {
              loading && <span className="spinner-border border-white-500 spinner-border-sm" role="status" aria-hidden="true"></span>
            }
          </button>
        </form>

        {/* Sign Up Link */}
        <div className="text-center py-2 text-gray-500 -mt-6">
          <p>Already have an account?            <Link to="/login" className="text-white underline">Login</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default AdmissionPage