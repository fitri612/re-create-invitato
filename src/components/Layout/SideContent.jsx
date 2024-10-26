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
            bgImage={BG_DESKTOP_VIEW}
            bgSize="cover"
            borderRight="8px solid"
            borderRightColor="blackAlpha.400"
            height="100%"
            zIndex="10"
        >
            <Box padding="42px" bgColor="blackAlpha.400" height="100%">
                <Animation animationType="fade-up">
                    <Text letterSpacing="4px" fontSize="lg" color="whiteAlpha.800" fontFamily="Poppins">
                        x ANNOUNCEMENT
                    </Text>
                </Animation>
                <Animation animationType="fade-up">
                    <Heading
                        // margin="32px 0"
                        fontWeight="normal"
                        size="4xl"
                        lineHeight="1"
                        color="white"
                        fontFamily="initial"
                        textTransform="uppercase"
                    >
                        Tiffany &
                        <br />
                        Jared’s 
                    </Heading>
                </Animation>
                <Animation animationType="fade-up">
                    <Text fontStyle="italic" fontSize="xl" color="whiteAlpha.800" fontFamily="Newsreader">
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
