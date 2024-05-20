import { Flex, Image, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { customScrollStyles } from "../../../utils/MoviesFunctions/customScroll";

const MoviesCardKids = ({ moviesKids, platformName }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [platformName]);

  const handleClickCardImageKids = (newIndex) => {
    setIndex(newIndex);
  };

  return (
    <>
      <Flex
        w="700px"
        h="20px"
        align="center"
        justify="space-between"
        marginBottom="-25px"
        fontWeight="bolder"
        fontSize="20px"
      >
        <Text color="#4e2d1d" textTransform="uppercase">
          {moviesKids[0]?.category}
        </Text>
        <Text color="white">{moviesKids[index]?.name}</Text>
      </Flex>
      {moviesKids.length > 0 && (
        <Flex
          w="800px"
          h="300px"
          overflowX="auto"
          direction="row"
          align="center"
          bgColor="#7a7000"
          mb="20px"
          mt="20px"
          bgImage="url('https://www.transparenttextures.com/patterns/brick-wall.png')"
          sx={customScrollStyles}
          outline="4px solid black"
          borderRadius="10px"
        >
          {moviesKids.map((movie, idx) => (
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
                onClick={() => {
                  handleClickCardImageKids(idx);
                }}
              />
            </Flex>
          ))}
        </Flex>
      )}
    </>
  );
};

export default MoviesCardKids;
