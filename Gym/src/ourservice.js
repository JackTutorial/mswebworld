import yoga1 from "./image/yoga1.jpg";
import yoga2 from "./image/yoga2.jpeg";
import img7 from "./image/img7.jpg";
import img8 from "./image/img8.jpg";
import img9 from "./image/img9.jpg";
import icon3 from "./image/icon3.png";
import img10 from "./image/img10.webp";
import img11 from "./image/img11.jpg";


const OurServices = () => {

    const icn1 = () => {

        var x = "It’s important to reassess your business goals at the start of the year to reflect any larger changes that might have impacted or might impact your business. The Covid-19 pandemic has had obvious impacts on the fitness industry, with gyms having to shift theirbusiness goalsand often their business models to pivot towards digital delivery of services.if you survey <br></br><b> all the female members </b> of your gym and find out that a significant percentage don’t feel comfortableusing a section of your gym or have encountered harassment recently, this would give you clear goals for improving their engagement through better training ofstaff and other actions. "
        document.getElementById("roleimage1").src = img9;
        document.getElementById("role1").innerHTML = "Gym Owner";
        document.getElementById("name1").innerHTML = "Ye-Jun"
        document.getElementById("discriptions1").innerHTML = x;
    }

    const icn2 = () => {

        document.getElementById("roleimage1").src = img10;
        document.getElementById("role1").innerHTML = "Gym Trainer";
        document.getElementById("name1").innerHTML = "Devid Burner"
        document.getElementById("discriptions1").innerHTML = " A fitness trainer leads, instructs, and motivates individuals or groups in exercise activities, including cardiovascular exercise (exercises for the heart and blood system), strength training, and stretching. Getting fit and staying fit takes a lot of work and motivation.<br></br><b> A fitness trainer</b> leads, instructs, and motivates individuals or groups in exercise activities, including cardiovascular exercise (exercises for the heart and blood system), strength training, and stretching. Getting fit and staying fit takes a lot of work and motivation."

    }
    const icn3 = () => {
        var y="No matter whether you want to bulk up, lose fat or just want to stay fit, you will be needing a specific bodybuilding diet plan for beginners to get the desired results. So before we jump onto the leaning and gaining bodybuilding diet plans for beginners, let’s have a brief look at the guidelines that can help you count your calories, carbs, fat and protein intake for every day.<br></br><b>Keep fueling your body</b> with multiple healthy snacks and meals but in small portions. This helps in keeping your blood sugar levels under check. Six meals a day plan also steadies your metabolism and improves the production of new muscles."
        document.getElementById("roleimage1").src = img11;
        document.getElementById("role1").innerHTML = "Gym Dietecian";
        document.getElementById("name1").innerHTML = "Myra Catrin"
        document.getElementById("discriptions1").innerHTML =y;

    }

    return (
        <>



            <div className="container mt-2 " id="service">

                <h4 className="text-center text-warning" id="textshadow2"><span className="text-dark">OUR </span>Services</h4>

                <div className="row mt-1 mb-2">




                    <div className="col-lg-5 ">

                        <div id="div1"> <img src={img7} width="100%" height="210px" className="img-thumbnail" /></div>


                    </div>


                    <div className="col-lg-7">
                        <h6 className="text-center text-info">Online Training</h6>
                        <p>The athlean look is muscular, strong, and ripped. It is the ideal balance of muscle to body fat that is
                            optimized for performance without sacrificing aesthetics. Each of our training programs is designed to
                            achieve that goal. 13+4+3
                            While we do offer programs that allow for focused muscle growth or
                            fat loss we never lose sight of the ultimate goal…looking, feeling and moving like an athlete!</p>
                    </div>
                </div>



                <div className="row mt-5 mb-2">

                    <div className="col-lg-3 pt-3">
                        <h6 className="text-center text-danger text-underline pt-3"><u>Our Facilities</u></h6>
                        <ul>
                            <li>Personal Trainer</li>
                            <li>Group Classes</li>
                            <li>State-of-the-Art Equipment</li>
                            <li>Spa Services</li>
                            <li>Childcare</li>
                            <li>Aquatic Pool</li>
                            <li>24/7 Access</li>
                            <li>Private Locker Rooms</li>
                        </ul>


                    </div>
                    <div className="col-lg-9">


                        <div id="div4" ><img src={yoga2} width="100%" height="230px" className="rounded" /></div>
                    </div>



                </div>

                <div className="row mt-2 pt-2" id="back1">

                <div className="col-lg-4">

<div id="card" style={{ maxWidth: '280px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 1.2)', margin: 'auto', textAlign: 'center', fontFamily: 'arial' }}>
    <img src={img9} width='97%' height="250px" alt="Gym Owner" id="roleimage1" className="img pt-1"/>
    <h1 style={{ padding: '0', fontSize: '15px', margin: '0' }} id="name1">Ye-jun</h1>
    <p style={{ color: 'GrayText', fontSize: '11px' }} id="role1" >Ceo & Founder</p>
    <p style={{ padding: '0', fontSize: '11px', margin: '0px' }}>Muscle Mania</p>
    <div style={{ margin: '5px 0px' }}>
        <a href="#" id="cardlink"><i class="fa fa-twitter"></i></a>
        <a href="#" id="cardlink"><i class="fa fa-linkedin"></i></a>
        <a href="#" id="cardlink"><i class="fa fa-youtube"></i></a>
        <a href="#" id="cardlink"><i class="fa fa-facebook"></i></a>
    </div>
    <button id="cardbutton">Contact</button>
</div>


<center>
    <div id="divowner2" style={{ margin: '25px 0px' }}>

        <button onClick={icn1} id="btn1" >
            <img src={img9} width="100%" className="rounded-circle" /></button>

        <button onClick={icn2} id="btn1">
            <img src={img10} width="100%" className="rounded-circle" /></button>

        <button onClick={icn3} id="btn1">
            <img src={img11} width="100%" className="rounded-circle" /></button>
    </div>
</center>
</div>
<div className="col-lg-3"></div>

                    <div className="col-lg-5 text-center">

                    <h4 className="text-center text-warning">Our <span className="text-dark">Goal</span></h4>
                        
                        <p className="text-muted" id="discriptions1"> <b> It’s important </b>to reassess your business goals at the
                            start of the year to reflect any larger changes that might have impacted or might impact your business.
                            The Covid-19 pandemic has had obvious impacts on the fitness industry, with gyms having to shift their
                            business goals
                            and often their business models to pivot towards digital delivery of services.
                            if you survey <i className="text text-muted"><b>all the female members</b> of your gym and find out that a significant percentage don’t feel comfortable
                            using a section of your gym or have encountered harassment recently,
                            this would give you clear goals for improving their engagement through better training of
                            staff and other actions. </i> </p></div>



                    


                </div>



            </div>
        </>
    )
}
export default OurServices;