import { Flex, Image, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { customScrollStyles } from "../../../utils/MoviesFunctions/customScroll";

const MoviesCardAction = ({ moviesAction, platformName }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [platformName]);

  const handleClickCardImageAction = (newIndex) => {
    setIndex(newIndex);
  };

  return (
    <>
      <Flex
        w="700px"
        h="15px"
        align="center"
        justify="space-between"
        fontWeight="bolder"
        fontSize="20px"
        marginBottom="-25px"
      >
        <Text color="#4e2d1d" textTransform="uppercase">
          {moviesAction[0]?.category}
        </Text>
        <Text color="white">{moviesAction[index]?.name}</Text>
      </Flex>
      {moviesAction.length > 0 && (
        <Flex
          w="800px"
          h="300px"
          overflowX="auto"
          direction="row"
          align="center"
          bgColor="#e61b00"
          mb="20px"
          mt="20px"
          bgImage="url('https://www.transparenttextures.com/patterns/brick-wall.png')"
          outline="4px solid black"
          borderRadius="10px"
          sx={customScrollStyles}
        >
          {moviesAction.map((movie, idx) => (
            <Flex
              key={movie._id}
              w="200px"
              h="250px"
              bgColor="#ff7a7a"
              flexShrink={0}
              margin="10px"
              borderRadius="10px"
            >
              <Image
                cursor="pointer"
                src={movie.image}
                alt={movie.name}
                w="100%"
                h="100%"
                outline="2px solid black"
                objectFit="cover"
                borderRadius="10px"
                transition="all 0.5s"
                _hover={{ transform: "scale(0.8)" }}
                onClick={() => handleClickCardImageAction(idx)}
              />
            </Flex>
          ))}
        </Flex>
      )}
    </>
  );
};

export default MoviesCardAction;
