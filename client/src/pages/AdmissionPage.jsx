import React, { useState } from 'react'
import '../styles/AdmissionPage.css'

// Importing the Logo
import sts from '../assets/sts.png'

const AdmissionPage = () => {
  const [loading, setLoading] = useState(false)

  return (
    <div className='-ml-8 grow flex items-center justify-around'>
      <div className="admission-section mb-64 flex">
        {/* Login Option */}
        <div className="user-login-section">

          <div className="login-logo mb-4">
            <img src={sts} alt="STS Logo" width={250} />
          </div>

          <form action="" className='max-w-md me-auto'>

            {/* Username Input */}
            <div className="username-part flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>

              <input type="text" placeholder='SERIAL PIN' />
            </div>

            {/* Student PIN Input */}

            <div className="passcode-part flex gap-2">

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
              </svg>


              <input type="password" placeholder='PASSCODE' />
            </div>

            {/* Button */}
            <div className="btn-container">
              <button className="primary-btn" >
                {loading ? 'Loading...' : 'Login'}

                {
                  loading && <span className="spinner-border border-gray-500 spinner-border-sm" role="status" aria-hidden="true"></span>
                }
              </button>
            </div>

          </form>
        </div>
      </div>

    </div>
  )
}

export default AdmissionPage