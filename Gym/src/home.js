import AboutFitness from "./aboutfitness";
import EnrollNow from "./enroll";
import FitnessGoal from "./fitnessgoal";
import Heading from "./heading";
import Myfooter from "./myfooter";
import Mynav from "./mynav";
import OurServices from "./ourservice";
import Userproducts from "./userproduct";

const Home=()=>{
    return(
<>
<Heading />
<Mynav />

        <FitnessGoal />
        <AboutFitness />
        <Userproducts />
        <EnrollNow />
       <OurServices />
       <Myfooter />
     
       
        
       
        </>
    )
}
export default Home;