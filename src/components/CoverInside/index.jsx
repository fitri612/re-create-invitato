import React, { useState, useEffect } from 'react';

import { Box, Center, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { func, bool } from 'prop-types';
import ImagesFade from '../Common/faded';
import Animation from '../Common/Animation';
import { IoIosArrowDown } from "react-icons/io";

// import { FaChevronDown } from 'react-icons/fa';


/**
 * Function to render Component CoverV3
 * This component will be dissapear after user click show `Undangan`
 * @return {JSX.Element}
 }
 */
 function CoverInside({ onScrollToBegin }) {
    //   const [loading, setLoading] = useState(false);
    const [showTitle, setShowTitle] = useState(false);

    useEffect(() => {
        setShowTitle(true);
    }, []);

    return (
        <Box
        >
            <Box bgColor="rgb(50 48 48 / 55% )" height="100vh" width="100%">
                <Center width="100%" zIndex="2" height="90vh">
                    <Box width="100%" position="relative" height="100%">
                        <ImagesFade />
                        {showTitle && (
                            <>

                                <Box
                                    color="white"
                                    letterSpacing="1px"
                                    fontWeight="400"
                                    fontSize="10px"
                                    width="100%"
                                    maxW="500px"
                                    padding="24px"
                                    bgSize="cover"
                                    borderRadius="16px"
                                    position="absolute"
                                    top="0px"
                                >
                                    <Box textAlign="center" color="white">
                                        {/* BRIDE SECTION */}
                                        <Animation animationType="fade-up">
                                            <Text
                                                zIndex="99"
                                                fontSize="16px"
                                                letterSpacing="3px"
                                                fontWeight="bold"
                                                fontFamily="headingAlternative"
                                                mt={'60px'}
                                            >
                                                WEDDING ANNOUNCEMENT
                                            </Text>
                                        </Animation>
                                    </Box>
                                </Box>
                                <Box
                                    color="white"
                                    letterSpacing="1px"
                                    fontWeight="400"
                                    fontSize="10px"
                                    width="100%"
                                    maxW="500px"
                                    padding="24px"
                                    bgSize="cover"
                                    borderRadius="16px"
                                    position="absolute"
                                    top="40%"
                                >
                                    <Box textAlign="center" color="white">
                                        <Animation animationType="fade-up">
                                            <Heading
                                                margin="16px 0"
                                                fontWeight="normal"
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
                                                fontWeight="normal"
                                                size="xl"
                                                zIndex="99"
                                                fontStyle="italic"
                                                fontFamily="Newsreader"
                                            >
                                                #TImetoshaRE
                                            </Heading>
                                        </Animation>
                                    </Box>

                                </Box>
                                <Box
                                    color="white"
                                    letterSpacing="1px"
                                    fontWeight="400"
                                    fontSize="10px"
                                    width="100%"
                                    maxW="500px"
                                    padding="24px"
                                    bgSize="cover"
                                    borderRadius="16px"
                                    position="absolute"
                                    bottom="-68px"
                                    textAlign="end"
                                    marginTop="190px">

                                    <Animation animationType="fade-up">
                                        <Flex alignItems="center" textAlign="end" justifyContent="flex-end"
                                         onClick={onScrollToBegin} cursor="pointer"
                                        >
                                            <Text marginRight="8px" fontWeight="bold" fontSize="md"
                                                fontFamily="headingAlternative" textTransform="uppercase">
                                                Scrool to Begin
                                            </Text>
                                            <IoIosArrowDown size="20px" color="white" />

                                        </Flex>
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

CoverInside.propTypes = {
    loaded: bool.isRequired,
    onSeeDetail: func.isRequired,
};

export default CoverInside;
