import React from 'react'
import { useNavigate } from 'react-router-dom';

const School = () => {
    const navigate=useNavigate();
    function backHandler(){
    navigate("/");
    }
  return (
    <div>
         <div>
      This is School
      </div>
      <button onClick={backHandler}>Go back HomePage</button>
     
    </div>
  )
}

export default School;
