import React from 'react'
import {Flex,Box, Button, Input, IconButton, HStack, Link, Text} from '@chakra-ui/react'
import {FiSearch} from 'react-icons/fi'
const Footer = () => {
  return (
    <Box  h='200px' bg='#f2f2f2 ' box-shadow='rgba(149, 157, 165, 0.2) 0px 8px 24px' >
      <Flex>
       <Input variant='outline' placeholder='Search' w='26rem' borderRadius='none' bg='white' ml ='30%' mt='2rem' />
       <Button as={IconButton} icon={<FiSearch/>} p='1rem 2rem'  ml='2rem' bg='#cecece' border='1px solid gray' mt='2rem'></Button>
      </Flex> 
      <HStack color='gray' font-weight='bold'  ml='6rem' mt='1rem'>
        <Link >HOME |</Link>
        <Link>ASIAN AGE |</Link>
        <Link>ANDHRABHOOMI |</Link>
        <Link>FINANCIAL CHRONICLE |</Link>
        <Link>ABOUT US |</Link>
        <Link>CONTACT US |</Link>
        <Link>CLASSIFIEDS |</Link>
        <Link>BOOK CLASSIFIEDS  |</Link>
        <Link>FEEDBACK |</Link>
        <Link>CARRERS |</Link>
        <Link>E-PAPER |</Link>
      </HStack>
      <HStack color='gray' w='17%' m='auto'>
      <Link>PRIVACY POLICIES</Link>
      </HStack>
      <Text color='gray' align='center'>Copyright © 2015 - 2022 Deccan Chronicle.</Text>
      <Text color='gray' align='center'>Designed, Developed & Maintained By <Link fontWeight='bold'>Daksham</Link></Text>
    </Box>
  )
}

export default Footer