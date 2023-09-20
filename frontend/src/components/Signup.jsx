import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      let res = await fetch('http://localhost:8000/users/signup', {
        method: "post",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      });
      if (res.status === 201) {
        navigate('/login');
      }
      res = await res.json();
      if (res.error) {
        setError(res.error);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='p-10 m-auto w-1/2 flex justify-evenly my-20'>
      <div>
        <img src="data:image/png;base64,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"></img>
      </div>
      <div className='flex flex-col space-y-4'>
        <div className='text-slate-400 font-bold text-lg'>INTRODUCE YOURSELF</div>
        {error && <div className='text-red-500'>{error}</div>}
        <div className='flex flex-col space-y-2'>
          <label className='text-2xl'>Hi there! My name is</label>
          <input value={name} onChange={(e) => setName(e.target.value)} className='border-2 h-10' type="text"></input>
        </div>
        {
          name && <div>
            <div className='flex flex-col space-y-2'>
              <label className='text-xl'>Here's my <strong>email address:</strong></label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} className='border-2 h-10' type="text"></input>
            </div>
            <div className='flex flex-col space-y-2'>
              <label className='text-xl'>And here's my <strong>password:</strong></label>
              <input value={password} onChange={(e) => setPassword(e.target.value)} className='border-2 h-10' type="text"></input>
            </div>
          </div>
        }
        <button onClick={handleSignup} className='bg-orange-400 p-2 rounded text-white font-bold shadow-lg'>Sign me up!</button>
      </div>
    </div>
  )
}

export default Signup;