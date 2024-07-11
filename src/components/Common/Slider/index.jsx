import React from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';

import { Navigation, Pagination, Scrollbar, A11y, Keyboard } from 'swiper/modules';

import { WELCOMING_SLIDER_1, WELCOMING_SLIDER_2, WELCOMING_SLIDER_3, WELCOMING_SLIDER_4, WELCOMING_SLIDER_5 } from '../../../assets/assets';
import { Button, Image } from '@chakra-ui/react';
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2';


export default function ImageSlider() {
    const swiperRef = React.useRef(null);

    const handlePrev = () => {
        if (swiperRef?.current && swiperRef?.current.swiper) {
            swiperRef?.current.swiper.slidePrev();
        }
    };

    return (
        <>
            <Swiper
                slidesPerView={1.5}

                centeredSlides={true}
                spaceBetween={40}
                
                modules={[Keyboard, Navigation]} // tambahkan Navigation module
                keyboard={{
                    enabled: true,
                    onlyInViewport: true,
                }}
                navigation={{
                    nextEl: '.swiper-nav-btns > button:last-child',
                    prevEl: '.swiper-nav-btns > button:first-child',
                }}
                loop={true}
                autoplay={true}
            >
                <SwiperSlide >
                    <Image src={WELCOMING_SLIDER_1} alt="slider" objectFit="cover" height="300px" />
                </SwiperSlide>
                <SwiperSlide >
                    <Image src={WELCOMING_SLIDER_2} alt="slider" objectFit="cover" height="300px"/>
                </SwiperSlide>
                <SwiperSlide >
                    <Image src={WELCOMING_SLIDER_3} alt="slider" objectFit="cover" height="300px" />
                </SwiperSlide>
                <SwiperSlide >
                    <Image src={WELCOMING_SLIDER_4} alt="slider" objectFit="cover" height="300px" />
                </SwiperSlide>
                <SwiperSlide >
                    <Image src={WELCOMING_SLIDER_5} alt="slider" objectFit="cover" height="300px" />
                </SwiperSlide>

            </Swiper>
            <div style={{
                marginTop: '80px',
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '10px',  // Jarak antara dua tombol
                marginRight: '20px',
            }} className="swiper-nav-btns">
                <Button
                    leftIcon={<HiArrowLongLeft color='black' size="40px" />}
                    style={{
                        padding: '10px 15px',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        width: '150px',
                    }}
                    onClick={handlePrev}
                />
                
                <Button
                    onClick={handlePrev}
                    leftIcon={<HiArrowLongRight color='black' size="40px" />}
                    style={{
                        padding: '10px 15px',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        width: '150px',
                    }}
                />
            </div>
            {/* Tambahkan tombol Next dan Prev */}
        </>
    );
}