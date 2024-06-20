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
                <Flex direction="var(--nsr-direction1)"
                    align="center"
                    justify="center"
                    w="100%"
                    minH="100svh"
                    transition="var(--nsr-transition)"
                    bgGradient="linear(to-br, var(--nsr-color13), var(--nsr-color14), var(--nsr-color15))">
                    <Card w="85%" minH="50svh" 
                    bgColor="var(--nsr-color23)" mt="var(--nsr-margin5)" pos="var(--nsr-pos1)" 
                    bgImage="var(--nsr-bimage1)">
                        <CardHeaderUser user={user} navigate={navigate}/>
                        <Divider />
                        <CardBody mt="-40px" display="flex" flexDirection="var(--nsr-direction1)"
                         alignItems="center" textAlign="center">
                            <Text color="var(--nsr-color6)" 
                            fontWeight="var(--nsr-fweight1)" 
                            fontSize={{ base: "12sm", md: "md", lg: "lg" }}
                            >{user?.name} {user?.lastName} </Text>
                            <Text color="var(--nsr-color6)"
                             fontWeight="var(--nsr-fweight1)" 
                             fontSize={{ base: "sm", md: "md", lg: "lg" }}
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
