import React, { useState } from 'react';
import { LOGIN, SIGNUP } from '../utils/Auth';
import { useStateValue } from '../context/stateProvider';
import SignUpBg from '../assets/signUpImg.png'
import { Link, useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';


const AdmissionPage = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [{ user }, dispatch] = useStateValue();
    const navigate = useNavigate();


    // Sign Up Functionality
    const registerUser = (e) => {
        e.preventDefault();
        setLoading(true);
        const userData = {
            fullName,
            email,
            password,
            confirmPassword,
        }
        SIGNUP(userData, setLoading, (data) => {
            setLoading(false);
            console.log(data)
            navigate('/login');
            toast.success('Registration Successful', {
                position: 'top-center'
            })
        })
    }

    return (
        <div className="grid userLogin grid-cols-2 ">
            {/* Login Section */}
            <div className="flex flex-col flex flex-wrap-reverse gap-6 p-5 font-gilroy min-h-screen items-center max-w-7xl mx-auto w-full justify-around justify-center items-center">
                <form onSubmit={registerUser} action="" className="login-data-form">
                    <h2 className="text-xl font-bold py-2 mb-6">deutscheinternationalschool</h2>
                    <h1 className="text-2xl my-2 font-semibold">Sign Up To Enroll Your Ward</h1>
                    <p className="text-xl my-2">Welcome to Our Online Admission Portal</p>

                    {/* FullName, Email and Password Sections */}
                    <label htmlFor="fullName" className='px-1 py-2 text-lg '>FullName</label>
                    <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        autoComplete=''
                        required
                        className="appearance-none rounded-none relative block px-3 py-3 border  bg-gray-50 border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none mb-3 focus:ring-black-500 focus:border-black-500 focus:z-10 sm:text-sm"
                        placeholder="Nathan Ansong"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />

                    <label htmlFor="email" className='px-1 py-2 text-lg '>Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete='email'
                        required
                        className="appearance-none rounded-none relative block px-3 py-3 border  bg-gray-50 border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none mb-3 focus:ring-black-500 focus:border-black-500 focus:z-10 sm:text-sm"
                        placeholder="Enter Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {/* <br /> */}

                    {/* Password Section */}
                    <label htmlFor="password" className='px-1 py-2 text-lg'>Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="password"
                        required
                        className="appearance-none rounded-none relative block px-3 py-3 border  bg-gray-50 border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none mb-3 focus:ring-black-500 focus:border-black-500 focus:z-10 sm:text-sm"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {/* Confirm Password
                    <label htmlFor="confirm-password" className='px-1 py-2 text-lg'>Confirm Password</label>
                    <input
                        id="confirm-password"
                        name="confirm-password"
                        type="confirm-password"
                        autoComplete="password"
                        required
                        className="appearance-none rounded-none relative block px-3 py-3 border  bg-gray-50 border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none mb-3 focus:ring-black-500 focus:border-black-500 focus:z-10 sm:text-sm"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    /> */}

                    

                    {/* Submit Button */}

                    <div className="btn justify-center mt-3 w-full">
                        <button to={'#'}
                            type='submit'
                            disabled={loading}
                            className="bg-black text-white py-3 px-5 flex gap-2 after:w-full z-[2] after:absolute relative after:h-full  after:left-0 after:top-0 after:-z-[1] hover:after:opacity-0 after:opacity-100  after:scale-75 hover:after:scale-150 after:transition-all after:duration-700  flex items-center gap-1 px-4  p-2 h-12 rounded-sm group justify-center after:bg-black w-full rounded-lg justify-center w-full">
                            {loading ? "Loading..." : "Register"}
                            {
                                loading && <span className="spinner-border border-white-500 spinner-border-sm" role="status" aria-hidden="true"></span>
                            }
                        </button>
                    </div>

                    {/* Sign Up Link */}
                    <p className="justify-start -mt-4 align-start">Already have an account? <Link
                        to={'/login'}
                        className='underline font-semibold'>Login</Link> </p>
                </form>
            </div>

            {/* Image Advertisement Section */}
            <div className="w-full login-img-ads hidden md:flex  max-w-lg  h-[70vh] relative  flex-col justify-end top-0 left-0 after:h-full after:absolute after:w-full after:bg-gradient-to-b  after:from-transparent after:via-transparent after:to-black hover:scale-[1.06] hover:z-[2]  hover:backdrop-blur-lg transition-all hover:outline hover:outline-2 hover:outline-offset-8 outline-black rounded-3xl overflow-hidden">
                <img
                    width={'1410'}
                    height={'1058'}
                    src={SignUpBg}
                    className='w-full  object-cover h-full absolute'></img>
                <h3 className="z-[1] text-white px-6 py-2 lg:text-lg font-sora">“ We appreciate the school's emphasis on diversity, equity, and inclusion. Our daughter has been exposed to a wide range of cultures and perspectives. ”</h3>
                <h4 className="z-[1] text-white px-6 pb-5 text-sm font-sora">Mr. Nathan Offei Ansah, Parent</h4>
            </div>
        </div>
    );
};

export default AdmissionPage;
