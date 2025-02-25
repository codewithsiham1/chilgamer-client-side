
import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Authprovider/Authprovider';
import "./Login.css";

const Login = () => {
    const { loginUserEmail, googleSignIn, githubSignIn } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        loginUserEmail(email, password)
            .then(() => {
                localStorage.setItem('userEmail', email);
                navigate('/');
            })
            .catch((err) => {
                setError(err.message);
            });
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => navigate('/'))
            .catch((err) => setError(err.message));
    };

    const handleGithubSignIn = () => {
        githubSignIn()
            .then(() => navigate('/'))
            .catch((err) => setError(err.message));
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Login</button>
            </form>
            <div className="social-login">
                <button onClick={handleGoogleSignIn}>Login with Google</button>
                <button onClick={handleGithubSignIn}>Login with GitHub</button>
            </div>
            <p>Don't have an account? <NavLink to="/register">Register</NavLink></p>
        </div>
    );
};

export default Login;