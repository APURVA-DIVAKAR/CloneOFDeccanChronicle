
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Image
} from '@chakra-ui/react';

export default function CardsBig( { content,description,title,urlToImage } ) {
  return (
    // <Center py={6} >
      <Box
        maxW={'550px'}
        mt={'1rem'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
        border={'black'}>
        <Box
        //   h={'310px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Image
          objectFit={'contain'}
            src={
              urlToImage
            }
            layout={'fill'}
          />
        </Box>
        <Stack>
          {/* <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            Blog
          </Text> */}
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
           {title}
          </Heading>
          <Text color={'gray.500'}  textOverflow='ellipsis' whiteSpace='nowrap' overflow='hidden' >
            {content}
            {description}
          </Text>          
        </Stack>
        
      </Box>
    // </Center>
  );
}