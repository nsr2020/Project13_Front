import { Avatar, Box, Card, CardBody, CardHeader, Flex, Heading, Text } from "@chakra-ui/react"

import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import Loading from "../../components/Loading/Loading"
import GoBack from "../../components/GoBack/GoBack"


const User = () => {
    const [userInfo, setUserInfo] = useState(null)
    const user = localStorage.getItem('userName')
    const {id} = useParams()
    const navigate = useNavigate()
    console.log(id);

    useEffect(()=>{
        if(!user ){
            navigate("/")
            return
        }

        fetch(`https://project-13-back.vercel.app/api/v1/users/${id}`)
        .then((response) => response.json())
        .then((data) => {
            setUserInfo(data)
            console.log(data);
        })
        .catch((error) => {
            console.error("Error fetching user data:", error);
          });
    },[user, id, navigate])

  return (
    <>
    {userInfo === null && <Loading/>}
    {userInfo && (
           <Flex direction="column"
           align="center"
           justify="center"
           w="100%"
           minH="100svh"
           transition="all 0.5s"
           bgGradient="linear(to-br, #f9eb0a, #ec008c, #005caf)">
                <Card maxW ="md">
                    <CardHeader>
                        <Flex spacing='4'>
                            <Flex flex="1" gap='4' alignItems='center' flexWrap='wrap'>
                                <Avatar name={userInfo?.name} src={userInfo?.image}/>
                                <Box>
                                <Heading size='sm'>{userInfo?.name}</Heading>
                                <Text>Creator, Chakra UI</Text>
                                </Box>
                            </Flex>
                        </Flex>
                    </CardHeader>
                    <CardBody>
                        <Text>{userInfo?.name} {userInfo?.lastName}  </Text>
                    </CardBody>
                </Card>
            <GoBack goTo={`/movie/${id}`}/>              
           </Flex>
            )} 
    </>
  )
}

export default User