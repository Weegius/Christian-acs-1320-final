import React from "react";
import { Flex, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import Likes from "./likes";

const Band = ({ band }) => {
  return (
    <Flex
      flexDir={"column"}
      p={4}
      m={5}
      color={"white"}
      bg={"gray.900"}
      rounded={5}
      fontWeight="light"
    >
      <Heading>{band.band_name}</Heading>
      <Text>Formed :{band.formed}</Text>
      <Text>{band.origin}</Text>
      <Text>Fans: {(band.fans * 1000).toLocaleString("en")}</Text>
      <UnorderedList>
        {band.style.split(",").map((style, index) => (
          <ListItem key={index}>
            <Text >{style}</Text>
          </ListItem>
        ))}
      </UnorderedList>
      <Text>Split: {band.split}</Text>
      {band.split === "-" ? <Likes /> : null}
    </Flex>
  );
};
export default Band;
