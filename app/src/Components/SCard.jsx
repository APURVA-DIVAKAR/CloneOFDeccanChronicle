import React from 'react'
import {Box,Image,Text} from '@chakra-ui/react'
import { ArticleContext } from '../ArticleContext'
import { useContext } from 'react'

const SCard = ({urlToImage,title,data}) => {
  const {topic,handleSet} = useContext(ArticleContext)
  return (
    <Box onClick={() => handleSet(data)}>
        <Image src={urlToImage} boxSize={'250px'} objectFit={'contain'}/>
        <Text as='h5'>{title}</Text>
    </Box>
  )
}

export default SCard