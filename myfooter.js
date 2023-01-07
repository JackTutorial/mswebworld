import { Link } from "react-router-dom";
import icon5 from "./image/icon5.png";
import icon6 from "./image/icon6.png";
import icon7 from "./image/icon7.png";
import icon8 from "./image/icon8.png";
import icon9 from "./image/icon9.png";
import png1 from "./image/png1.png";
import pngfooter from "./image/pngfooter.png";
import Userproducts from "./userproduct";
const Myfooter=()=>{
    return(
        <div className="container-fluid mt-2">
                <div className="row text-warning" id="contact1">
                    <div className="col-lg-4"> <i class="fa fa-thin fa-map"> New Delhi, India</i></div>
                    <div className="col-lg-4"> <i class="fa fa-thin fa-phone"> +91-7019138442</i></div>
                    <div className="col-lg-4">  <i class=" fa fa-envelope">  Support@mswebworld.com</i></div>
                </div>
               
                <div className="row " id="contact2">

                    <div className="col-lg-6">
                        <img src={pngfooter} width="150px" height="150px" />
                        <p className="text-left">A gym is a large room, usually containing special equipment, where people
                            go to do physical
                            exercise and get fit The gym has exercise bikes and running machines.
                            While some guests play golf,
                            others work out in the hotel gym.</p>

                        <img src={icon5} width="40px" height="40px" className="img img-thumbnail" id="img2" />
                        <img src={icon6} width="40px" height="40px" className="img img-thumbnail" id="img2" />
                        <img src={icon7} width="40px" height="40px" className="img img-thumbnail" id="img2" />
                        <img src={icon8} width="40px" height="40px" className="img img-thumbnail" id="img2" />
                        <img src={icon9} width="40px" height="40px" className="img img-thumbnail" id="img2" />



                    </div>
                  

                    <div className="col-lg-3">
                        <h4 className="text-center pt-5">Usefull Links</h4>
                        <p className="text-center">
                          <Link to="/">  Home </Link> <br />
                          <Link to="/aboutpath">  About </Link><br />
                          <Link to="/blog">  Blog </Link><br />
                            <Link to="/contactpath">  Contact </Link></p>


                    </div>
                    <div className="col-lg-3"><h4 className="text-center pt-5">Supports</h4>
                        <p className="text-center"><Link to="/login">Login</Link><br />
                        <Link to="/profilepath">Profile</Link><br />
                        <Link to="/career">Career</Link><br />
                        <Link to="/admn">Adminstretive</Link> </p>
                    <br/>
                    <hr id="hr"/>
                    <p className="text-center text-danger"><i class="fa fa-copyright">Copyrightmswebworld.com 2022-24</i></p>
                </div></div>
                
            </div>
    )
}

export default Myfooter;