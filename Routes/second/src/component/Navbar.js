import React from 'react';
import logo from '../assest/logo.png';
import { Link } from 'react-router-dom';
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = ({isLogin,logHandler}) => {

  return (
    <div className='flex justify-evenly  items-center w-11/12 max-w-[1160px] py-4 mx-auto '>
      <div>
      <Link to="/">
      <img src={logo} alt="logo" width= "160px"  height= "32px" loading="lazy" className='my-1 rounded-md'/>

      </Link>
      <nav >
        <ul className='flex flex-row gap-x-6 '>
            <li className=' pr-1 border-r-2'>
                <Link to="/">Home</Link>
            </li>
            <li className=' pr-1 border-r-2'>
                <Link to="/">About</Link>
            </li>
            <li className=' pr-1 border-r-2'>
                <Link to="/">contact</Link>
            </li>
           
        </ul>
      </nav>
      </div>
<div className='flex flex-center items-center gap-x-4'>
  {

 !isLogin ? <div className='flex flex-row justify-between gap-3'>
<Link to="/login">
  <button  className=' bg-gray-800 text-white py-[8px] px-[12px] rounded-[8px] border border-gray-700'>
    Login
  </button>
</Link>
<Link to="/signup">
  <button className=' bg-gray-800 text-white py-[8px] px-[12px] rounded-[8px] border border-gray-700'>
   Sign&nbsp;Up
  </button>
</Link>

</div>:<div className='flex flex-row justify-between gap-3'><Link to="/">
  <button className=' bg-gray-800 text-white py-[8px] px-[12px] rounded-[8px] border border-gray-700' >
    Log Out
  </button>
</Link>


<Link to="/dashboard">
  <button className=' bg-gray-800 text-white py-[8px] px-[12px] rounded-[8px] border border-gray-700'>
    Dashboard
  </button>
</Link></div>
  }
  
</div>

    </div>
  )
}

export default Navbar
