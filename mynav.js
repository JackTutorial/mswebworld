import png1 from "./image/png1.png";
import React from "react";

import { Link } from 'react-router-dom';

const Mynav = () => {
    return (

        <nav className="navbar navbar-expand-sm navbar-dark p-1 m-0" id="nav">
            
            <div className="container-fluid">
            <a className="navbar-brand text-danger">
                    <img src={png1} width="30px" height="30px" />  Body Building
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                    
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item px-4 text-warning " id="li1" ><Link className="nav-link active text-dark" to="/" > 
                                <i className="fa fa-home"> Home </i> 
                                </Link></li>
                            <li className="nav-item px-4 " id="li1" ><Link className="nav-link active text-dark" to="/aboutpath" ><i className="fa fa-book"> </i>About</Link></li>
                            
                            <li className="nav-item px-4" id="li1" ><Link className="nav-link active text-dark" to="/contactpath" ><i className="fa fa-user"> </i>Contact </Link></li>
                            <li className="nav-item px-4" id="li1" ><Link className="nav-link active text-dark" to="/cartpath" ><i className="fa fa-cart-plus text-warning"></i>  Cart</Link></li>
                            <li className="nav-item px-4" id="li1" ><Link className="nav-link active text-dark" to="/profilepath" ><i className="fa fa-user">  </i>My Profile</Link></li>
                        </ul>

                  
                </div>
                <div >
                 <Link to='/login'>  <button className="btn btn-info btn-sm" id="btnlogin">
                    < i class="fa fa-sign-in"></i>  Login</button></Link> 
                </div>
            </div>
        </nav>
    )
}
export default Mynav;