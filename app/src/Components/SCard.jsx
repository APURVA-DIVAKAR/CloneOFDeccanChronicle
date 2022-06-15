import React from 'react'
import {Box,Image,Text} from '@chakra-ui/react'

const SCard = () => {
  return (
    <Box>
        <Image src={''} boxSize={'250px'} objectFit={'contain'}/>
        <Text as='h5'>{}</Text>
    </Box>
  )
}

export default SCard