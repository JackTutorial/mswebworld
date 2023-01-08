import img2 from "./image/img2.jpg"
import img3 from "./image/img3.webp"
import img4 from "./image/img4.avif"
import img5 from "./image/img5.jpg"
import img6 from "./image/img6.png"
import Mynav from "./mynav"
import Userproducts from "./userproduct"




const AboutFitness=()=>{
    return(
<>

        <div className='container mt-1  '>

                <div className="row pb-2 " id="row3">
                    <div className="col-sm-6"><img src={img6} width="75%" height="280px" /></div>
                    <div className="col-sm-4 text-light">

                        <h5 className="text-center text-warning " ><span className="text-light">About</span> Fitness</h5>
                        Fitness is the condition of being physically fit and healthy and involves attributes that include, but are not limited to mental acuity,
                        cardiorespiratory endurance, muscular strength, muscular endurance, body composition, and flexibility.Fitness is the condition of being
                        physically fit and healthy and involves attributes that include,
                        but are not limited to mental acuity, cardiorespiratory endurance, muscular strength, muscular endurance, body composition, and flexibility.<br />
                        <button className="btn btn-sm btn-warning ">Read more..</button>

                    </div>
                    <div className="col-sm-2"></div>

                </div>

                

            </div>
            

            </>      
    )
}
export default AboutFitness;