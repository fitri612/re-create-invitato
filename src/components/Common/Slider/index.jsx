import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';

import { Navigation, Keyboard } from 'swiper/modules';

import { WELCOMING_SLIDER_1, WELCOMING_SLIDER_2, WELCOMING_SLIDER_3, WELCOMING_SLIDER_4, WELCOMING_SLIDER_5 } from '../../../assets/assets';
import { Box, Button, Image, useMediaQuery } from '@chakra-ui/react';
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2';


export default function ImageSlider() {
    const swiperRef = React.useRef(null);
    const [isMobile] = useMediaQuery('(max-width: 768px)');

    const handlePrev = () => {
        if (swiperRef?.current && swiperRef?.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef?.current && swiperRef?.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    return (
        <>
            <Swiper
                ref={swiperRef}
                slidesPerView={1.5}
                centeredSlides={true}
                // spaceBetween={'5%'}
                spaceBetween={isMobile ? '5%' : '-15%'}
                modules={[Keyboard, Navigation]}
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
                <SwiperSlide>
                    <Image src={WELCOMING_SLIDER_1} alt="slider" objectFit="cover" height="300px" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={WELCOMING_SLIDER_2} alt="slider" objectFit="cover" height="300px" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={WELCOMING_SLIDER_3} alt="slider" objectFit="cover" height="300px" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={WELCOMING_SLIDER_4} alt="slider" objectFit="cover" height="300px" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={WELCOMING_SLIDER_5} alt="slider" objectFit="cover" height="300px" />
                </SwiperSlide>
            </Swiper>

            <Box
                mt={'30px'}
                display="flex"
                justifyContent="flex-end"
                gap="10px"
                marginRight="20px"
                paddingBottom="20px"
                className="swiper-nav-btns"
            >
                <Button
                    leftIcon={<HiArrowLongLeft color="black" size="25px" />}
                    bg="#F9F7F4"
                    _hover={{ bg: '#FFF' }}
                    padding="10px 15px"
                    border="1px solid black"
                    borderRadius="0px"
                    cursor="pointer"
                    width="90px"
                    onClick={handlePrev}
                />

                <Button
                    leftIcon={<HiArrowLongRight color="black" size="25px" />}
                    bg="#F9F7F4"
                    _hover={{ bg: '#FFF' }}
                    padding="10px 15px"
                    border="1px solid black"
                    borderRadius="0px"
                    cursor="pointer"
                    width="90px"
                    onClick={handleNext} 
                />
            </Box>
        </>
    );
}
