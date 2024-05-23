import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Avatar, Box, Card, CardBody, CardHeader, Flex, Heading, Image, Text, useToast } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import GoBack from "../../components/GoBack/GoBack"
import { Divider, Rate } from "antd"
import { DeleteIcon } from "@chakra-ui/icons"
import Loading from "../../components/Loading/Loading"
import { getUserInfo } from "../../utils/User/userFunctions"

const User = () => {
    const [userMovies, setUserMovies] = useState([]); 
    const user = JSON.parse(localStorage.getItem("userName"))
    const { id } = useParams();
    const navigate = useNavigate();
    const toast = useToast();

    useEffect(() => {
        if (!user) {
            navigate("/");
            return;
        }
        getUserInfo(user._id, setUserMovies)
    }, [userMovies]);
 

    const handleDeleteMovie = async (id) => {
        user.seenMovies = user.seenMovies.filter((idseen) => idseen !== id);
        localStorage.setItem("userName", JSON.stringify(user));

        const res = await fetch(`https://project-13-back.vercel.app/api/v1/users/remove-seenMovies/${user._id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({ seenMovies: [id] })
        });

        if (res.status === 400) {
            toast({
                title: "Error",
                description: "Movie could not be removed",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
            return
        } else if (res.status === 200) {
            toast({
                title: "Success",
                description: "Movie removed successfully",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
            getUserInfo(user._id, setUserMovies)
        }
    };

    return (
        <>
            {!user && <Loading />}
            {user && (
                <Flex direction="column"
                    align="center"
                    justify="center"
                    w="100%"
                    minH="100svh"
                    transition="all 0.5s"
                    bgGradient="linear(to-br, #f9eb0a, #ec008c, #005caf)">
                    <Card w="85%" minH="50svh" bgColor="#f7d792" mt="60px"
                        bgImage="url(https://www.transparenttextures.com/patterns/buried.png)">
                        <CardHeader>
                            <Flex spacing='4'>
                                <Flex flex="1" gap='4' alignItems='center' flexWrap='wrap'>
                                    <Avatar name={user?.name} src={user?.image} w="100px"
                                        h="100px"
                                    />
                                    <Box>
                                        <Heading size='xl'>{user?.name} {user?.lastName}</Heading>
                                        <Text color="black" fontWeight="bold"> User Info, keep in mind that you can modify your details at any time, please send us an email.</Text>
                                    </Box>
                                </Flex>
                            </Flex>
                        </CardHeader>
                        <Divider />
                        <CardBody mt="-20px">
                            <Text color="black" fontWeight="bold">{user?.name} {user?.lastName} </Text>
                            <Text color="black" fontWeight="bold"> {user?.email}</Text>
                        </CardBody>
                        <Accordion allowToggle>
                            <AccordionItem bgColor="#d0b08a">
                                <h2>
                                    <AccordionButton>
                                        <Box as='span' textAlign='left' bgColor="#d0b08a" borderBottom="2px solid red"
                                            w="100%" color="black">
                                            LIST OF SEEN MOVIES
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel mt="-10px">
                                    {(!userMovies.length) && (
                                        <Flex align="center" justifyContent="center" borderBottom="1px solid red" w="99%">
                                        <Text color="black" fontWeight="bold">You have not added any movie yet</Text>
                                        </Flex>    
                                    )}
                                    {userMovies?.map((movie, index) => (
                                        <Flex key={index} align="center" justifyContent="space-between" borderBottom="1px solid red" w="99%">
                                            <Image src={movie.image} w="70px" h="90px" borderRadius="20%" mb="10px" mt="10px" />
                                            <Text color="black" fontWeight="bold">{movie.name}</Text>
                                            <Text color="black" fontWeight="bold">Type: {movie.category}</Text>
                                            <Text color="black" fontWeight="bold">Platform: {movie.platform}</Text>
                                            <Rate disabled defaultValue={movie.stars} />
                                            <DeleteIcon cursor="pointer" transition="all 0.5s"
                                                _hover={{ transform: "scale(1.5)" }}
                                                onClick={() => handleDeleteMovie(movie._id)}
                                            />
                                        </Flex>
                                    ))}
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </Card>
                    <GoBack goTo={`/movie/${id}`} />
                </Flex>
            )}
        </>
    )
}

export default User;
