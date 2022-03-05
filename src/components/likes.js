import { Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const Likes = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Flex>
        <Button onClick={() => setCount(count - 1)}>👎</Button>
        <Text ml={4} mr={4} fontSize="30">
          {count}
        </Text>
        <Button onClick={() => setCount(count + 1)}>👍</Button>
      </Flex>
    </>
  );
};
export default Likes;
