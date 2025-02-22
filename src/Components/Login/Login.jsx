import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const handlelogin=event=>{
        const form=event.target;
        
    }
    return (
        <div className='flex flex-col justify-center items-center'>
            <div>
                <h1 className='text-2xl font-bold'>Login Now!</h1>
            </div>
             <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" class="input input-bordered" required />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" class="input input-bordered" required />
          <label class="label">
            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
           <NavLink to="/register"> <button className='btn'>Register</button></NavLink>
        </div>
    );
};

export default Login;