import { Swiper, Swiperslide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { Navigation, Autoplay } from 'swiper/modules';

export default function Carousel() {
    return(
        <Swiper 
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{delay: 3000}}
            loop={true}
            className="swiper"
        />
    );
}