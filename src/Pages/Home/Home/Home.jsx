import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Doctor from "../Doctor/Doctor";
import PatientSay from "../PatientSay/PatientSay";
import Service from "../Service/Service";
import WithUs from "../WithUs/WithUs";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Contact></Contact>
            <PatientSay></PatientSay>
            <Doctor></Doctor>
            <WithUs></WithUs>
        </div>
    );
};

export default Home;