import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import heroBg from "../../assets/images/bg.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './styles.css';

import imgUrl1 from "../../assets/images/1.jpg"
import imgUrl2 from "../../assets/images/2.jpg"
import imgUrl3 from "../../assets/images/3.jpg"
import imgUrl4 from "../../assets/images/4.jpg"
import imgUrl5 from "../../assets/images/5.jpg"

const moviesData = [
  {
    name: "Spiderman no way home",
    description: " Scelerisque sed ultricies tristique. Mi in vivamus aliquam varius eu felis. Id ultricies diam turpis mi tincidunt. Ut morbi sed urna tempor imperdiet eu scelerisque egestas. Interdum mi orci suspendisse in s...",
    link: "/info/spiderman",
    imgUrl: imgUrl1
  },
  {
    name: "Batman",
    description: " Scelerisque sed ultricies tristique. Mi in vivamus aliquam varius eu felis. Id ultricies diam turpis mi tincidunt. Ut morbi sed urna tempor imperdiet eu scelerisque egestas. Interdum mi orci suspendisse in s...",
    link: "/info/batman",
    imgUrl: imgUrl2
  },
  {
    name: "Ipman Tysonga qarshi",
    description: " Scelerisque sed ultricies tristique. Mi in vivamus aliquam varius eu felis. Id ultricies diam turpis mi tincidunt. Ut morbi sed urna tempor imperdiet eu scelerisque egestas. Interdum mi orci suspendisse in s...",
    link: "/info/ipman",
    imgUrl: imgUrl3
  },
  {
    name: "Avengers ",
    description: " Scelerisque sed ultricies tristique. Mi in vivamus aliquam varius eu felis. Id ultricies diam turpis mi tincidunt. Ut morbi sed urna tempor imperdiet eu scelerisque egestas. Interdum mi orci suspendisse in s...",
    link: "/info/avengers",
    imgUrl: imgUrl4
  },
  {
    name: "Taxi 3 ",
    description: " Scelerisque sed ultricies tristique. Mi in vivamus aliquam varius eu felis. Id ultricies diam turpis mi tincidunt. Ut morbi sed urna tempor imperdiet eu scelerisque egestas. Interdum mi orci suspendisse in s...",
    link: "/info/taxi",
    imgUrl: imgUrl5
  },
  {
    name: "Spiderman no way home",
    description: " Scelerisque sed ultricies tristique. Mi in vivamus aliquam varius eu felis. Id ultricies diam turpis mi tincidunt. Ut morbi sed urna tempor imperdiet eu scelerisque egestas. Interdum mi orci suspendisse in s...",
    link: "/info/spiderman",
    imgUrl: imgUrl1
  },
  {
    name: "Batman",
    description: " Scelerisque sed ultricies tristique. Mi in vivamus aliquam varius eu felis. Id ultricies diam turpis mi tincidunt. Ut morbi sed urna tempor imperdiet eu scelerisque egestas. Interdum mi orci suspendisse in s...",
    link: "/info/batman",
    imgUrl: imgUrl2
  },
  {
    name: "Ipman Tysonga qarshi",
    description: " Scelerisque sed ultricies tristique. Mi in vivamus aliquam varius eu felis. Id ultricies diam turpis mi tincidunt. Ut morbi sed urna tempor imperdiet eu scelerisque egestas. Interdum mi orci suspendisse in s...",
    link: "/info/ipman",
    imgUrl: imgUrl3
  },
  {
    name: "Avengers ",
    description: " Scelerisque sed ultricies tristique. Mi in vivamus aliquam varius eu felis. Id ultricies diam turpis mi tincidunt. Ut morbi sed urna tempor imperdiet eu scelerisque egestas. Interdum mi orci suspendisse in s...",
    link: "/info/avengers",
    imgUrl: imgUrl4
  },

]

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Box, Button, Typography } from '@mui/material';
import { maxWidth } from '@mui/system';
import { HeroInfo } from './HeroInfo';

export default function HeroCarousel() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const swiperRef = useRef();
  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        // spaceBetween={10}
        // navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"

        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {
          moviesData.map(movie => <SwiperSlide> <HeroInfo movie={movie} /> </SwiperSlide>)
        }

      </Swiper>


      <div>
        <button className='custom-prev' onClick={() => swiperRef.current?.slidePrev()}>Prev</button>
        <button className='custom-next' onClick={() => swiperRef.current?.slideNext()}>Next</button>
      </div>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={20}
        slidesPerView={7}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"

        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}


      >
        {
          moviesData.map(movie => <SwiperSlide>
            <img src={movie.imgUrl} />
          </SwiperSlide>)
        }

      </Swiper>
    </>
  );
}
