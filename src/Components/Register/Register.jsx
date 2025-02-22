import React from 'react';

const Register = () => {
    const handleregister=event=>{
        event.preventDefault()
       const form=event.target;
       const name=form.name.value;
       const email=form.email.value;
       const photo=form.photo.value;
       const password=form.password.value;
       const newuser={name,email,photo,password}
       console.log(newuser)
    }
    return (
        <div className='flex flex-col space-y-5 justify-center items-center'>
            <div>
                <h1 className='text-2xl font-bold'>Register Now!</h1>
            </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleregister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name='photo' placeholder="Enter Your Photo" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
        </div>
    );
};

export default Register;