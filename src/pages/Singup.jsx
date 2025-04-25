import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Singup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
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
            const res = await axios.post(`${backendURL}/api/v1/user/signup`, formData);
            if (res.status === 201 || res.status === 200) {
                setSuccessMsg('Signup successful! Redirecting to login...');
                setTimeout(() => navigate('/login'), 2000);
            }
        } catch (error) {
            setErrorMsg(error?.response?.data?.message || 'Something went wrong');
        }
    };

    console.log(successMsg);
    return (
        <div className='singup-section'>
            <form className="signup-form" onSubmit={handleSubmit}>
                <h2>Sign Up</h2>

                {successMsg && <p style={{ color: 'green' }}>{successMsg}</p>}
                {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}

                <label htmlFor="username">Name</label>
                <input
                    type="text"
                    id="username"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                />

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

                <button className="button" type="submit">Create Account</button>

                <p>
                    Already signed up?{" "}
                    <span
                        onClick={() => navigate('/login')}
                        style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}
                    >
                        Login
                    </span>
                </p>
            </form>
        </div>
    );
};

export default Singup;
