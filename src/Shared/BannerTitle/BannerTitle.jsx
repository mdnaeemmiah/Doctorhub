

const BannerTitle = ({heading,subHeading}) => {
    return (
        <div className=" ">
             <p className="text-3xl uppercase border-b-4 py-4 ">{heading}</p>
             <p className="text-yellow-600 mb-2">--- {subHeading} ---</p>
        </div>
    );
};

export default BannerTitle;