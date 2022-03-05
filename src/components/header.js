import React from "react";
import { Flex } from "@chakra-ui/react";
import Metalmeta from "./metalmeta";

const Header = () => {
  return (
    <Flex p={5} bg={"gray.900"} w={"100%"} h={"25vh"} flexDir={"column"}>
      <Flex
        color={"white"}
        flexDir={"column"}
        fontSize={"30"}
        fontWeight={"light"}
      >
        <h1>Christian Thompson</h1>
        <h2>FEW 1.2 Final Assessment</h2>
      </Flex>
      <Flex mt={5}>
        <Metalmeta />
      </Flex>
    </Flex>
  );
};
export default Header;
