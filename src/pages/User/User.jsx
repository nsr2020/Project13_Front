import {  Card, CardBody, Flex, Text, useToast } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import GoBack from "../../components/GoBack/GoBack"
import { Divider } from "antd"

import Loading from "../../components/Loading/Loading"
import { getUserInfo} from "../../utils/User/userFunctions"
import CardHeaderUser from "../../components/UserItems/CardHeader"
import AccordionUser from "../../components/UserItems/AccordionUser"

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
    }, []);
  
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
                    <Card w="85%" minH="50svh" bgColor="#f7d792" mt="50px" pos="relative" 
                        bgImage="url(https://www.transparenttextures.com/patterns/buried.png)">
                        <CardHeaderUser user={user} navigate={navigate}/>
                        <Divider />
                        <CardBody mt="-40px" display="flex" flexDirection="column" alignItems="center" textAlign="center">
                            <Text color="black" fontWeight="bold" fontSize={{ base: "12sm", md: "md", lg: "lg" }}
                            >{user?.name} {user?.lastName} </Text>
                            <Text color="black" fontWeight="bold" fontSize={{ base: "sm", md: "md", lg: "lg" }}
                            > {user?.email}</Text>
                        </CardBody>
                       <AccordionUser user={user} setUserMovies={setUserMovies} toast={toast} userMovies={userMovies}/>
                    </Card>
                    <GoBack goTo={`/movie/${id}`} />
                </Flex>
            )}
        </>
    )
}

export default User;
