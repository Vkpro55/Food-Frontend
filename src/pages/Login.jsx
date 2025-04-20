import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [formData, setFormData] = useState({
        phone: '',
        password: ''
    });

    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg('');
        setSuccessMsg('');

        try {
            const backendURL = import.meta.env.VITE_BACKEND_BASE_URL;
            const res = await axios.post(`${backendURL}/api/v1/user/login`, formData);

            const token = res.data.data;
            console.log(token);

            const decoded = jwtDecode(token);
            console.log("decoded is:", decoded);

            login({ token, user: decoded });

            setSuccessMsg('Login successful!');

            setTimeout(() => {
                navigate('/', { replace: true });
            }, 2000);

        } catch (error) {
            const msg = error?.response?.data?.message || 'Login failed. Please try again.';
            setErrorMsg(msg);
        }
    };

    return (
        <div className='singup-section'>
            <form className="signup-form" onSubmit={handleSubmit}>
                <h2>Login</h2>

                {successMsg && <p style={{ color: 'green' }}>{successMsg}</p>}
                {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}

                <label htmlFor="phone">Phone</label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone"
                    required
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                />

                <button className='button' type="submit">Login</button>

                <p>Don't have an account? <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => navigate('/signup')}>Signup</span></p>
            </form>
        </div>
    );
};

export default Login;
