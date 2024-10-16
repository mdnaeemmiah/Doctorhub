import BannerTitle from "../../../Shared/BannerTitle/BannerTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

import img from '../../../assets/img4.webp'
import img1 from '../../../assets/img1.jpeg'
import img2 from '../../../assets/img3.webp'
import img3 from '../../../assets/img5.webp'

const PatientSay = () => {
  return (
    <div className="text-center my-10">
      <BannerTitle
        heading="What Our Patients Says"
        subHeading="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
      ></BannerTitle>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper my-6"
      >
        <SwiperSlide>
       <div className="flex">
       <img src={img}className="h-[300px]" />
         <div className="mt-16">
         <p>name</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quidem ex quaerat vero fugiat officia laborum repellendus nihil voluptate saepe.</p>
         </div>
       </div>
        
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex">
       <img src={img1}className="h-[300px]" />
         <div className="mt-16">
         <p>name</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quidem ex quaerat vero fugiat officia laborum repellendus nihil voluptate saepe.</p>
         </div>
       </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex">
       <img src={img3}className="h-[300px]" />
         <div className="mt-16">
         <p>name</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quidem ex quaerat vero fugiat officia laborum repellendus nihil voluptate saepe.</p>
         </div>
       </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex">
       <img src={img2}className="h-[300px]" />
         <div className="mt-16">
         <p>name</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quidem ex quaerat vero fugiat officia laborum repellendus nihil voluptate saepe.</p>
         </div>
       </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PatientSay;