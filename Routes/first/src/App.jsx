import "./App.css";
import React from "react";
import {NavLink, Route,Routes} from 'react-router-dom';
import School from "./components/School";
import College from "./components/College";
import University from "./components/University";
import HomePage from "./components/HomePage";
import MainPage from "./components/MainPage";

function App() {
  return (
    <div>
      <nav>
        <ul>
   <li> {
        <NavLink to="/">Home</NavLink>
   }
      </li>
   <li>
   {
        <NavLink to="/school">School</NavLink>
   }
   </li>
   <li>
   {
        <NavLink to="/college">college</NavLink>
   }
   </li>
   <li>
   {
        <NavLink to="/university">University</NavLink>
   }
   </li>
   </ul>
      </nav>
<Routes>
  <Route  path="/" element={<MainPage/>}>
<Route index element={<HomePage/>}></Route>
  <Route path="/school" element={<School/>}></Route>
  <Route path="/college" element={<College/>}></Route>
  <Route path="/university" element={<University/>}></Route>

  <Route path="*" element={<div>Page not Found</div>}></Route>
  </Route>
</Routes>
    </div>
  );
}

export default App;
