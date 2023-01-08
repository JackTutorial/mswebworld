


const EnrollNow=()=>{
    return(

        <div className="container mt-1">
        <div className="row">
            <h4 className="text-center text-warning" id="textshadow1"><span className="text-dark">OUR </span>PLAN</h4>
            <h6 className="text-center">Choose Your Pricing Plan</h6>


            <div className="col-md-4  text-light  pb-2" id="enroll"><h5>Class dop-in</h5>
                <i class="fa fa-dollar"> 59 <br /> Single Class </i><br /><br />
                <p>Check out fees, FAQ & benefits of Gold's Gym Membership Plans here. We provide flexible membership
                    plans that suit your fitness needs and help to stay ...</p>
                <button className="btn btn-warning btn-sm">Enroll Now</button>

            </div>

            <div className="col-md-4  text-light border shadow" id="enroll"><h5>12 Month Plan</h5><i class="fa fa-dollar"> 39<br /> Single Class</i><br /><br />
                <p>Check out fees, FAQ & benefits of Gold's Gym Membership Plans here. We provide flexible membership
                    plans that suit your fitness needs and help to stay ...</p>
                <button className="btn btn-warning btn-sm">Enroll Now</button>
            </div>

            <div className="col-md-4  text-light " id="enroll"><h5>6 Month unlimited</h5><i class="fa fa-dollar"> 99<br /> Single Class</i><br /><br />
                <p>Check out fees, FAQ & benefits of Gold's Gym Membership Plans here. We provide flexible membership
                    plans that suit your fitness needs and help to stay ...</p>
                <button className="btn btn-warning btn-sm">Enroll Now</button>
            </div>

        </div>
    </div>
    )
}

export default EnrollNow;