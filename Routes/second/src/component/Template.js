import React from 'react'
import SignForm from './SignForm';
import {FcGoogle} from "react-icons/fc";
import  imageFrame  from "../assest/filter.png";
import LoginForm from './LoginForm';
const Template = ({title,desc1,desc2,image,formtype,logHandler}) => {
  return (
    <div className='flex flex-row w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 justify-center bg-black  h-screen'>
        <div className='w-11/12 max-w-[450px]'>
<h1 className='text-[1.875rem] leading-[2.375rem]'>{title}</h1>
<p className='text-[1.125rem] leading-[1.625rem] mt-4'>
    <span>{desc1}</span>
  <br/>
    <span className='tex text-blue-300 italic'>{desc2}</span>
</p>
    {
    formtype==="signup" ? <SignForm logHandler={logHandler}/>:<LoginForm logHandler={logHandler}/>
    }
<div className='flex flex-row w-full  items-center my-4 gap-x-2'>
<div className='h-[1px] bg-gray-700 w-full'></div>
<p className=' text-gray-700'>
    OR </p>
<div className='h-[1px] bg-gray-700 w-full'></div>
</div>
<button className='flex flex-row w-full justify-center items-center rounded-[8px] text-[1rem] border border-gray-700 px-[12px] gap-x-2 mt-6  py-[2px]'>
    <FcGoogle/>
    <p>Sign  Up with Google</p>
</button>
</div>
<div className='relative w-11/12 max-w-[450px]  hidden md:block'>
    <img src={imageFrame} alt="imageFrame" width={556} height={600} loading='lazy'/>
    <img src={image} alt="imageFrame" width={556} height={504} className='absolute -top-4 right-4' loading='lazy'/>
</div>
    </div>
  )
}

export default Template;
