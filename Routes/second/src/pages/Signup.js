import React from 'react'
import Template from '../component/Template';
import signupImg from "../assest/loginImg.jpg"
const Signup = ({logHandler }) => {
console.log("signup")
  return (
    <div>
      <Template 
      title="Join the millions learning to code with studyNoation for free"
      desc1="Build skills for today, tomorrow , and beyond."desc2="Education to future-proof your career."
      image={signupImg}
      formtype="signup"
      logHandler={logHandler}
      />
    </div>
  )
}

export default Signup
