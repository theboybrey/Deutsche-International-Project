import React, { useState } from 'react'
import '../styles/LoginScreen.css'
import { Link } from 'react-router-dom';

const RecoverPassword = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    return (
        <div className='p-8 '>
            {/* Go Back Button */}
            <Link to={`/login`} className="absolute left-0 top-o go-back-btn flex gap-1 px-8 ">
                <div className="back-btn-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-6 justify-center items-center flex mt-[0.5] ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                </div>
                <p className='text-[18px]'>Back</p>
            </Link>
            <div className="justify-center flex grow ">
                <form className="min-h-screen flex pass-recovery-section fixed items-center py-12 px-4 sm:px-6 lg:px-8 justify-center ">
                    <div className="flex flex-col items-center justify-center">
                        <h2 className='mb-3 font-semibold text-2xl '>Recover Your Password</h2>
                        <p className='w-[50%] mb-6'><span className='font-bold'>Enter the email</span>       that you used when register to recover your password. You will receive a <span className='font-bold'>Password Reset Link.</span>
                        </p>

                        {/* Email Section */}
                        <div className="email-input-section flex flex-col gap-1 justify-left">
                            <label htmlFor="">Email</label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none relative block px-3 py-3 border  bg-gray-50
                                border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-black-500 focus:border-black-500 focus:z-10 sm:text-sm"
                                placeholder="Enter Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {/* Submit Button */}

                            <div className="btn justify-center mt-3 w-full">
                                <Link to={'#'} className="bg-black text-white py-3 px-5 flex gap-2 after:w-full z-[2] after:absolute relative after:h-full  after:left-0 after:top-0 after:-z-[1] hover:after:opacity-0 after:opacity-100  after:scale-75 hover:after:scale-150 after:transition-all after:duration-700  flex items-center gap-1 px-4  p-2 h-12 rounded-sm group justify-center after:bg-black w-full rounded-lg justify-center w-full">Send Recovery Link</Link>
                            </div>

                            {/* Team Support Link */}
                            <div className="flex items-center justify-center support-team">
                                <p>
                                    If you need further assistance contact <Link to={''}
                                        className=" align-baseline font text-md text-blue-500 hover:text-blue-800" href="#">
                                        Support Team
                                    </Link></p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RecoverPassword