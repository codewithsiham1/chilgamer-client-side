
import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Authprovider/Authprovider';
import { updateProfile } from 'firebase/auth';
import "./Register.css";

const Register = () => {
    const { createuserEmail, auth } = useContext(AuthContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            setError('Password must have at least 6 characters, one uppercase, and one lowercase letter.');
            return;
        }
        createuserEmail(email, password)
            .then(result => {
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photoURL
                }).then(() => {
                    localStorage.setItem('userEmail', email);
                    navigate('/');
                }).catch((err) => {
                    setError(err.message);
                });
            })
            .catch((err) => {
                setError(err.message);
            });
    };

    return (
        <div className="auth-container">
            <h2>Register</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleRegister}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <input type="text" placeholder="Photo URL" value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} required />
                <button type="submit">Register</button>
            </form>
            <p>Already have an account? <NavLink to="/login">Login</NavLink></p>
        </div>
    );
};

export default Register;