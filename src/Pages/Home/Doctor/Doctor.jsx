import BannerTitle from "../../../Shared/BannerTitle/BannerTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import Rating from "../../../Shared/Rating";
import img1 from '../../../assets/gettyimages-1340042922-612x612.jpg'
import img2 from '../../../assets/gettyimages-898343438-612x612.jpg'
import img3 from '../../../assets/gettyimages-97395345-612x612.jpg'
import img4 from '../../../assets/image1.avif'
import img5 from '../../../assets/istockphoto-1416030206-612x612.jpg'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Doctor = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  const [swiperConfig, setSwiperConfig] = useState({
    slidesPerView: isLargeScreen ? 3 : 1,
    spaceBetween: isLargeScreen ? 30 : 10,
    pagination: { clickable: true },
  });

  useEffect(() => {
    const handleResize = () => {
      const isLarge = window.innerWidth >= 1024;
      setIsLargeScreen(isLarge);
      setSwiperConfig({
        slidesPerView: isLarge ? 3 : 1,
        spaceBetween: isLarge ? 30 : 10,
        pagination: { clickable: true },
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    return (
        <div className="text-center my-10 ">
            <BannerTitle
                heading="Our Expert Doctors"
                subHeading="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
            ></BannerTitle>
            <Swiper {...swiperConfig}  >
                
                    <SwiperSlide>
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <figure>
                                <img src={img1} alt="Shoes" />
                            </figure>
                            <div className="card-body ">
                                <h2 className="card-title">Name: </h2>
                                <p>If a doc chews  whose doct does he choose?</p>
                                <Rating ></Rating>
                                <div  className="card-actions justify-end">
                                    <Link to='/profile'  className="btn btn-primary w-full">View Profile</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <figure>
                                <img src={img2} alt="Shoes" />
                            </figure>
                            <div className="card-body ">
                                <h2 className="card-title">Name: </h2>
                                <p>If a doc chews  whose doct does he choose?</p>
                                <Rating ></Rating>
                                <div className="card-actions justify-end">
                                     <Link to='/profile'  className="btn btn-primary w-full">View Profile</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <figure>
                                <img src={img3} alt="Shoes" />
                            </figure>
                            <div className="card-body ">
                                <h2 className="card-title">Name: </h2>
                                <p>If a doc chews  whose doct does he choose?</p>
                                <Rating ></Rating>
                                <div className="card-actions justify-end">
                                     <Link to='/profile'  className="btn btn-primary w-full">View Profile</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <figure>
                                <img src={img4} alt="Shoes" />
                            </figure>
                            <div className="card-body ">
                                <h2 className="card-title">Name: </h2>
                                <p>If a doc chews  whose doct does he choose?</p>
                                <Rating ></Rating>
                                <div className="card-actions justify-end">
                                   <Link to='/profile'  className="btn btn-primary w-full">View Profile</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <figure>
                                <img src={img5} alt="Shoes" />
                            </figure>
                            <div className="card-body ">
                                <h2 className="card-title">Name: </h2>
                                <p>If a doc chews  whose doct does he choose?</p>
                                <Rating ></Rating>
                                <div className="card-actions justify-end">
                                   <Link to='/profile'  className="btn btn-primary w-full">View Profile</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Doctor;