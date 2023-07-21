import React from 'react';
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const SignForm = ({logHandler}) => {
  let navigate=useNavigate();
    const [hide, showPassword]=useState(true);
    const [hide1, showPassword1]=useState(true);
    const [formData,setForm]=useState({firstname:"",lastname:"",email:"",password1:"",password2:""
         
     });
     const [actype,actypeHandler]=useState("student");
     function changHandler(event){
         let {name,value,checked,type}=event.target;
         setForm((prev)=>{
             return ({...prev,[name]:type==="checkbox"?checked:value})
         })
 
     }
     function submitHandler(event){
      event.preventDefault();
      if(formData.password1!==formData.password2)
    {
toast.error("Password not match");
return;
    }
    toast.success("Account Created Successfully");
    navigate("/login");

            }
  return (
    <div className='flex flex-col'>
      <div className='flex flex-row   bg-gray-800 p-1 gap-4   my-6 rounded-full max-w-max'>
        <button onClick={()=>actypeHandler("student")}  className={`${actype==="student"? "bg-black":" bg-gray-800 text-gray-300"} rounded-full p-2`}>Student</button>
        <button onClick={()=>actypeHandler("Instructor") } className={`${actype==="Instructor"? "bg-black":" bg-gray-800 text-gray-300"} rounded-full p-2`}>Instructor</button>
      </div>
  
      <form onSubmit={submitHandler}>
        <div className='flex flex-row justify-between gap-1'>
        <label>
            <p className='text-[0.875] mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-400'>*</sup></p>
            <input required type="text" name='firstname'
            onChange={changHandler}
            value={formData.firstname}
            className=' bg-gray-500 rounded-[0.5rem] w-full p-[12px] border-b-2'/>

        </label>
        <label>
            <p className='text-[0.875] mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-400'>*</sup></p>
            <input required type="text" name='lastname'
            onChange={changHandler}
            value={formData.lastname}
            className=' bg-gray-500 rounded-[0.5rem] w-full p-[12px] border-b-2'/>

        </label>
        </div>
        <div>
        <label>
            <p className='text-[0.875] mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-400'>*</sup></p>
            <input required type="email" name='email'
            onChange={changHandler}
            value={formData.email}
            className=' bg-gray-500 rounded-[0.5rem] w-full p-[12px] border-b-2'/>

        </label>
        </div>
        <div className='flex flex-row justify-between gap-1'>
        <label className='relative'>
            <p className='text-[0.875] mb-1 leading-[1.375rem]'> Create Password<sup className='text-pink-400'>*</sup></p>
            <input required  type={hide ? 'password' : 'text'}name='password1'
            onChange={changHandler}
            value={formData.password1} className='bg-gray-500 rounded-[0.5rem] w-full p-[12px] border-b-2'/>
           
            <span className="absolute right-3 top-[38px] cursor-pointer" onClick={()=>showPassword(prev=>!prev)}>{!hide?<AiOutlineEye/>:<AiOutlineEyeInvisible/>}</span>
          

        </label>
        <label className='relative'>
            <p className='text-[0.875] mb-1 leading-[1.375rem]'>Conform Password<sup className='text-pink-400'>*</sup></p>
            <input required type={hide1 ? 'password' : 'text'}name='password2'
            onChange={changHandler}
            value={formData.password2} className=' bg-gray-500 rounded-[0.5rem] w-full p-[12px] border-b-2' />
         <span className='absolute right-3 top-[78px] cursor-pointer' onClick={()=>showPassword1(prev=>!prev)}>{!hide1?<AiOutlineEye/>:<AiOutlineEyeInvisible/>}</span>

        </label>
        </div>
        <button  className='w-full  bg-yellow-500 rounded-md py-2 mt-6'>Create Account</button>
      </form>
    </div>
  )
}

export default SignForm;
