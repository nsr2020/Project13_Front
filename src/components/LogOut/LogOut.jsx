import { Flex, Image, useToast } from '@chakra-ui/react';
import React from 'react'
import { useNavigate } from 'react-router';
import { handleLogOutClick } from '../../utils/User/userFunctions';

const LogOut = ({posDir}) => {
 
    const navigate = useNavigate();
    const toast = useToast()

    return (
        <Flex pos="var(--nsr-pos1)">
            <Image 
                src="/assets/logOut.png"
                w={{ base: "30px", md: "50px", lg: "50px", xl: "50px" }}
                h={{ base: "30px", md: "50px", lg: "50px", xl: "50px" }}
                position="var(--nsr-pos3)"
                top="15px"
                left={posDir === 'left' && "15px" }
                right={posDir === 'right' && "15px"}
                zIndex="1"
                cursor="var(--nsr-cursor1)"
                transition="var(--nsr-transition)"
                _hover={{ transform: "scale(0.8)" }}
                onClick={()=>handleLogOutClick(navigate, toast)}
            />
        </Flex>
    );
  
}

export default LogOut