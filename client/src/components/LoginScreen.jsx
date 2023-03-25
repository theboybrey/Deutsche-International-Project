import React, { useState } from 'react';
import { LOGIN } from '../utils/Auth';
import { useStateValue } from '../context/stateProvider';
import '../styles/LoginScreen.css'
import LoginBg from '../assets/signInImg.png'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [{ user }, dispatch] = useStateValue();


    // Login Functionality
    const login = (e) => {
        e.preventDefault();
        setLoading(true);
        const userInfo = {
            email: email,
            password: password
        }
        LOGIN(userInfo, setLoading, (data) => {
            setEmail('');
            setPassword('');
            setLoading(false);
            dispatch({
                type: 'SET_USER',
                payload: data.data
            })
            console.log(data.data)
            window.location.href = '/apply';
        })
    }

    // const login = async (event) => {
    //     event.preventDefault();
    //     setLoading(true);
    //     try {
    //         await login(email, password);
    //     } catch (error) {
    //         console.log('Failed to log in:', error);
    //     }
    //     setLoading(false);
    // };

    return (
        <div className="grid userLogin grid-cols-2 ">
            {/* Login Section */}
            <div className="flex flex-col flex flex-wrap-reverse gap-6 p-5 font-gilroy min-h-screen items-center max-w-7xl mx-auto w-full justify-around justify-center items-center">
                <form onSubmit={login} action="" className="login-data-form">
                    <h2 className="text-xl font-bold py-2 mb-6">deutscheinternationalschool</h2>
                    <h1 className="text-2xl my-2 font-semibold">Akwaaba!</h1>
                    <p className="text-xl my-2">That's Our Way of Welcoming You Back.</p>

                    {/* Email and Password Sections */}
                    <label htmlFor="email" className='px-1 py-2 text-lg '>Email</label>
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
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
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {/* Forgot Password Component */}
                    <div className="flex items-center justify-end ">
                        <Link to={'/forgot-password'} className="inline-block align-baseline font text-md text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </Link>
                    </div>

                    {/* Submit Button */}

                    <div className="btn justify-center mt-3 w-full">
                        <button to={'#'}
                            type='submit'
                            disabled={loading}
                            className="bg-black text-white py-3 px-5 flex gap-2 after:w-full z-[2] after:absolute relative after:h-full  after:left-0 after:top-0 after:-z-[1] hover:after:opacity-0 after:opacity-100  after:scale-75 hover:after:scale-150 after:transition-all after:duration-700  flex items-center gap-1 px-4  p-2 h-12 rounded-sm group justify-center after:bg-black w-full rounded-lg justify-center w-full">
                            {loading ? `Logging in...` : `Sign in`}
                        </button>
                    </div>

                        {/* Sign Up Link */}
                        <p className="justify-start -mt-4 align-start">Don't have an account yet? <Link 
                        to={'/register'}
                        className='underline font-semibold'>Sign Up Now</Link> </p>
                </form>
            </div>

            {/* Image Advertisement Section */}
            <div className="w-full login-img-ads hidden md:flex  max-w-lg  h-[70vh] relative  flex-col justify-end top-0 left-0 after:h-full after:absolute after:w-full after:bg-gradient-to-b  after:from-transparent after:via-transparent after:to-black hover:scale-[1.06] hover:z-[2]  hover:backdrop-blur-lg transition-all hover:outline hover:outline-2 hover:outline-offset-8 outline-black rounded-3xl overflow-hidden">
                <img
                    width={'1410'}
                    height={'1058'}
                    src={LoginBg}
                    className='w-full  object-cover h-full absolute'></img>
                <h3 className="z-[1] text-white px-6 py-2 lg:text-lg font-sora">“ We appreciate the school's emphasis on diversity, equity, and inclusion. Our daughter has been exposed to a wide range of cultures and perspectives. ”</h3>
                <h4 className="z-[1] text-white px-6 pb-5 text-sm font-sora">Mrs. Nathalie Offei Ansah, Parent</h4>
            </div>
        </div>
    );
};

export default LoginScreen;
