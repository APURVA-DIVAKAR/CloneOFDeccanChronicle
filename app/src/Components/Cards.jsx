import { Box, Divider, Flex, Heading, Image,Text } from '@chakra-ui/react'
import React from 'react'

const Cards = ({urlToImage,title}) => {
  return (
   <Box pl='0px'> 
    <Flex p='0.5rem' maxW='350px' pb='-10px'>
        <Image w={'120px'} h={'90px'} src={urlToImage} m='auto'/>
        <Text p='1rem' fontSize='sm'  fontWeight='bold'  color='black' textAfter='justify'>{title}</Text>
       
    </Flex>
    <Divider mt='-20px'/>
    </Box> 
  )
}

export default Cards