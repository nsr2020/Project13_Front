import { DeleteIcon } from "@chakra-ui/icons";
import {
	Accordion,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	AccordionButton,
	Flex,
	Text,
	Image,
} from "@chakra-ui/react";
import { handleDeleteMovie } from "../../utils/User/userFunctions";

const AccordionUser = ({ user, toast, dispatch,userMovies }) => {
	return (
		<>
			<Accordion allowToggle>
				<AccordionItem bgColor="#d0b08a">
					<h2>
						<AccordionButton>
							<Box
								as="span"
								textAlign="left"
								bgColor="var(--nsr-color21)"
								borderBottom="2px solid red"
								w="100%"
								fontSize={{ base: "sm", md: "md", lg: "lg" }}
								color="var(--nsr-color6)"
							>
								LIST OF SEEN MOVIES
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel mt="-10px">
						{!userMovies.length && (
							<Flex
								align="center"
								justifyContent="center"
								borderBottom="1px solid red"
								w="99%"
							>
								<Text
									color="var(--nsr-color6)"
									fontWeight="var(--nsr-fweight1)"
								>
									No movies added yet
								</Text>
							</Flex>
						)}
						{userMovies?.map((movie, index) => (
							<Flex
								key={index}
								align="center"
								justifyContent="space-between"
								borderBottom="1px solid red"
								w="99%"
								p={{ base: "var(--nsr-padding1)", md: "var(--nsr-padding2)" }}
							>
								<Image
									src={movie.image}
									w={{ base: "30px", md: "70px" }}
									h={{ base: "45px", md: "90px" }}
									borderRadius="20%"
									mb="var(--nsr-margin1)"
									mt="var(--nsr-margin1)"
								/>
								<Text
									color="var(--nsr-color6)"
									fontWeight="var(--nsr-fweight1)"
									fontSize={["8px", "15px", "15px", "15px"]}
								>
									{movie.name}
								</Text>

								<DeleteIcon
									cursor="var(--nsr-cursor1)"
									transition="var(--nsr-transition)"
									w={{ base: "10px", md: "40px" }}
									_hover={{ transform: "scale(1.5)" }}
									onClick={() =>
										handleDeleteMovie(movie._id, dispatch,user, toast)
									}
								/>
							</Flex>
						))}
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</>
	);
};

export default AccordionUser;
