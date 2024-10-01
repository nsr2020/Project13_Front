import { Card, CardBody, Flex, Text } from "@chakra-ui/react";
import GoBack from "../../components/GoBack/GoBack";
import { Divider } from "antd";
import Loading from "../../components/Loading/Loading";
import CardHeaderUser from "../../components/UserItems/CardHeader";
import AccordionUser from "../../components/UserItems/AccordionUser";
import { useUser } from "../../services/useUser";

const User = () => {
	const { user,navigate,toast,dispatch,userMovies,id,place } = useUser();

	return (
		<>
			{!user && <Loading />}
			{user && (
				<Flex
					direction="var(--nsr-direction1)"
					align="center"
					justify="center"
					w="100%"
					minH="100svh"
					transition="var(--nsr-transition)"
					bgGradient="linear(to-br, var(--nsr-color13), var(--nsr-color14), var(--nsr-color15))"
				>
					<Card
						w="85%"
						minH="50svh"
						bgColor="var(--nsr-color23)"
						mt="var(--nsr-margin5)"
						pos="var(--nsr-pos1)"
						bgImage="var(--nsr-bimage1)"
					>
						<CardHeaderUser user={user} navigate={navigate} toast={toast}/>
						<Divider />
						<CardBody
							mt="-40px"
							display="flex"
							flexDirection="var(--nsr-direction1)"
							alignItems="center"
							textAlign="center"
						>
							<Text
								color="var(--nsr-color6)"
								fontWeight="var(--nsr-fweight1)"
								fontSize={{ base: "12sm", md: "md", lg: "lg" }}
							>
								{user?.name} {user?.lastName}{" "}
							</Text>
							<Text
								color="var(--nsr-color6)"
								fontWeight="var(--nsr-fweight1)"
								fontSize={{ base: "sm", md: "md", lg: "lg" }}
							>
								{" "}
								{user?.email}
							</Text>
						</CardBody>
						<AccordionUser
							user={user}
							toast={toast}
							dispatch={dispatch}
							userMovies={userMovies}
						/>
					</Card>
					<GoBack goTo={`/movie/${id}/${place}`} />
				</Flex>
			)}
		</>
	);
};

export default User;
