import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const loginHandler = async () => {
        try {
            const response = await axios.post(
                'http://localhost:5000/api/users/login',
                {
                    email,
                    password,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            const { token } = response.data;
            localStorage.setItem('token', token);

            alert('✅ Login successful!');
            navigate('/home');
        } catch (err) {
            console.error('Login error:', err);
            alert('❌ Login failed');
        }
    };

    return (
        <div className="background-video-container"> {/* ✅ Added: full screen background */}
            <video
                className="background-video"
                src="/assets/luxary-bg2.mp4"   /* ✅ Updated to new video in public/assets/ */
                autoPlay
                loop
                muted
                />


            <div className="form-wrapper">                {/* ✅ Added: center form */}
                <div className="form-container">           {/* ✅ Added: luxury form box */}
                    <div className="form-header">           {/* ✅ Added */}
                        <h2>Login</h2>                        {/* ✅ Added */}
                        <p className="form-subtitle">Welcome back! Please login to your account</p> {/* ✅ Added */}
                    </div>

                    {/* Input Fields */}
                    <div className="form-group input-with-icon">  {/* ✅ Added: icon input wrapper */}
                        <span className="input-icon material-icons">email</span> {/* ✅ Added */}
                        <input
                            type="email"
                            className="form-input"                     /* ✅ Added: styled input */
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-group input-with-icon">  {/* ✅ Added: icon input wrapper */}
                        <span className="input-icon material-icons">lock</span>  {/* ✅ Added */}
                        <input
                            type="password"
                            className="form-input"                 /* ✅ Added: styled input */
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* Submit Button */}
                    <button className="submit-button" onClick={loginHandler}>  {/* ✅ Added: styled button */}
                        Login
                    </button>

                    {/* Footer */}
                    <div className="form-footer">                                {/* ✅ Added */}
                        <span>Don't have an account? </span>
                        <span
                            className="form-link"                                     /* ✅ Added: link style */
                            onClick={() => navigate('/')}
                        >
              Register
            </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
