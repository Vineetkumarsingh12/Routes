import { Routes,Route } from "react-router-dom"
import "./App.css"
import Navbar from  "./component/Navbar";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import { useState } from "react";
import PrivateRoute from "./component/PrivateRoute";

function App() {
  const [isLogin,logHandler]=useState(false);
  return (
    <div  className="w-screen h-screen bg-black flex flex-col text-white  overflow-x-hidden">

      <Navbar  isLogin={isLogin} logHandler={logHandler}/>

<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/Dashboard" element={
  <PrivateRoute isLogin={isLogin} >
<Dashboard/>
</PrivateRoute>}/>


<Route path="/signup" element={<Signup logHandler={logHandler} />}/>
<Route path="/Login" element={<Login logHandler={logHandler} />}/>
</Routes>
</div>

  );
}

export default App;
