import { Box, Divider, Flex, Heading, Image,Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { ArticleContext } from '../ArticleContext'

const Cards = ({urlToImage,title,data}) => {
  const {topic,handleSet} = useContext(ArticleContext)
  return (
   <Box pl='0px' onClick={() => handleSet(data)}> 
    <Flex p='0.5rem' maxW='350px' pb='-10px'>
        <Image w={'120px'} h={'90px'} src={urlToImage} m='auto'/>
        <Text p='1rem' fontSize='sm'  fontWeight='bold'  color='black' textAfter='justify'>{title}</Text>
       
    </Flex>
    <Divider mt='-20px'/>
    </Box> 
  )
}

export default Cards