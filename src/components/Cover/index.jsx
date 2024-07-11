import React, { useState, useEffect } from 'react';

import { Box, Center, Heading, Text } from '@chakra-ui/react';
import Animation from "../Common/Animation";
import { func, bool } from 'prop-types';


import { BG_MOBILE_VIEW } from '../../assets/assets';
import ButtonOpen from '../Common/ButtonOpen';

function Cover({onLoaded, onDetail }) {
    const [loading, setLoading] = useState(false);
    const [showTitle, setShowTitle] = useState(false);


    const handleClickDetail = () => {
        if (loading) return undefined;

        setLoading(true);
        setTimeout(() => {
            onDetail();
            setLoading(false);
        }, 1500);
    };

    useEffect(() => {
        setShowTitle(true);
    }, []);

    return (
        <Box
        minHeight="100vh"
        bgColor={`rgba(50, 48, 48, 0.55)`} // Opacity 55%
        bgImage={`url(${BG_MOBILE_VIEW})`}
        bgSize="cover"
        bgPos="center"
        position="relative"
        >
            <Box bgColor="rgb(50 48 48 / 55% )" height="100vh" width="100%">
                <Center width="100%" zIndex="2" height="90vh">
                    <Box width="85%" position="relative" height="100%">
                        {showTitle && (
                            <>
                                <Box
                                    color="mainColorText"
                                    letterSpacing="1px"
                                    fontWeight="400"
                                    fontSize="10px"
                                    width="100%"
                                    maxW="500px"
                                    padding="24px"
                                    bgSize="cover"
                                    borderRadius="16px"
                                    position="absolute"
                                // bottom="120px"
                                >
                                    <Box textAlign="center" color="white">
                                        {/* BRIDE SECTION */}
                                        <Animation animationType="fade-up">
                                            <Text zIndex="99" fontSize="16px" letterSpacing="2px"
                                                fontWeight="bold"
                                                fontFamily="headingAlternative">
                                                WEDDING ANNOUNCEMENT
                                            </Text>
                                        </Animation>
                                    </Box>
                                </Box>
                                <Box
                                    color="white"
                                    letterSpacing="1px"
                                    fontWeight="300"
                                    fontSize="10px"
                                    width="100%"
                                    maxW="500px"
                                    padding="24px"
                                    bgSize="cover"
                                    borderRadius="16px"
                                    position="absolute"
                                    bottom="0px"
                                >
                                    <Box textAlign="center" color="white">
                                        <Animation animationType="fade-up">
                                            <Heading
                                                margin="16px 0"
                                                fontWeight="300"
                                                size="xl"
                                                zIndex="99"
                                                fontFamily="initial"
                                                textTransform="uppercase"
                                            >
                                                Tiffany & Jared’s
                                            </Heading>
                                        </Animation>
                                        <Animation animationType="fade-up">
                                            <Heading
                                                marginTop="-15px"
                                                fontWeight="300"
                                                size="xl"
                                                zIndex="99"
                                                fontStyle="italic"
                                                fontFamily="sans-serif"
                                            >
                                                #TImetoshaRE
                                            </Heading>
                                        </Animation>
                                    </Box>

                                    <Animation animationType="floating">
                                        <ButtonOpen
                                            loaded={onLoaded}
                                            loading={loading}
                                            marginTop="80px"
                                            marginBottom="88px"
                                            text="Open"
                                            zIndex="99"
                                            size="md"
                                            boxShadow="md"
                                            onClick={handleClickDetail}

                                        />
                                    </Animation>
                                </Box>
                            </>
                        )}
                    </Box>
                </Center>
            </Box>
        </Box>
    );
}

Cover.propTypes = {
    loaded: bool.isRequired,
    onSeeDetail: func.isRequired,
};

export default Cover;
