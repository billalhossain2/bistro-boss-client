import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import axios from "axios";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import Review from "./Review";


const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios
      .get("reviews.json")
      .then((response) => {
        setReviews(response.data)
        console.log(response.data)
      })
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <div>
      <SectionTitle
        subHeading="---What Our Clients Say---"
        heading="TESTIMONIALS"
      ></SectionTitle>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper mb-20"
      >
        {
            reviews.map(review => <SwiperSlide key={review._id}> <Review review={review}></Review> </SwiperSlide>)
        }
      </Swiper>

    </div>
  );
};

export default Testimonials;
