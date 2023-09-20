import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleLogin = async () => { 
    try {
      let res = await fetch('http://localhost:8000/users/login', {
        method: "post",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      });
      res = await res.json();
      if (res.error) {
        setError(res.error);
      }
      Cookies.set('token', res.token);
      if (res.token) {
        navigate('/dashboard');
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='w-full min-h-screen m-0 p-0 bg-slate-100'>
      <div className='py-5 px-10 lg:px-20 flex justify-between'>
        <div className='text-2xl text-slate-500 font-bold'><Link to='/'>Splitwise Clone</Link></div>
        <div className='space-x-2'>
          <button className='text-green-500 font-medium hover:cursor-pointer'><Link to='/login' >Login</Link></button>
          <button className='p-2 text-white bg-green-500 font-medium rounded shadow-md hover:cursor-pointer'><Link to='/signup'>Signup</Link></button>
        </div>
      </div>
      <div className='w-auto m-2 sm:m-auto sm:w-1/2 h-[400px] shadow-xl rounded-xl bg-white p-10 flex flex-col space-y-4'>
        <div className='text-2xl'>Log in</div>
        {error && <div className='text-red-500'>{error}</div>}
        <div className='flex flex-col space-y-2'>
          <label className='text-lg'>Email address</label>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} className='border-2 h-10' type='email'></input>
        </div>
        <div className='flex flex-col space-y-2'>
          <label className='text-lg'>Password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} className='border-2 h-10' type='password'></input>
        </div>
        <button className='bg-green-500 p-2 rounded mx-5 text-lg font-bold text-white shadow-md hover:pointer' 
        onClick={handleLogin}>Log in</button>
        <div className='text-center text-green-500 font-bold'>Forgot your password ?</div>
      </div>
    </div>
  )
}

export default Login;