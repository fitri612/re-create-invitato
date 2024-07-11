import React from 'react';
import { Box, Text, } from '@chakra-ui/react';


import ImageSlider from '../Common/Slider';
import Animation from '../Common/Animation';

function Opening() {

  return (
    <Box
      bgColor="bgPrimary"
      // bgImage={`url(${BG_WELCOME})`}
      bgSize="cover"
      bgPos="center"
      textAlign="center"
      color="mainColorText"
      padding="42px 0 0 0"
    >
      <Box padding="24px">
        <Animation>
          <Box marginTop="24px" style={{
            letterSpacing: '2px',
          }}>
            <Text fontSize="2xl" fontFamily="headingAlternative" fontWeight="bold">DEAR MR-MRS-MS,</Text>
            <Text fontFamily="headingAlternative" fontWeight="bold" fontSize="xl">
            FAMILY & FRIENDS
            </Text>
          </Box>
        </Animation>
        <Animation>
          <Text
            fontSize="4xl"
            marginTop="34px"
            fontFamily="initial"
            lineHeight="42px"
            letterSpacing="2px"
          >
            Welcome to <br />
            Tiffany & Jared’s
            <br />
            Wedding Website
          </Text>
        </Animation>
        <Animation>
          <Text marginTop="24px" color="#1A1B1D" fontFamily="cursive"
            fontStyle="italic" fontSize="xl">
            {`Together with joyful hearts and the grace of God, we joyfully announce the upcoming of our marriage.`}
          </Text>
        </Animation>

      </Box>
      <Box >
        <ImageSlider />
      </Box>
    </Box>
  );
}

export default React.memo(Opening);
