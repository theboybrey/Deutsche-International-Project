import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify';
import { SIGNUP } from '../utils/Auth';

const AdmissionPage = () => {
  const[firstName, setFirstname] = useState('');
  const[lastName, setLastname] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[gender, setGender] = useState('');
  const[address, setAddress] = useState('');
  const[date_of_birth, setDateOfBirth] = useState('');
  const[telephone, setTelephone] = useState('');
  const[loading, setLoading] = useState('');

  // Register A Student
  const registerUserv = (e) => {
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
    <div>
      

    </div>
  )
}

export default AdmissionPage