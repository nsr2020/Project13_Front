import  { memo } from 'react';
import { Flex, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { handleGoBack } from '../../utils/GoBack/goBackFunctions';

const GoBack = ({ goTo }) => {
    const navigate = useNavigate();

    return (
        <Flex pos="var(--nsr-pos1)">
            <Image 
                src="/assets/goBack.png"
                w={{ base: "30px", md: "50px", lg: "50px", xl: "50px" }}
                h={{ base: "30px", md: "50px", lg: "50px", xl: "50px" }}
                position="var(--nsr-pos3)"
                top="15px"
                left="15px"
                zIndex="1"
                cursor="var(--nsr-cursor1)"
                transition="var(--nsr-transition)"
                _hover={{ transform: "scale(0.8)" }}
                onClick={()=>handleGoBack(goTo, navigate)}
            />
        </Flex>
    );
};

export default memo(GoBack);