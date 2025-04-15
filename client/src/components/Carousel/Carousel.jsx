import { Swiper, SwiperSlide } from 'swiper/react';
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
            className="swiper h-96"
        >
            <SwiperSlide>
                <img src='https://cloudcitygames.com/wp-content/uploads/Content/Product-Banners/funko-pop-banner.png' alt='first slide' className='w-full h-full object-cover'/>
            </SwiperSlide>
            <SwiperSlide>
                <img src='https://i.ytimg.com/vi/qGe2tWu2J3w/maxresdefault.jpg' alt='second slide' className='w-full h-full object-cover'/>
            </SwiperSlide>
            <SwiperSlide>
                <img src='https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/04/10-best-spellcaster-type-yu-gi-oh-card-designs-ranked.jpg' h-full alt='third slide' className='object-cover'/>
            </SwiperSlide>
        </Swiper>
    );
}