import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Contact from "./contact";
import Usercart from "./usercart";
import Myprofile from "./myprofile";
import About from "./about";
import Register from "./register";
import Login from "./login";



function UserApp () {
    return (
<>


<HashRouter>

    <Routes>
    <Route exact path="register" element={<Register />} />
        <Route exact path="/" element={<Home />}  />
            
     
        <Route exact path="/aboutpath" element={<About />} />
        
        <Route exact path="/contactpath" element={<Contact />} />
        <Route exact path="/cartpath" element={<Usercart />} />
        <Route exact path="/profilepath" element={<Myprofile />} />
       <Route exact path="/registerpath" element={<Register />} />
       <Route exact path="/login" element={<Login />} />


    </Routes>



</HashRouter>


        </>
    )
}
export default UserApp;