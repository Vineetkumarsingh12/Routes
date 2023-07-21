import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginForm = ({ logHandler }) => {
  const navigate = useNavigate();
  const [hide, showPassword] = useState(true);
  const [formData, setForm] = useState({
    email: '',
    password: ''
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    logHandler(true);
    console.log('submit');
    toast.success('Login successful');
    navigate('/dashboard');
  }

  return (
    <div>
      <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
        <label>
          <p  className='text-[0.875] mb-1 leading-[1.375rem]'>
            Email Address<sub className='tex text-pink-200'>*</sub>
          </p>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            placeholder="abc@gmail.com"
            onChange={changeHandler}
            className=' bg-gray-500 rounded-[0.5rem] w-full p-[12px] border-b-2'
          />
        </label>

        <label className='relative'>
          <p className='text-[0.875] mb-1 leading-[1.375rem]'>
            Password<sup>*</sup>
          </p>
          <input
            required
            type={hide ? 'password' : 'text'}
            value={formData.password}
            name="password"
            onChange={changeHandler}
            placeholder="avc123"
            className=' bg-gray-500 rounded-[0.5rem] w-full p-[12px] border-b-2'
          />
          <span className="absolute right-3 top-[38px] cursor-pointer " onClick={() => showPassword(prev => !prev)}>
            {!hide ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </span>
          <Link to="#">
            <p className='text-xs mt-1 text-blue-400 max-w-max ml-auto  '>Forgot Password</p>
          </Link>
        </label>
        <button className='w-full bg-yellow-500 rounded-[8px] font-medium text-black px-[12px]  py-[8px]'>Sign in</button>
      </form>
    </div>
  );
};

export default LoginForm;
// max-w-max;
// ml-auto ;