import { Flex, Image } from "@chakra-ui/react";

const Loading = () => {
	return (
		<Flex
			w="100%"
			minH="100svh"
			bgGradient="linear(to-br, var(--nsr-color13), var(--nsr-color14), var(--nsr-color15))"
			align="center"
			justify="center"
		>
			<Image src="/assets/loading.gif" w="100px" h="100px" />
		</Flex>
	);
};

export default Loading;
