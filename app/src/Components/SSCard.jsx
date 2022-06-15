import React from 'react'
import {Box,Image,Text} from '@chakra-ui/react'

const SSCard = () => {
  return (
    <Box>
        <Image src={''} boxSize={'150px'} objectFit={'contain'}/>
        <Text as='h5'>{}</Text>
    </Box>
  )
}

export default SSCard