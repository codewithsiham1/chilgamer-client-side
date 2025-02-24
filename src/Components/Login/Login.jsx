// import React, { useContext } from 'react';
// import { NavLink } from 'react-router-dom';
// import { AuthContext } from '../Authprovider/Authprovider';

// const Login = () => {
//   const {loginUserEmail}=useContext(AuthContext)
//     const handlelogin=event=>{
//         event.preventDefault()
//         const form=event.target;
//         const  email=form.email.value;
//         const password=form.password.value;
//         const newloginuser={email,password}
//         console.log(newloginuser)
//         loginUserEmail(email,password)
//         .then(result=>{
//           console.log(result.user)
         
//           const lastlogintime=result?.user?.metadata?.lastSignInTime;
//           const loginInfo={email,lastlogintime}
//            fetch(`http://localhost:5000/users`,{
//             method:"PATCH",
//             headers:{
//               "content-type":"application/json"
//             },
//             body:JSON.stringify(loginInfo)
//            })
//            .then(res=>res.json())
//            .then(data=>{
//             console.log("login in info in update",data)
//            })
//         })
//         .catch(error=>{
//           console.log(error)
//         })
//     }
//     return (
//         <div className='flex flex-col justify-center items-center'>
//             <div>
//                 <h1 className='text-2xl font-bold'>Login Now!</h1>
//             </div>
//              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//       <form onSubmit={handlelogin} class="card-body">
//         <div class="form-control">
//           <label class="label">
//             <span class="label-text">Email</span>
//           </label>
//           <input type="email" name='email' placeholder="email" class="input input-bordered" required />
//         </div>
//         <div class="form-control">
//           <label class="label">
//             <span class="label-text">Password</span>
//           </label>
//           <input type="password" name='password' placeholder="password" class="input input-bordered" required />
//           <label class="label">
//             <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
//           </label>
//         </div>
//         <div class="form-control mt-6">
//           <button class="btn btn-primary">Login</button>
//         </div>
//       </form>
//     </div>
//            <NavLink to="/register"> <button className='btn'>Register</button></NavLink>
//         </div>
//     );
// };

// export default Login;
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