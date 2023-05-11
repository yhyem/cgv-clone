import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const StillCut = props => {
  const { backdrops } = props.stillCut;
  console.log(backdrops);

  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {backdrops &&
          backdrops.map((back, index) => (
            <SwiperSlide key={index}>
              <img src={IMAGE_URL + back.file_path} alt={index} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default StillCut;
