import { HStack,Text,Image } from '@chakra-ui/react'
import React from 'react'

const Coloumn = ({writerImg,title}) => {
  return (
    <HStack p='0.5rem' maxW='350px' pb='-10px'>
        <Image
            borderRadius='full'
            boxSize='150px'
            src={writerImg}
            alt='author'
            />
         <Text p='1rem' fontSize='sm'  fontWeight='bold'  color='black' textAfter='justify'>{title}</Text>  
    </HStack>  )
}

export default Coloumn