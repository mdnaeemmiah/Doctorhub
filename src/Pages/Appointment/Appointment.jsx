import BannerTitle from "../../Shared/BannerTitle/BannerTitle";
import Banner from "../Home/Banner/Banner";
import DateSide from "./DateSide";
import SelectSide from "./SelectSide";
import Slots from "./Slots";


const Appointment = () => {
    return (
        <div>
            <Banner></Banner>
            <DateSide></DateSide>
            <div className="text-center">
            <BannerTitle 
                subHeading="Please select a service"
                heading="Available services on April 30,2022"
            ></BannerTitle>
            </div>
            <SelectSide></SelectSide>
            <Slots></Slots>
        </div>
    );
};

export default Appointment;