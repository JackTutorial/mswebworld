import { Link, Outlet } from "react-router-dom";
import img1 from "./image/img1.jpeg"

const FitnessGoal=()=>{
    return(
        <>
        <div className='container mt-1  '>
                <div className="row " id="row1">
                    <div className="col-lg-8 mb-4 text-info ">
                        <h1 className="text-warning">Reach <span className="text-light">Your</span><br /> <span className="text-light">
                            Fitness</span> Goal <br /> Faster</h1>
                        This is to informe u that we are going to wwork on Body bulding tutorial That said, <br />
                        it’s also important to know that there are many different ways to be fit (think of a ballet <br />
                        dancer versus a bodybuilder or a sprinter versus a gymnast). And fitness does not have a<br />
                        singular “look.” In fact, appearance can’t necessarily tell you about
                        someone’s<br />
                        habits, whether they’re actually physically active, or even whether they’re fit at all.<br /><br />
                       <Link to='register' ><button className="btn btn-sm btn-warning" >Register</button></Link> 
                    </div>
                    
                    <div className="col-lg-4 mb-4 ">

                        <img className="pt-3" src={img1} width="400px" height="auto" />
                    </div>

                </div>
            </div>
           <Outlet />
           </>
    )
}

export default FitnessGoal;