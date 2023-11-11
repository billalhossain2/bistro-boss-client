import slide1 from "../../../assets/home/slide1.jpg"
import slide2 from "../../../assets/home/slide2.jpg"
import slide3 from "../../../assets/home/slide3.jpg"
import slide4 from "../../../assets/home/slide4.jpg"
import slide5 from "../../../assets/home/slide5.jpg"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import SectionTitle from "../../../components/SectionTitle"

const Category = () => {
    const sliderImages = [slide1, slide2, slide3, slide4, slide5]
  return (
    
    <div>
       <SectionTitle subHeading="---From 11:00am to 10:00pm---" heading="ORDER ONLINE"></SectionTitle>
    <Swiper
      slidesPerView={4}
      spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper md:max-w-[80%] mx-auto mb-20"
    >
      {
        sliderImages.map(sliderImg => <SwiperSlide><img src={sliderImg} alt="Slide Image" /></SwiperSlide>)
      }
    </Swiper>
  </div>
  )
}

export default Category