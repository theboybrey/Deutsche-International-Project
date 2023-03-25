import React, { useState } from 'react';
import { LOGIN } from '../utils/Auth';
import { useStateValue } from '../context/stateProvider';
import '../styles/LoginScreen.css'
import schLogoIcon from '../assets/sch-logo-login.png'
import { Link } from 'react-router-dom';

const Staff = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [{user}, dispatch] = useStateValue();


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
            window.location.href = '/admin';
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
        <div className="flex flex-col justify-center items-center min-h-screen bg-white-100">
            <div className="bg-white border shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4 flex flex-col w-full md:w-1/2 lg:w-1/3">
                <form onSubmit={login} className="mb-4">
                    <div className="logo-header items-center my-2">
                        <img src={schLogoIcon} alt="Admin Icon" width={70} />
                        <p className="text-black  font-bold ">deutscheinternational</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font mb-1" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            className=" rounded appearance-none border  w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="example@domain.com"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font mb-1" htmlFor="password">
                            Password
                        </label>
                        <input
                            className=" appearance-none border rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            placeholder="Enter Password"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                    <button
                            className="login-btn w-full hover:bg-blue-700 text-white font py-2 pt-2 pb-4 rounded focus:outline-none focus:shadow-outline after:w-full z-[2] after:absolute relative after:h-full after:left-0 after:top-0 after:-z-[1] hover:after:opacity-0 after:opacity-100 after:scale-75 hover:after:scale-150 after:transition-all after:duration-700 flex items center gap-1 group justify-center after:bg-black w-full rounded-lg justify center w-full "
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? `Logging in...`: 'Sign in'}
                        </button>
                    </div>
                </form>
                <div className="flex items-center justify-center">
                    <Link to={'/forgot-password'} className="inline-block align-baseline font text-sm text-blue-500 hover:text-blue-800" href="#">
                        Forgot Password?
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Staff;
