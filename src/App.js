import "./App.css";
import React from "react";
import { Flex, SimpleGrid } from "@chakra-ui/react";
import Header from "./components/header.js";
import Band from "./components/band";
import data from './metal.json'

function App() {
  return (
    <>
      <Flex flexDir={'column'}>
        <Header />
        <SimpleGrid columnGap={5} mt={10} rowGap={20} columns={[1, 2, 3, 3]} >
        {data.map((band, index) => (
          <Band key={index} band={band} />
        ))}
        </SimpleGrid>
      </Flex>
    </>
  );
}

export default App;
