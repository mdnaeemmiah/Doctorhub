
import BannerTitle from "../../../Shared/BannerTitle/BannerTitle";



const Contact = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-center  md:space-y-2 space-y-9">
            <div className=" bg-green-400 h-52 rounded-xl ">
               <BannerTitle subHeading="Opening Hours" heading='Open 9.00am to 5.00pm Everyday'></BannerTitle>
            </div>
            <div className="  rounded-xl bg-orange-400 h-52">
            <BannerTitle subHeading="Our location" heading='Dhanmondi 19,Dhaka   -1200 Bangladesh'></BannerTitle>
            </div>
            <div className=" rounded-xl  bg-green-700 h-52">
            <BannerTitle heading="+8801725865422  +8017268535663" subHeading='Contact Us'></BannerTitle>
            </div>
        </div>
    );
};

export default Contact;