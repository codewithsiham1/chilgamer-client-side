// import React, { useContext } from 'react';
// import { AuthContext } from '../Authprovider/Authprovider';

// const Register = () => {
//     const {createuserEmail}=useContext(AuthContext);
//     const handleregister=event=>{
//         event.preventDefault()
//        const form=event.target;
//        const name=form.name.value;
//        const email=form.email.value;
//        const photo=form.photo.value;
//        const password=form.password.value;
//        console.log(name,email,password,photo);
//        createuserEmail(email,password)
//        .then(result=>{
//         console.log("create user firebase",result.user)
//         const createdAt=result?.user?.metadata?.creationTime;
//         const newuser={name,email,photo,password,createdAt};
//         // save newuser datainfo
//         fetch('http://localhost:5000/users',{
//         method:"post",
//         headers:{
//           "content-type":"application/json"
//         },
//         body:JSON.stringify(newuser)
//         })
//         .then(res=>res.json())
//         .then(data=>{
//           console.log("user create",data)
//           if(data.insertedId){
//             console.log("user created in db")
//           }
//         })
//        })
//        .catch(err=>{
//         console.log('errr',err)
//        })

//     }
//     return (
//         <div className='flex flex-col space-y-5 justify-center items-center'>
//             <div>
//                 <h1 className='text-2xl font-bold'>Register Now!</h1>
//             </div>
//           <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//       <form onSubmit={handleregister} className="card-body">
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Name</span>
//           </label>
//           <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered" required />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Email</span>
//           </label>
//           <input type="email" name='email' placeholder="email" className="input input-bordered" required />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Photo URL</span>
//           </label>
//           <input type="text" name='photo' placeholder="Enter Your Photo" className="input input-bordered" required />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Password</span>
//           </label>
//           <input type="password" name='password' placeholder="password" className="input input-bordered" required />
//           <label className="label">
//             <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//           </label>
//         </div>
//         <div className="form-control mt-6">
//           <button className="btn btn-primary">Register</button>
//         </div>
//       </form>
//     </div>
//         </div>
//     );
// };

// export default Register;
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