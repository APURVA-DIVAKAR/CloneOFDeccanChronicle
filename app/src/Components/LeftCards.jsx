import {Box, Divider, Flex, Heading, Image,Text } from '@chakra-ui/react'
import React from 'react'

const LeftCards = ({urlToImage,title}) => {
  return (
   <Box pl='0px'> 
    <Flex p='0.5rem' maxW='350px' pb='-10px'>
        
        <Text p='1rem'  fontWeight='bold'  color='black'>{title}</Text>
        <Image w={'120px'} h={'90px'} src={urlToImage} m='auto'/>
       
    </Flex>
    <Divider mt='-20px'/>
    </Box> 
  )
}

export default LeftCards