import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

import { BG_DESKTOP_VIEW } from '../../assets/assets';
import Animation from '../Common/Animation';

function SideContent() {
    return (
        <Box
            bgColor="bgPrimary"
            width="calc(100% - 500px)"
            pos="fixed"
            // bgImage={BG_DESKTOP_VIEW}
            // bgImage="linear-gradient(rgba(50, 48, 48, 0.5), rgba(50, 48, 48, 0.5)), url('https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Desktop.jpg?updatedAt=1698223781539')"

            bgImage={`linear-gradient(rgba(50, 48, 48, 0.5), rgba(50, 48, 48, 0.5)), url(${BG_DESKTOP_VIEW})`}
            bgSize="cover"
            borderRight="8px solid"
            borderRightColor="blackAlpha.400"
            height="100%"
            zIndex="10"
            position={"fixed"}
        >
            <Box  padding="42px" height="100%">
                <Animation animationType="fade-up">
                    <Text letterSpacing="4px" fontSize="lg" color="whiteAlpha.800" fontFamily="Poppins">
                        WEDDING ANNOUNCEMENT
                    </Text>
                </Animation>
                <Animation animationType="fade-up">
                    <Heading
                        mt={"24px"}
                        fontWeight="normal"
                        size="4xl"
                        lineHeight="1"
                        color="white"
                        fontFamily="initial"
                        textTransform="uppercase"
                    >
                        Tiffany &
                        <br />
                        Jared
                    </Heading>
                </Animation>
                <Animation mt="24px" animationType="fade-up" >
                    <Text fontStyle="italic" fontSize="lg" maxWidth={"800px"} letterSpacing={"1px"}
                    fontWeight={"400"} mt="24px"color="white" fontFamily="Newsreader">
                        {`“Aku ingin mencintaimu dengan sederhana; dengan kata yang tak sempat diucapkan kayu kepada api yang menjadikannya abu. Aku ingin mencintaimu dengan sederhana; dengan isyarat yang tak sempat disampaikan awan kepada hujan yang menjadikannya tiada.”`}
                        <br />
                        — Sapardi Djoko Damono
                    </Text>
                </Animation>
            </Box>
        </Box>
    );
}

export default SideContent;
