import { Box, Flex, Image, Text , VStack,Avatar, HStack } from '@chakra-ui/react'
import React from 'react'
import {HiShare} from 'react-icons/hi'

const Carsousel = ({data}) => {
  return (
   <Box maxW={'100%'} h={'380px'}>
    <Flex maxW={'100%'} h={'100%'}   overflowX= {'scroll'} >
       {
        data?.map((el,index)=>{
          return(
            <Box minW={'500px'} minH={'100%'} key={index}>
            <VStack key={el.id} maxH={'90%'} maxW={'100%'}   border={'1px solid gray'} borderBottom={'3px solid red'} align={'center'} ml={'3rem'}  >
              <Image src={el.urlToImage} alt='news' boxSize={'380px'} objectFit='contain' />
              <Text as='h3'>{el.title}</Text>
              <Flex bg='#f2f2f2' w={'100%'} justify={'space-between'}>
                {(index%2 ===0) ? <Text>11h</Text> : <Text>14h</Text>}
                <HStack>
                  <HiShare/>
                  <Text>|</Text>
                  <Text>{el.source.name}</Text>
                </HStack>
                <Avatar size='xs' name='DC' src='https://livescore.deccanchronicle.com/assets/images/dc_icon.png' />
              </Flex>
            </VStack>
            </Box> 
          )
        } 
          )
       }
    </Flex>
   </Box>
  )
}

export default Carsousel