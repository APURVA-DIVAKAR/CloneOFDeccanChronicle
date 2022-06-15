import { Box, Flex, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardsBig from "../Components/CardsBig";
import { getData,getTech } from "../Redux/Actions";
import { CircularProgress, CircularProgressLabel,Divider } from "@chakra-ui/react";
import { columnData} from  './coloumnData'

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useColorModeValue,
} from "@chakra-ui/react";
import Cards from "../Components/Cards";
import LeftCards from "../Components/LeftCards";
import Coloumn from "../Components/Coloumn";
import Ads from "../Components/Ads";
import Carsousel from "../Components/Carsousel";
import SCard from "../Components/SCard";
import SSCard from "../Components/SSCard";

const Home = () => {
    const coloumnData= columnData
  const news = useSelector((store) => store.newsData.top);
  const tech = useSelector((store) => store.newsData.tech);

  const loading = useSelector((store) => store.newsData.loading);
  console.log(loading);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getData())
    dispatch(getTech())
  }, []);
  console.log(tech);
  
  if (loading) {
    return;
    <CircularProgress
      isIndeterminate
      color="green.300"
      ml="45%"
      size="xl"
      mt="40%"
    />;
  }
  return (
    <Box w={'85%'} m='auto'>
    <Flex borderBottom='2px solid gray' pb='2rem' >
      <VStack w={'45%'} >
        {news?.slice(0, 3).map((el) => {
          return <CardsBig key={el.id} {...el} />;
        })}
        <Accordion allowToggle  maxW={'550px'}
        mt={'1rem'}
        w={'full'}
        // bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
        border={'black'}>
          <AccordionItem alignItems={'left'}>
            <h2>
              <AccordionButton alignItems={'center'}>
                <VStack alignItems={'center'}>
                  <Text>Show More Top Stories</Text>
                </VStack>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            {news?.slice(4, 9).map((el) => {
                return <CardsBig key={el.id} {...el} />;
                })}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        
      </VStack>
      {/* Small cards of news */}
      <VStack spacing='0rem' borderRight='1px solid gray'>
          {news?.slice(9, 19).map((el) => {
                return <Cards key={el.id} {...el} />;
                })}


      </VStack>
      {/* Most Popular stack */}
      <VStack spacing='0rem' ml='3px' bg={'#f2f2f2'} >
        <Box border='1px dotted gray'>
          {news?.slice(4, 9).map((el) => {
                return <LeftCards key={el.id} {...el} />;
                })}
        </Box>
        <Box>
            <Image src='https://' maxW='200px' h='300px' objectFit='contain' />
        </Box>
        <h1 style={{textAlign:'left', borderBottom:'2px solid red'}}>
        Column
        </h1> 
        <Box border='1px dotted gray'>
          {coloumnData?.map((el) => {
                return <Coloumn key={el.id} {...el} />;
                })}
        </Box>
      </VStack>
    </Flex>
    <Box w='80%' p='1rem' border='1px solid gray' mt='5px'>
    <Image m='auto' w='80%' src={'https://tpc.googlesyndication.com/simgad/10371733874986534664?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qlwF-pgFSP4xocJZjXsKb7e08NIDw'} />       
    </Box>
    <Divider mt='1rem'   sx={{ borderBottomWidth: 5 ,borderColor: "black.900" }} />
    <HStack w={'100%'} h={'400px'} pb='1.5rem'>
        <Box w={'55%'} h={'100%'}>
            <Heading as='h3' borderBottom='2px solid red'>CARTOON OF THE DAY</Heading>
            <Image src='https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/14d64906264ee7d4b85c5e28e43757564b2160d3-tc-img-web.jpg'/>
        </Box>
        <Box w={'35%'} h={'100%'}>
            <Heading as='h3' borderBottom='2px solid red'>COUNTER POINT</Heading>
            <Image src='https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/2719dbcadec930b2bc54462ad717c3cb2dc4922f-tc-img-web.jpg' boxSize={'100%'} objectFit='contain'/>
        </Box>
        <Box w='25%' h={'100%'}>
                <Image src='https://'/>
        </Box>
    </HStack>
    <Divider mt='1rem'   sx={{ borderBottomWidth: 5 ,borderColor: "black.900" }} />
      <Box w={'100%'} h={'400px'} border={'1px solid gray'}>
         <Box  w={'100%'} borderBottom={'1px solid gray'}>
            <Heading borderBottom={'3px solid red'} pb={'2px'} as='h2'>MORE FROM SOCIAL</Heading>
         </Box>
         <Carsousel/>
      </Box>
      {/* Entertainment */}
      <Box w={'100%'} bg='#f2f2f2' mt={'2rem'} mb={'2rem'}>
        <Text as ='h2' borderBottom={'3px solid red'} pb={'2px'}>ENTERTAINMENT</Text>
        <VStack>
        <Flex spacing={'3rem'}>
          <SCard data={tech.slice(0,4)}/>
        </Flex>
        <HStack mt={'2rem'}>
            {tech.slice(4,7).map(el=>{
                return <Cards key={el.id} {...el} />;
            })}
        </HStack>
        </VStack>
      </Box>
      <Divider mt='1rem'   sx={{ borderBottomWidth: 5 ,borderColor: "black.900" }} />
      {/* Jobs  */}
      <Box>
      <Text as ='h2' borderBottom={'3px solid red'} pb={'2px'}>JOBS & EDUCATION</Text>
      <HStack mt={'2rem'}>
            {tech.slice(7,11).map(el=>{
                return <Cards key={el.id} {...el} />;
            })}
        </HStack>
      </Box>
      {/* Sports */}
      <Box>
      <Text as ='h2' borderBottom={'3px solid red'} pb={'2px'}>SPORTS</Text>
      <HStack mt={'2rem'}>
            {tech.slice(7,11).map(el=>{
                return <SSCard key={el.id} {...el} />;
            })}
        </HStack>
        <HStack mt={'2rem'}>
            {tech.slice(7,11).map(el=>{
                return <Cards key={el.id} {...el} />;
            })}
        </HStack>
      </Box>
      <Box>
      <Text as ='h2' borderBottom={'3px solid red'} pb={'2px'}>LIFESTYLE</Text>
      <HStack mt={'2rem'}>
            {tech.slice(7,11).map(el=>{
                return <SSCard key={el.id} {...el} />;
            })}
        </HStack>
        <HStack mt={'2rem'}>
            {tech.slice(7,11).map(el=>{
                return <Cards key={el.id} {...el} />;
            })}
        </HStack>
      </Box>
      <Box>
      <Text as ='h2' borderBottom={'3px solid red'} pb={'2px'}>TECHNOLOGY</Text>
      <HStack mt={'2rem'}>
            {tech.slice(7,11).map(el=>{
                return <SSCard key={el.id} {...el} />;
            })}
        </HStack>        
      </Box>
      <Box>
      <Text as ='h2' borderBottom={'3px solid red'} pb={'2px'}>World</Text>
      <HStack mt={'2rem'}>
            {tech.slice(7,11).map(el=>{
                return <SSCard key={el.id} {...el} />;
            })}
        </HStack>
        <HStack mt={'2rem'}>
            {tech.slice(7,11).map(el=>{
                return <Cards key={el.id} {...el} />;
            })}
        </HStack>
      </Box>
      <Box>
      <Text as ='h2' borderBottom={'3px solid red'} pb={'2px'}>BUSINESS</Text>
      <HStack mt={'2rem'}>
            {tech.slice(7,11).map(el=>{
                return <SSCard key={el.id} {...el} />;
            })}
        </HStack>
        <HStack mt={'2rem'}>
            {tech.slice(7,11).map(el=>{
                return <Cards key={el.id} {...el} />;
            })}
        </HStack>
      </Box>
      <Box>
      <Text as ='h2' borderBottom={'3px solid red'} pb={'2px'}>SCIENCE</Text>
      <HStack mt={'2rem'}>
            {tech.slice(7,11).map(el=>{
                return <SSCard key={el.id} {...el} />;
            })}
        </HStack>
        <HStack mt={'2rem'}>
            {tech.slice(7,11).map(el=>{
                return <Cards key={el.id} {...el} />;
            })}
        </HStack>
      </Box>
      <Box>
      <Text as ='h2' borderBottom={'3px solid red'} pb={'2px'}>EDITOR'S PICK</Text>
      <HStack mt={'2rem'}>
            {tech.slice(7,11).map(el=>{
                return <SSCard key={el.id} {...el} />;
            })}
        </HStack>
        <HStack mt={'2rem'}>
            {tech.slice(7,11).map(el=>{
                return <Cards key={el.id} {...el} />;
            })}
        </HStack>
      </Box>
    </Box> 
  );
};

export default Home;
