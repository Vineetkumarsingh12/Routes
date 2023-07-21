import React from 'react'
import loginImg from "../assest/loginImg.jpg";
import Template from '../component/Template';
const Login = ({logHandler}) => {
  
  return (
  <Template title="Welcome Back"
  desc1="Build skills for today, tomorrow, and beyond."
  desc2="Education to future-proof your career."
  image={loginImg}
  formtype="login"
  logHandler={logHandler}
  
  />
  )
}

export default Login
