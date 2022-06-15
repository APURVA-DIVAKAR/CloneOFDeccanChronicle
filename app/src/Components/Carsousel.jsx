import { Box, Flex, Image, Text , VStack,Avatar } from '@chakra-ui/react'
import React from 'react'
import {HiShare} from 'react-icons/hi'

const Carsousel = ({data}) => {
  return (
   <Box>
    <Flex maxW={'85%'}  overflowX= {'scroll'} >
       {
        data?.map((el,index)=>{
          return(
            <VStack key={el.id} h={'450px'}  border={'1px solid gray'} borderBottom={'3px solid red'} >
              <Image src='' alt='news' boxSize={'280px'} objectFit='contain'/>
              <Text as='h3'>Heading</Text>
              <Flex bg='#f2f2f2'>
                {(index%2 ===0) ? <Text>11h</Text> : <Text>14h</Text>}
                <Box>
                  <HiShare/>
                  |
                  <Text>{el.tag[0]}</Text>
                </Box>
                <Avatar size='xs' name='DC' src='https://livescore.deccanchronicle.com/assets/images/dc_icon.png' />
              </Flex>
            </VStack>
          )
        } 
          )
       }
    </Flex>
   </Box>
  )
}

export default Carsousel