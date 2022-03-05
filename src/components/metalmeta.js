import data from '../metal.json'
import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

const Metalmeta = () => {

  return (
    <Flex color={'white'} flexDir={'column'} fontSize={'20'} fontWeight={'light'} >
      <Text>Metal Bands 🤘</Text>
      <Text>Total Bands: {data.length}</Text>
    </Flex>
  )
}
export default Metalmeta;
