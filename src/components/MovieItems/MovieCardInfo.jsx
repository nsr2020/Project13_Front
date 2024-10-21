import {
	Button,
	Card,
	CardBody,
	CardFooter,
	Divider,
	Heading,
	Image,
	Stack,
	Text,
} from "@chakra-ui/react";
import { Rate } from "antd";
import { useNavigate } from "react-router";
import {
	customStyle,
	handleClickButtonTrailer,
} from "../../utils/Movie/MovieFunctions";

const MovieCardInfo = ({ movie, place }) => {
	const navigate = useNavigate();
	return (
		<>
			<Card
				maxW="100%"
				minH="100svh"
				bgGradient="linear(to-br, var(--nsr-color13), var(--nsr-color14), var(--nsr-color15))"
			>
				<CardBody
					display="flex"
					flexDir="var(--nsr-direction1)"
					alignItems="center"
					justifyContent="center"
					mt="var(--nsr-margin4)"
				>
					<Image
						src={movie?.image}
						borderRadius="lg"
						w={{ base: "200px", md: "400px", lg: "500px" }}
						h={{ base: "300px", md: "500px", lg: "600px" }}
					/>
					<Stack
						mt="6"
						spacing="3"
						display="flex"
						align="center"
						justifyContent="center"
					>
						<Heading
							fontSize={{ base: "12px", md: "md", lg: "lg" }}
							textTransform="uppercase"
							color="var(--nsr-color1)"
							userSelect="var(--nsr-userSelect)"
						>
							{movie?.name}
						</Heading>
						<Text
							color="var(--nsr-color2)"
							userSelect="var(--nsr-userSelect)"
							textAlign="center"
							fontSize={{ base: "12px", md: "md", lg: "lg" }}
						>
							This movie from {movie?.platform} belongs to category of{" "}
							{movie?.category}
						</Text>
						<Rate
							disabled
							defaultValue={movie.stars}
							style={customStyle}
							character={({ index }) => (
								<span
									style={
										index + 1 <= movie.stars
											? { color: "#faad14" }
											: { color: "#d1d1d1" }
									}
								>
									★
								</span>
							)}
						/>
					</Stack>
				</CardBody>
				<Divider />
				<CardFooter display="flex" align="center" justify="center">
					<Button
						variant="solid"
						colorScheme="teal"
						onClick={() => {
							handleClickButtonTrailer(
								movie._id,
								movie.platform,
								navigate,
								place
							);
						}}
					>
						Watch Trailer
					</Button>
				</CardFooter>
			</Card>
		</>
	);
};

export default MovieCardInfo;
