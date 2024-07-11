import React from 'react';
import { Box } from '@chakra-ui/react';

// import ImgWave from '@/components/Common/Wave/assets/wave-v4.svg';
// import Img1 from './assets/1.jpg';
// import Img2 from './assets/2.jpg';
// import Img3 from './assets/3.jpg';


import './styles.css';
import { COVER_SLIDE_1, COVER_SLIDE_2, COVER_SLIDE_3, COVER_SLIDE_4, COVER_SLIDE_5 } from '../../../assets/assets';

function ImagesFade() {
  return (
    <Box width="100%" zIndex="1" transform="translateY(200)">
      <div className="slide" style={{
        opacity: 0.55,
      }}>
        <Box backgroundImage={`url(${COVER_SLIDE_1})`} />
        <Box backgroundImage={`url(${COVER_SLIDE_2})`} />
        <Box backgroundImage={`url(${COVER_SLIDE_3})`} />
        <Box backgroundImage={`url(${COVER_SLIDE_4})`} />
        <Box backgroundImage={`url(${COVER_SLIDE_5})`} />
      </div>
    </Box>
  );
}

export default ImagesFade;
